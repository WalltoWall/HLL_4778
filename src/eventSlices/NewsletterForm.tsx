import { graphql } from "gatsby"

import NewsletterForm, {
	mapDataToContext,
	mapDataToProps,
} from "../pageSlices/NewsletterForm"

export const sliceType = "PrismicEventDataBodyNewsletterForm"

export { mapDataToContext, mapDataToProps }

export const gqlFragment = graphql`
	fragment EventNewsletterForm on PrismicEventDataBodyNewsletterForm {
		primary {
			heading {
				text
			}
			placeholder_text
			color
		}
	}
`

export default NewsletterForm
