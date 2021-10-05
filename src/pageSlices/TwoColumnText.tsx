import * as React from "react"
import clsx from "clsx"
import { graphql } from "gatsby"
import { undefIfEmpty } from "@walltowall/helpers"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { TwoColumnTextFragment } from "../gqlTypes.gen"
import { getColorVariant, getColorVariantStyles } from "../lib/colorVariant"

import { HTMLContent } from "../components/HTMLContent"
import { BoundedBox } from "../components/BoundedBox"
import { resolveNextContext, resolvePrevContext } from "../lib/mapToComponents"
import { ButtonLink } from "../components/Button"

export const sliceType = "PrismicPageDataBodyTwoColumnText"

const TwoColumnText = ({
	leftHTML,
	rightHTML,
	color,
	buttonSide = "left",
	buttonText,
	buttonURL,
	nextSharesBg,
	nextOverhangs,
	previousOverhangs,
}: ReturnType<typeof mapDataToProps>) => {
	const variantStyles = getColorVariantStyles(color)

	const hasButton = buttonText && buttonURL
	const buttonOnLeft = hasButton && buttonSide === "left"
	const buttonOnRight = hasButton && buttonSide === "right"

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
					"md:grid-cols-2 md:text-left",
					"md:gap-x-10 lg:gap-x-20",
					hasButton && "md:grid-rows-[auto,1fr]",
					variantStyles.textColor
				)}
			>
				{leftHTML && (
					<HTMLContent
						html={leftHTML}
						variant="md"
						className={clsx(buttonOnRight && "row-span-2")}
					/>
				)}
				{rightHTML && (
					<HTMLContent
						html={rightHTML}
						variant="md"
						className={clsx(buttonOnLeft && "row-span-2")}
					/>
				)}

				{hasButton && (
					<ButtonLink
						color="beige"
						href={buttonURL}
						className={clsx(
							"justify-self-center",
							"md:justify-self-start md:self-start"
						)}
					>
						{buttonText}
					</ButtonLink>
				)}
			</div>
		</BoundedBox>
	)
}

export function mapDataToProps({
	data,
	nextContext,
	previousContext,
}: MapDataToPropsCtx<TwoColumnTextFragment>) {
	const color = getColorVariant(data.primary?.color)
	const prevCtx = resolvePrevContext(previousContext)
	const nextCtx = resolveNextContext(nextContext)

	return {
		leftHTML: undefIfEmpty(data.primary?.left_text?.html),
		rightHTML: undefIfEmpty(data.primary?.right_text?.html),
		buttonText: data.primary?.button_text,
		buttonURL: data.primary?.button_link?.url,
		buttonSide: data.primary?.button_side?.toLowerCase() as "left" | "right",
		color,

		nextSharesBg: nextContext?.backgroundColor === color,
		previousOverhangs: prevCtx?.overhangsNext,
		nextOverhangs: nextCtx?.overhangsPrevious,
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
			button_text
			button_link {
				url
			}
			button_side
		}
	}
`

export default TwoColumnText
