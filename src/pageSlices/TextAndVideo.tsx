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

	return (
		<BoundedBox
			tag="section"
			className={variantStyles.bg}
			nextSharesBg={nextSharesBg}
			nextOverhangs={nextOverhangs}
			previousOverhangs={previousOverhangs}
		>
			<div className="-mx-5 md:-mx-8">
				<StartableVideo
					className="aspect-w-16 aspect-h-9"
					videoThumbnailURL={videoThumbnailURL}
					videoThumbnailAlt={videoThumbnailAlt}
					videoURL={videoURL}
					filledPlayIcon
				/>
			</div>
		</BoundedBox>
	)
}

export function mapDataToProps({
	data,
	nextContext,
	previousContext,
}: MapDataToPropsCtx<TextAndVideoFragment>) {
	return {
		color: getColorVariant(data.primary?.color),
		textHTML: undefIfEmpty(data.primary?.text?.html),
		videoThumbnailURL: data.primary?.video_thumbnail?.url,
		videoThumbnailAlt: data.primary?.video_thumbnail?.alt,
		thumbnailSide: data.primary?.thumbnail_side?.toLowerCase() as
			| "left"
			| "right",
		videoURL: data.primary?.video_url,

		nextSharesBg: nextContext?.backgroundColor === "blue",
		previousOverhangs: previousContext?.overhangsPrevious,
		nextOverhangs: nextContext?.overhangsNext,
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
