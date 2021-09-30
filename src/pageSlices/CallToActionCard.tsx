import * as React from "react"
import { graphql } from "gatsby"
import clsx from "clsx"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { CallToActionCardFragment } from "../gqlTypes.gen"

import { ButtonLink } from "../components/Button"
import { BoundedBox } from "../components/BoundedBox"
import { Card } from "../components/Card"
import { getColorVariant, getColorVariantStyles } from "../lib/colorVariant"
import { undefIfEmpty } from "@walltowall/helpers"
import { HTMLContent } from "../components/HTMLContent"

export const sliceType = "PrismicPageDataBodyCallToActionCard"

const CallToActionCard = ({
	textHTML,
	buttonHref,
	buttonText,
	color,
}: ReturnType<typeof mapDataToProps>) => {
	const variantStyles = getColorVariantStyles(color)

	return (
		<BoundedBox tag="section" width="base" className="h-0">
			<Card
				className={clsx(
					"isolate",
					"grid justify-items-center",
					"gap-y-8 md:gap-y-9 lg:gap-y-12",
					"translate-y-[-50%]",
					variantStyles.bg,
					variantStyles.textColor
				)}
			>
				{textHTML && (
					<HTMLContent html={textHTML} className="text-center" variant="lg" />
				)}

				{buttonHref && buttonText && (
					<ButtonLink color={variantStyles.buttonColor} href={buttonHref}>
						{buttonText}
					</ButtonLink>
				)}
			</Card>
		</BoundedBox>
	)
}

export function mapDataToProps({
	data,
}: MapDataToPropsCtx<
	CallToActionCardFragment,
	ReturnType<typeof mapDataToContext>
>) {
	return {
		textHTML: undefIfEmpty(data.primary?.text?.html),
		buttonHref: data.primary?.button_link?.url,
		buttonText: data.primary?.button_text,
		color: getColorVariant(data.primary?.color),
	}
}

export function mapDataToContext(
	_ctx: MapDataToContextCtx<CallToActionCardFragment>
) {
	return {
		backgroundColor: Symbol("never"),
		overhangsPrevious: true,
		overhangsNext: true,
	}
}

export const gqlFragment = graphql`
	fragment CallToActionCard on PrismicPageDataBodyCallToActionCard {
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

export default CallToActionCard
