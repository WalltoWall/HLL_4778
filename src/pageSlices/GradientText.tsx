import * as React from "react"
import clsx from "clsx"
import { graphql } from "gatsby"

import { Gradient } from "../components/Gradient"
import { useMobileMenu } from "../components/Header/MobileMenuProvider"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { GradientTextFragment } from "../gqlTypes.gen"
import { ButtonLink } from "../components/Button"

export const sliceType = "PrismicPageDataBodyGradientText"

type Props = ReturnType<typeof mapDataToProps>

const GradientText = ({ text, buttonHref, buttonText }: Props) => {
	const { isOpen: isMobileMenuOpen } = useMobileMenu()

	return (
		<section
			className={clsx("relative pt-16 pb-10 px-8", "md:py-20", "xl:py-32")}
		>
			<Gradient
				className="absolute inset-0 pointer-events-none"
				shouldPlay={!isMobileMenuOpen}
			/>

			<div
				className={clsx(
					"flex flex-col items-center isolate space-y-8",
					"md:space-y-12 lg:space-y-16"
				)}
			>
				<h2
					className={clsx(
						"font-serif leading-1_3",
						"text-24 md:text-32 lg:text-42",
						"relative text-beige-92 text-center",
						"max-w-2xl"
					)}
				>
					{text}
				</h2>

				{buttonHref && buttonText && (
					<ButtonLink href={buttonHref} color="beige">
						{buttonText}
					</ButtonLink>
				)}
			</div>
		</section>
	)
}

export function mapDataToProps({
	data,
}: MapDataToPropsCtx<GradientTextFragment>) {
	return {
		text: data.primary?.text?.text,
		buttonHref: data.primary?.button_link?.url,
		buttonText: data.primary?.button_link_text,
	}
}

export function mapDataToContext(
	_ctx: MapDataToContextCtx<GradientTextFragment>
) {
	return { backgroundColor: Symbol("gradient-text") }
}

export const gqlFragment = graphql`
	fragment GradientText on PrismicPageDataBodyGradientText {
		primary {
			text {
				text
			}
			button_link {
				url
			}
			button_link_text
		}
	}
`

export default GradientText
