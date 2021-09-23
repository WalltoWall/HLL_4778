import * as React from "react"
import { graphql } from "gatsby"
import clsx from "clsx"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { CallToActionCardFragment } from "../gqlTypes.gen"

import { ButtonLink } from "../components/Button"
import { BoundedBox } from "../components/BoundedBox"
import { Card } from "../components/Card"

export const sliceType = "PrismicPageDataBodyCallToActionCard"

const CallToActionCard = ({
	subheading,
	heading,
	buttonHref,
	buttonText,
}: ReturnType<typeof mapDataToProps>) => {
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
					"bg-purple-57",
					"translate-y-[-50%]"
				)}
			>
				{subheading && (
					<h2
						className={clsx(
							"font-sansExt",
							"tracking-caps",
							"text-beige-92",
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
							"text-beige-92",
							"text-42 md:text-52 lg:text-62",
							"leading-1",
							"mb-8 md:mb-10 lg:mb-12"
						)}
					>
						{heading}
					</h2>
				)}

				{buttonHref && buttonText && (
					<ButtonLink variant="filled" href={buttonHref}>
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
		}
	}
`

export default CallToActionCard
