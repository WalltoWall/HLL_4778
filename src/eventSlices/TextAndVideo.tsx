import { graphql } from "gatsby"

import TextAndVideo, {
	mapDataToContext,
	mapDataToProps,
} from "../pageSlices/TextAndVideo"

export const sliceType = "PrismicEventDataBodyTextAndVideo"

export { mapDataToContext, mapDataToProps }

export const gqlFragment = graphql`
	fragment EventTextAndVideo on PrismicEventDataBodyTextAndVideo {
		primary {
			video_thumbnail {
				url
				alt
			}
			thumbnail_side
			video_url
			text {
				html
			}
			color
		}
	}
`

export default TextAndVideo
