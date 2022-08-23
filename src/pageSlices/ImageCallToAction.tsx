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
import { resolvePrevContext, resolveNextContext } from "../lib/mapToComponents"

type ImageSide = "left" | "right"
type Props = ReturnType<typeof mapDataToProps>

export const sliceType = "PrismicPageDataBodyImageCallToAction"

const ImageCallToAction = ({
	imageUrl,
	imageAlt,
	textHTML,
	buttonHref,
	buttonText,
	color,
	imageSide = "left",
	nextOverhangs,
	nextSharesBg,
	previousOverhangs,
}: Props) => {
	const variantStyles = getColorVariantStyles(color)
	const isImageOnLeft = imageSide === "left"

	return (
		<BoundedBox
			tag="section"
			className={clsx(variantStyles.bg, variantStyles.textColor)}
			width="base"
			nextSharesBg={nextSharesBg}
			nextOverhangs={nextOverhangs}
			previousOverhangs={previousOverhangs}
		>
			<div
				className={clsx(
					"grid",
					"gap-y-7 md:gap-y-0",
					"grid-flow-dense",
					"md:grid-cols-2 md:items-center",
					"md:gap-x-12 lg:gap-x-25"
				)}
			>
				{imageUrl && (
					<div
						className={clsx(
							"w-full max-w-sm mx-auto",
							"mb-2 md:mb-0",
							"lg:max-w-none lg:mx-0",
							isImageOnLeft ? "md:col-start-1" : "md:col-start-2"
						)}
					>
						<ArchImage src={imageUrl} alt={imageAlt ?? ""} variant="tall" />
					</div>
				)}

				<div className="flex flex-col space-y-8">
					{textHTML && (
						<HTMLContent
							html={textHTML}
							className="text-center md:text-left"
							variant="md"
						/>
					)}

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
	nextContext,
	previousContext,
}: MapDataToPropsCtx<ImageCallToActionFragment>) {
	const color = getColorVariant(data.primary?.color)
	const prevCtx = resolvePrevContext(previousContext)
	const nextCtx = resolveNextContext(nextContext)

	return {
		imageUrl: data.primary?.image?.url,
		imageAlt: data.primary?.image?.alt,
		textHTML: data.primary?.text?.html,
		buttonHref: data.primary?.button_link?.url,
		buttonText: data.primary?.button_text,
		color,
		imageSide: data.primary?.image_side?.toLowerCase() as ImageSide,

		nextSharesBg: nextContext?.backgroundColor === color,
		previousOverhangs: prevCtx?.overhangsNext,
		nextOverhangs: nextCtx?.overhangsPrevious,
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
			text {
				html
			}
			button_link {
				url
			}
			button_text
			color
			image_side
		}
	}
`

export default ImageCallToAction
