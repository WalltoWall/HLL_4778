import { graphql } from "gatsby"

import PrideCalendar, {
	mapDataToContext,
	mapDataToProps,
} from "../pageSlices/PrideCalendar"

export const sliceType = "PrismicEventDataBodyPrideCalendar"

export { mapDataToContext, mapDataToProps }

export const gqlFragment = graphql`
	fragment EventPrideCalendar on PrismicEventDataBodyPrideCalendar {
		primary {
			color
			text {
				html
			}
		}
		items {
			event_description {
				html
			}
			event_link {
				url
			}
			event_title {
				text
			}
			image {
				alt
				url
			}
		}
	}
`

export default PrideCalendar
