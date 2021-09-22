import * as React from "react"
import clsx from "clsx"
import { graphql } from "gatsby"
import { undefIfEmpty } from "@walltowall/helpers"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { TwoColumnTextFragment } from "../gqlTypes.gen"
import type { ColorVariant } from "../lib/getColorVariant"

import { HTMLContent } from "../components/HTMLContent"
import { BoundedBox } from "../components/BoundedBox"
import { sliceType as CallToActionCardSliceType } from "./CallToActionCard"

export const sliceType = "PrismicPageDataBodyTwoColumnText"

const TwoColumnText = ({
	leftHTML,
	rightHTML,
	nextSharesBg,
	prevOverhangs = false,
}: ReturnType<typeof mapDataToProps>) => {
	return (
		<BoundedBox
			className={clsx("bg-blue-31", prevOverhangs && "pt-40 md:pt-48 lg:pt-80")}
			nextSharesBg={nextSharesBg}
			width="base"
		>
			<div
				className={clsx(
					"grid text-center gap-y-12 text-beige-92",
					"md:grid-cols-2 md:text-left md:gap-y-0",
					"md:gap-x-10 lg:gap-x-20"
				)}
			>
				{leftHTML && <HTMLContent html={leftHTML} />}
				{rightHTML && <HTMLContent html={rightHTML} />}
			</div>
		</BoundedBox>
	)
}

export function mapDataToProps({
	data,
	nextContext,
	previousType,
}: MapDataToPropsCtx<TwoColumnTextFragment>) {
	const prevOverhangs = previousType === CallToActionCardSliceType

	return {
		leftHTML: undefIfEmpty(data.primary?.left_text?.html),
		rightHTML: undefIfEmpty(data.primary?.right_text?.html),
		nextSharesBg: nextContext?.backgroundColor === "blue",
		prevOverhangs,
	}
}

export function mapDataToContext(
	_ctx: MapDataToContextCtx<TwoColumnTextFragment>
) {
	return {
		backgroundColor: "blue" as ColorVariant,
	}
}

export const gqlFragment = graphql`
	fragment TwoColumnText on PrismicPageDataBodyTwoColumnText {
		primary {
			left_text {
				html
			}
			right_text {
				html
			}
		}
	}
`

export default TwoColumnText
