import { graphql } from "gatsby"

import ImageCallToAction, {
	mapDataToProps,
	mapDataToContext,
} from "../pageSlices/ImageCallToAction"

export const sliceType = "PrismicEventDataBodyImageCallToAction"

export { mapDataToContext, mapDataToProps }

export const gqlFragment = graphql`
	fragment EventImageCallToAction on PrismicEventDataBodyImageCallToAction {
		primary {
			image {
				url
				alt
			}
			text {
				html
			}
			button_link {
				url
			}
			button_text
			color
		}
	}
`

export default ImageCallToAction
