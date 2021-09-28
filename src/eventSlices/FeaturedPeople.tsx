import { graphql } from "gatsby"

import FeaturedPeople, {
	mapDataToContext,
	mapDataToProps,
} from "../pageSlices/FeaturedPeople"

export { mapDataToContext, mapDataToProps }

export const sliceType = "PrismicEventDataBodyFeaturedPeople"

export const gqlFragment = graphql`
	fragment EventFeaturedPeople on PrismicEventDataBodyFeaturedPeople {
		primary {
			subheading {
				text
			}
			heading {
				text
			}
			color
		}
		items {
			name {
				text
			}
			title1 {
				text
			}
			pronouns {
				text
			}
			bio {
				html
			}
			headshot {
				url
				alt
			}
			instagram_handle
			instagram_profile_url {
				url
			}
			website_label
			website_url {
				url
			}
		}
	}
`

export default FeaturedPeople
