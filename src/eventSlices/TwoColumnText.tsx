import { graphql } from "gatsby"

import TwoColumnText, {
	mapDataToContext,
	mapDataToProps,
} from "../pageSlices/TwoColumnText"

export const sliceType = "PrismicEventDataBodyTwoColumnText"

export { mapDataToContext, mapDataToProps }

export const gqlFragment = graphql`
	fragment EventTwoColumnText on PrismicEventDataBodyTwoColumnText {
		primary {
			left_text {
				html
			}
			right_text {
				html
			}
			color
			button_text
			button_link {
				url
			}
			button_side
		}
	}
`

export default TwoColumnText
