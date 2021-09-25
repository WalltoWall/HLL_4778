import { graphql } from "gatsby"
import CallToAction, {
	mapDataToProps,
	mapDataToContext,
} from "../pageSlices/CallToAction"

export const sliceType = "PrismicEventDataBodyCallToAction"

export { mapDataToContext, mapDataToProps }

export const gqlFragment = graphql`
	fragment EventCallToAction on PrismicEventDataBodyCallToAction {
		primary {
			heading {
				text
			}
			button_link {
				url
			}
			button_text
		}
	}
`

export default CallToAction
