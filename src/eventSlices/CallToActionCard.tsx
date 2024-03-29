import { graphql } from "gatsby"

import CallToActionCard, {
	mapDataToContext,
	mapDataToProps,
} from "../pageSlices/CallToActionCard"

export const sliceType = "PrismicEventDataBodyCallToActionCard"

export { mapDataToContext, mapDataToProps }

export const gqlFragment = graphql`
	fragment EventCallToActionCard on PrismicEventDataBodyCallToActionCard {
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

export default CallToActionCard
