import { graphql } from "gatsby"

import VideoGallery, {
	mapDataToContext,
	mapDataToProps,
} from "../pageSlices/VideoGallery"

export { mapDataToContext, mapDataToProps }

export const sliceType = "PrismicEventDataBodyVideoGallery"

export const gqlFragment = graphql`
	fragment EventVideoGallery on PrismicEventDataBodyVideoGallery {
		primary {
			subheading1 {
				text
			}
			heading {
				text
			}
			text {
				html
			}
			color
			video_submission_type {
				document {
					... on PrismicSubmissionType {
						id
						submissions {
							data {
								name {
									text
								}
								description {
									html
								}
								subtitle {
									text
								}
								video_thumbnail {
									url
									alt
								}
								votable
							}
						}
					}
				}
			}
		}
	}
`

export default VideoGallery
