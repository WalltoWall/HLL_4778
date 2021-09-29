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
						_previewable
						submissions {
							_previewable
							url
							uid
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
								video_url
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
