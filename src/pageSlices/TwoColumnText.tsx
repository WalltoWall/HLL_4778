import * as React from "react"
import clsx from "clsx"
import { graphql } from "gatsby"
import { undefIfEmpty } from "@walltowall/helpers"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { TwoColumnTextFragment } from "../gqlTypes.gen"
import { getColorVariant, getColorVariantStyles } from "../lib/colorVariant"

import { HTMLContent } from "../components/HTMLContent"
import { BoundedBox } from "../components/BoundedBox"

export const sliceType = "PrismicPageDataBodyTwoColumnText"

const TwoColumnText = ({
	leftHTML,
	rightHTML,
	color,
	nextSharesBg,
	nextOverhangs,
	previousOverhangs,
}: ReturnType<typeof mapDataToProps>) => {
	const variantStyles = getColorVariantStyles(color)

	return (
		<BoundedBox
			className={variantStyles.bg}
			width="base"
			nextSharesBg={nextSharesBg}
			nextOverhangs={nextOverhangs}
			previousOverhangs={previousOverhangs}
		>
			<div
				className={clsx(
					"grid text-center gap-y-12",
					"md:grid-cols-2 md:text-left md:gap-y-0",
					"md:gap-x-10 lg:gap-x-20",
					variantStyles.textColor
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
	previousContext,
}: MapDataToPropsCtx<TwoColumnTextFragment>) {
	return {
		leftHTML: undefIfEmpty(data.primary?.left_text?.html),
		rightHTML: undefIfEmpty(data.primary?.right_text?.html),
		color: getColorVariant(data.primary?.color),
		nextSharesBg: nextContext?.backgroundColor === "blue",
		previousOverhangs: previousContext?.overhangsPrevious,
		nextOverhangs: nextContext?.overhangsNext,
	}
}

export function mapDataToContext({
	data,
}: MapDataToContextCtx<TwoColumnTextFragment>) {
	return {
		backgroundColor: getColorVariant(data.primary?.color),
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
			color
		}
	}
`

export default TwoColumnText