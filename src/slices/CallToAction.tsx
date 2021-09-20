import * as React from "react"
import clsx from "clsx"
import { graphql } from "gatsby"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { CallToActionFragment } from "../gqlTypes.gen"
import { BoundedBox } from "../components/BoundedBox"
import { ButtonLink } from "../components/Button"

export const sliceType = "PrismicPageDataBodyCallToAction"

const CallToAction = ({
	heading,
	buttonHref,
	buttonText,
	nextSharesBg,
}: ReturnType<typeof mapDataToProps>) => {
	return (
		<BoundedBox
			tag="section"
			className="bg-beige-92"
			nextSharesBg={nextSharesBg}
		>
			<div
				className={clsx(
					"flex flex-col items-center",
					"space-y-8 lg:space-y-10"
				)}
			>
				{heading && (
					<h2
						className={clsx(
							"font-serif",
							"text-22 md:text-32 lg:text-42",
							"text-center",
							"leading-1",
							"max-w-[18ch] mx-auto"
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
			</div>
		</BoundedBox>
	)
}

export function mapDataToProps({
	data,
	nextContext,
}: MapDataToPropsCtx<CallToActionFragment>) {
	return {
		heading: data.primary?.heading?.text,
		buttonHref: data.primary?.button_link?.url,
		buttonText: data.primary?.button_text,
		nextSharesBg: nextContext?.backgroundColor === "beige",
	}
}

export function mapDataToContext(
	_ctx: MapDataToContextCtx<CallToActionFragment>
) {
	return {
		backgroundColor: "beige",
	}
}

export const gqlFragment = graphql`
	fragment CallToAction on PrismicPageDataBodyCallToAction {
		primary {
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

export default CallToAction
