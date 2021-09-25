import * as React from "react"
import { graphql } from "gatsby"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { AnchorFragment } from "../gqlTypes.gen"
import clsx from "clsx"

export const sliceType = "PrismicPageDataBodyAnchor"

const Anchor = ({
	id,
}: // adjustForOverhang,
ReturnType<typeof mapDataToProps>) => {
	return (
		<div
			id={id}
			className={clsx(
				"relative"
				// adjustForOverhang && "-top-40 md:-top-48 lg:-top-64"
			)}
			aria-hidden
		/>
	)
}

export function mapDataToProps({
	data,
	nextContext,
}: MapDataToPropsCtx<AnchorFragment>) {
	return {
		id: data.primary?.anchor,
		adjustForOverhang: nextContext?.overhangs,
	}
}

export function mapDataToContext({
	NextComp,
	...rest
}: MapDataToContextCtx<AnchorFragment>) {
	//@ts-expect-error - Slice components generally have this function available.
	const forwardedCtx = NextComp?.mapDataToContext?.({ NextComp, ...rest })

	return forwardedCtx
}

export const gqlFragment = graphql`
	fragment Anchor on PrismicPageDataBodyAnchor {
		primary {
			anchor
		}
	}
`

export default Anchor
