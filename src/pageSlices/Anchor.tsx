import * as React from "react"
import { graphql } from "gatsby"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { AnchorFragment } from "../gqlTypes.gen"
import clsx from "clsx"

export const sliceType = "PrismicPageDataBodyAnchor"

const Anchor = ({ id, nextOverhangs }: ReturnType<typeof mapDataToProps>) => {
	return (
		<div
			id={id}
			className={clsx(
				"relative",
				nextOverhangs && "-top-16 sm:-top-20 md:-top-24 lg:-top-36"
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
		nextOverhangs: nextContext?.overhangsPrevious,
	}
}

export function mapDataToContext({
	NextComp,
	PreviousComp,
	...rest
}: MapDataToContextCtx<AnchorFragment>) {
	//@ts-expect-error - Slice components generally have this function available.
	const nextCtx = NextComp?.mapDataToContext?.({
		NextComp,
		...rest,
	})

	//@ts-expect-error - Slice components generally have this function available.
	const prevCtx = PreviousComp?.mapDataToContext?.({
		NextComp,
		...rest,
	})

	return {
		nextCtx,
		prevCtx,
	}
}

export const gqlFragment = graphql`
	fragment Anchor on PrismicPageDataBodyAnchor {
		primary {
			anchor
		}
	}
`

export default Anchor
