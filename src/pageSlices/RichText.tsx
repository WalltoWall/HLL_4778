import * as React from "react"
import clsx from "clsx"
import { graphql } from "gatsby"
import { undefIfEmpty } from "@walltowall/helpers"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { RichTextFragment } from "../gqlTypes.gen"
import { getColorVariant, getColorVariantStyles } from "../lib/colorVariant"

import { HTMLContent } from "../components/HTMLContent"
import { BoundedBox } from "../components/BoundedBox"
import { ButtonLink } from "../components/Button"

export const sliceType = "PrismicPageDataBodyRichText"

const RichText = ({
	textHTML,
	buttonHref,
	buttonText,
	nextSharesBg,
	color,
	nextOverhangs,
	previousOverhangs,
}: ReturnType<typeof mapDataToProps>) => {
	const variantStyles = getColorVariantStyles(color)

	return (
		<BoundedBox
			tag="section"
			className={variantStyles.bg}
			nextSharesBg={nextSharesBg}
			nextOverhangs={nextOverhangs}
			previousOverhangs={previousOverhangs}
		>
			<div
				className={clsx(
					"flex flex-col items-center space-y-12",
					"text-center",
					variantStyles.textColor
				)}
			>
				{textHTML && (
					<HTMLContent html={textHTML} className="max-w-3xl" variant="lg" />
				)}

				{buttonHref && buttonText && (
					<ButtonLink href={buttonHref} color={variantStyles.buttonColor}>
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
}: MapDataToPropsCtx<RichTextFragment>) {
	const color = getColorVariant(data.primary?.color)

	return {
		textHTML: undefIfEmpty(data.primary?.text?.html),
		buttonHref: data.primary?.button_link?.url,
		buttonText: data.primary?.button_text,
		color,
		nextSharesBg: nextContext?.backgroundColor === color,
		previousOverhangs: previousContext?.overhangsNext,
		nextOverhangs: nextContext?.overhangsPrevious,
	}
}

export function mapDataToContext({
	data,
}: MapDataToContextCtx<RichTextFragment>) {
	return {
		backgroundColor: getColorVariant(data.primary?.color),
	}
}

export const gqlFragment = graphql`
	fragment RichText on PrismicPageDataBodyRichText {
		primary {
			text {
				html
			}
			button_link {
				url
			}
			button_text
			color
		}
	}
`

export default RichText
