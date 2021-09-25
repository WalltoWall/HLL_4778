import { graphql } from "gatsby"

import Introduction, {
	mapDataToContext,
	mapDataToProps,
} from "../pageSlices/Introduction"

export const sliceType = "PrismicEventDataBodyIntroduction"

export { mapDataToContext, mapDataToProps }

export const gqlFragment = graphql`
	fragment EventIntroduction on PrismicEventDataBodyIntroduction {
		primary {
			heading {
				text
			}
			text {
				html
			}
			color
		}
	}
`

export default Introduction
