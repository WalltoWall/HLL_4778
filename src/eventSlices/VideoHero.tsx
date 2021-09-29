import { graphql } from "gatsby"
import VideoHero, {
	mapDataToProps,
	mapDataToContext,
} from "../pageSlices/VideoHero"

export const sliceType = "PrismicEventDataBodyVideoHero"

export { mapDataToContext, mapDataToProps }

export const gqlFragment = graphql`
	fragment EventVideoHero on PrismicEventDataBodyVideoHero {
		primary {
			text {
				text
			}
			video_thumbnail {
				alt
				url
			}
			video_url
		}
	}
`

export default VideoHero
