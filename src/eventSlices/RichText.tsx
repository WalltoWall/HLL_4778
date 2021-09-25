import { graphql } from "gatsby"

import RichText, {
	mapDataToContext,
	mapDataToProps,
} from "../pageSlices/RichText"

export const sliceType = "PrismicEventDataBodyRichText"

export { mapDataToContext, mapDataToProps }

export const gqlFragment = graphql`
	fragment EventRichText on PrismicEventDataBodyRichText {
		primary {
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

export default RichText
