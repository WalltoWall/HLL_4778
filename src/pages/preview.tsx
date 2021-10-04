import * as React from "react"
import { withPrismicPreviewResolver } from "gatsby-plugin-prismic-previews"

import { linkResolver } from "../prismic"
import { PRISMIC_REPOSITORY_NAME } from "../constants"

const PreviewPage = () => {
	return (
		<div>
			<h1>Loading preview…</h1>
		</div>
	)
}

export default withPrismicPreviewResolver(PreviewPage, [
	{
		repositoryName: PRISMIC_REPOSITORY_NAME,
		linkResolver,
	},
])
