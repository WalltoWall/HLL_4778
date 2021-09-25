import { graphql } from "gatsby"

import Anchor, { mapDataToContext, mapDataToProps } from "../pageSlices/Anchor"

export const sliceType = "PrismicEventDataBodyAnchor"

export { mapDataToContext, mapDataToProps }

export const gqlFragment = graphql`
	fragment EventAnchor on PrismicEventDataBodyAnchor {
		primary {
			anchor
		}
	}
`

export default Anchor
