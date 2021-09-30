import * as React from "react"
import clsx from "clsx"
import { graphql } from "gatsby"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { ImageCallToActionFragment } from "../gqlTypes.gen"

import { BoundedBox } from "../components/BoundedBox"
import { ButtonLink } from "../components/Button"
import { ArchImage } from "../components/ArchImage"
import { HTMLContent } from "../components/HTMLContent"
import { getColorVariant, getColorVariantStyles } from "../lib/colorVariant"

export const sliceType = "PrismicPageDataBodyImageCallToAction"

const ImageCallToAction = ({
	imageUrl,
	imageAlt,
	heading,
	textHTML,
	buttonHref,
	buttonText,
	color,
}: ReturnType<typeof mapDataToProps>) => {
	const variantStyles = getColorVariantStyles(color)

	return (
		<BoundedBox
			tag="section"
			className={clsx(variantStyles.bg, variantStyles.textColor)}
			width="base"
		>
			<div
				className={clsx(
					"grid",
					"gap-y-7 md:gap-y-0",
					"md:grid-cols-2 md:items-center",
					"md:gap-x-12 lg:gap-x-25"
				)}
			>
				{imageUrl && (
					<div
						className={clsx(
							"w-full max-w-sm mx-auto",
							"mb-2 md:mb-0",
							"lg:max-w-none lg:mx-0"
						)}
					>
						<ArchImage src={imageUrl} alt={imageAlt ?? ""} variant="tall" />
					</div>
				)}

				<div className="flex flex-col space-y-8">
					<div className="text-center space-y-7 md:text-left lg:space-y-9">
						{heading && (
							<h2
								className={clsx(
									"font-serif leading-1_15",
									"text-32 md:text-42 lg:text-52"
								)}
							>
								{heading}
							</h2>
						)}

						{textHTML && <HTMLContent html={textHTML} />}
					</div>

					{buttonHref && buttonText && (
						<ButtonLink
							href={buttonHref}
							color={variantStyles.buttonColor}
							className="self-center md:self-start"
						>
							{buttonText}
						</ButtonLink>
					)}
				</div>
			</div>
		</BoundedBox>
	)
}

export function mapDataToProps({
	data,
}: MapDataToPropsCtx<ImageCallToActionFragment>) {
	return {
		imageUrl: data.primary?.image?.url,
		imageAlt: data.primary?.image?.alt,
		heading: data.primary?.heading?.text,
		textHTML: data.primary?.text?.html,
		buttonHref: data.primary?.button_link?.url,
		buttonText: data.primary?.button_text,
		color: getColorVariant(data.primary?.color),
	}
}

export function mapDataToContext({
	data,
}: MapDataToContextCtx<ImageCallToActionFragment>) {
	return {
		backgroundColor: getColorVariant(data.primary?.color),
	}
}

export const gqlFragment = graphql`
	fragment ImageCallToAction on PrismicPageDataBodyImageCallToAction {
		primary {
			image {
				url
				alt
			}
			heading {
				text
			}
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

export default ImageCallToAction
