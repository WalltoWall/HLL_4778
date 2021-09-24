import * as React from "react"
import { graphql } from "gatsby"
import clsx from "clsx"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { CallToActionCardFragment } from "../gqlTypes.gen"

import { ButtonLink } from "../components/Button"
import { BoundedBox } from "../components/BoundedBox"
import { Card } from "../components/Card"
import { getColorVariant, getColorVariantStyles } from "../lib/colorVariant"

export const sliceType = "PrismicPageDataBodyCallToActionCard"

const CallToActionCard = ({
	subheading,
	heading,
	buttonHref,
	buttonText,
	color,
}: ReturnType<typeof mapDataToProps>) => {
	const variantStyles = getColorVariantStyles(color)

	return (
		<BoundedBox
			tag="section"
			width="base"
			nextSharesBg={true}
			className="relative h-0 pt-0 sm:pt-0 md:pt-0 lg:pt-0"
		>
			<Card
				className={clsx(
					"isolate",
					"flex flex-col items-center text-center",
					variantStyles.bg,
					"translate-y-[-50%]"
				)}
			>
				{subheading && (
					<h2
						className={clsx(
							"font-sansExt",
							"tracking-caps",
							variantStyles.textColor,
							"text-12 md:text-16 lg:text-22",
							"leading-1",
							"mb-3 md:mb-4 lg:mb-6"
						)}
					>
						{subheading}
					</h2>
				)}

				{heading && (
					<h2
						className={clsx(
							"font-serif",
							variantStyles.textColor,
							"text-42 md:text-52 lg:text-62",
							"leading-1",
							"mb-8 md:mb-10 lg:mb-12"
						)}
					>
						{heading}
					</h2>
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
}: MapDataToPropsCtx<CallToActionCardFragment>) {
	return {
		subheading: data.primary?.subheading?.text,
		heading: data.primary?.heading?.text,
		buttonHref: data.primary?.button_link?.url,
		buttonText: data.primary?.button_text,
		color: getColorVariant(data.primary?.color),
	}
}

export function mapDataToContext(
	_ctx: MapDataToContextCtx<CallToActionCardFragment>
) {
	return { backgroundColor: Symbol("never"), overhangs: true }
}

export const gqlFragment = graphql`
	fragment CallToActionCard on PrismicPageDataBodyCallToActionCard {
		primary {
			subheading {
				text
			}
			heading {
				text
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
