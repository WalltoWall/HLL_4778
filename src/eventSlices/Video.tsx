import { graphql } from "gatsby"
import Video, { mapDataToProps, mapDataToContext } from "../pageSlices/Video"

export const sliceType = "PrismicEventDataBodyVideo"

export { mapDataToContext, mapDataToProps }

export const gqlFragment = graphql`
	fragment EventVideo on PrismicEventDataBodyVideo {
		primary {
			thumbnail {
				alt
				url
			}
		}
	}
`

export default Video
