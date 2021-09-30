import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { z } from "zod"
import { FirebaseVideo } from "../firebase/FirebaseVideo"

const VoteRequestBody = z.object({
	videoUid: z.string(),
	videoSubmissionType: z.string(),
	userId: z.string(),
})
export type VoteRequestBody = z.infer<typeof VoteRequestBody>
export interface VoteHandlerResponseData {
	success: boolean
	errors?: z.ZodIssue[] | string
}

export default async function handler(
	req: GatsbyFunctionRequest,
	res: GatsbyFunctionResponse
) {
	const parseResult = VoteRequestBody.safeParse(req.body)
	if (!parseResult.success) {
		res.statusCode = 400

		return res.json({ success: false, errors: parseResult.error.issues })
	}

	const body = parseResult.data

	let video = await FirebaseVideo.findMaybeOne(
		body.videoUid,
		body.videoSubmissionType
	)
	if (!video) {
		video = new FirebaseVideo({
			uid: body.videoUid,
			votes: 0,
			submissionType: body.videoSubmissionType,
		})
	}

	video.votes = video.votes + 1

	const success = await video.save()
	if (!success) {
		res.statusCode = 502

		return res.json({ success: false, errors: "Failed to save vote." })
	}

	return res.json({ success: true })
}
