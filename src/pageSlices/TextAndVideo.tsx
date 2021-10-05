import * as React from "react"
import clsx from "clsx"
import { graphql } from "gatsby"
import { undefIfEmpty } from "@walltowall/helpers"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { TextAndVideoFragment } from "../gqlTypes.gen"
import { getColorVariant, getColorVariantStyles } from "../lib/colorVariant"

import { HTMLContent } from "../components/HTMLContent"
import { BoundedBox } from "../components/BoundedBox"
import { StartableVideo } from "../components/StartableVideo"
import { resolvePrevContext, resolveNextContext } from "../lib/mapToComponents"

export const sliceType = "PrismicPageDataBodyTextAndVideo"

const TextAndVideo = ({
	textHTML,
	color,
	thumbnailSide = "left",
	videoThumbnailAlt,
	videoThumbnailURL,
	videoURL,
	nextSharesBg,
	nextOverhangs,
	previousOverhangs,
}: ReturnType<typeof mapDataToProps>) => {
	const variantStyles = getColorVariantStyles(color)
	const isImageOnRight = thumbnailSide === "right"

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
					"grid",
					"gap-y-10 md:gap-y-0",
					"md:grid-cols-2 md:items-center md:grid-flow-col-dense",
					"md:gap-x-10 lg:gap-x-18 xl:gap-x-25"
				)}
			>
				<div
					className={clsx(
						"-mx-5",
						"md:mx-0",
						isImageOnRight && "md:col-start-2"
					)}
				>
					<StartableVideo
						className="aspect-w-16 aspect-h-9"
						videoThumbnailURL={videoThumbnailURL}
						videoThumbnailAlt={videoThumbnailAlt}
						videoURL={videoURL}
						filledPlayIcon
						withControls
					/>
				</div>

				{textHTML && (
					<HTMLContent
						html={textHTML}
						className={clsx(
							variantStyles.textColor,
							"max-w-xl",
							isImageOnRight
								? "md:col-start-1 md:text-right md:ml-auto"
								: "md:text-left md:mr-auto"
						)}
					/>
				)}
			</div>
		</BoundedBox>
	)
}

export function mapDataToProps({
	data,
	nextContext,
	previousContext,
}: MapDataToPropsCtx<TextAndVideoFragment>) {
	const color = getColorVariant(data.primary?.color)
	const prevCtx = resolvePrevContext(previousContext)
	const nextCtx = resolveNextContext(nextContext)

	return {
		color,
		textHTML: undefIfEmpty(data.primary?.text?.html),
		videoThumbnailURL: data.primary?.video_thumbnail?.url,
		videoThumbnailAlt: data.primary?.video_thumbnail?.alt,
		thumbnailSide: data.primary?.thumbnail_side?.toLowerCase() as
			| "left"
			| "right",
		videoURL: data.primary?.video_url,

		nextSharesBg: nextContext?.backgroundColor === color,
		previousOverhangs: prevCtx?.overhangsNext,
		nextOverhangs: nextCtx?.overhangsPrevious,
	}
}

export function mapDataToContext({
	data,
}: MapDataToContextCtx<TextAndVideoFragment>) {
	return {
		backgroundColor: getColorVariant(data.primary?.color),
	}
}

export const gqlFragment = graphql`
	fragment TextAndVideo on PrismicPageDataBodyTextAndVideo {
		primary {
			video_thumbnail {
				url
				alt
			}
			thumbnail_side
			video_url
			text {
				html
			}
			color
		}
	}
`

export default TextAndVideo
