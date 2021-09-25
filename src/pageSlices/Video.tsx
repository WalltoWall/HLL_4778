import * as React from "react"
import { graphql } from "gatsby"
import clsx from "clsx"

import { Image } from "../components/Image"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { VideoFragment } from "../gqlTypes.gen"

import { PlayIcon } from "../components/PlayIcon"

export const sliceType = "PrismicPageDataBodyVideo"

const VideoHero = ({
	videoThumbnailAlt,
	videoThumbnailUrl,
}: ReturnType<typeof mapDataToProps>) => {
	return (
		<section className={clsx("aspect-w-16 aspect-h-9")}>
			<div className="absolute inset-0 bg-black pointer-events-none">
				{videoThumbnailUrl && (
					<Image
						src={videoThumbnailUrl}
						alt={videoThumbnailAlt ?? ""}
						className="object-cover object-center w-full h-full brightness-[.65]"
					/>
				)}
			</div>

			<button
				className={clsx(
					"absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]",
					"w-19 h-24",
					"text-beige-92 hover:text-purple-57 focus:text-purple-57 focus:outline-none",
					"transition duration-200"
				)}
			>
				<PlayIcon />
			</button>
		</section>
	)
}

export function mapDataToProps({ data }: MapDataToPropsCtx<VideoFragment>) {
	return {
		videoThumbnailUrl: data.primary?.thumbnail?.url,
		videoThumbnailAlt: data.primary?.thumbnail?.alt,
	}
}

export function mapDataToContext(_ctx: MapDataToContextCtx<VideoFragment>) {
	return {}
}

export const gqlFragment = graphql`
	fragment Video on PrismicPageDataBodyVideo {
		primary {
			thumbnail {
				alt
				url
			}
		}
	}
`

export default VideoHero
