import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { z } from "zod"
import { format } from "@fast-csv/format"

import { FirebaseVideo } from "../firebase/FirebaseVideo"

const ExportRequestParams = z.object({
	videoSubmissionType: z.string(),
})

export default async function handler(
	req: GatsbyFunctionRequest,
	res: GatsbyFunctionResponse
) {
	const parseResult = ExportRequestParams.safeParse(req.query)
	if (!parseResult.success) {
		res.statusCode = 400

		return res.json({ success: false, errors: parseResult.error.issues })
	}

	const params = parseResult.data
	const videos = await FirebaseVideo.findAllByType(params.videoSubmissionType)

	res.setHeader("Content-Type", "text/csv")
	res.setHeader(
		"Content-Disposition",
		`attachment; filename="export-${
			params.videoSubmissionType
		}-${Date.now()}.csv"`
	)

	const csvStream = format({ headers: ["id", "votes"] })
	csvStream.pipe(res).on("end", res.send)

	videos.forEach((video) => {
		csvStream.write({ id: video.uid, votes: video.votes })
	})

	csvStream.end()
}
