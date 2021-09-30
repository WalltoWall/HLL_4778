import * as React from "react"
import { graphql } from "gatsby"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { VideoFragment } from "../gqlTypes.gen"
import { StartableVideo } from "../components/StartableVideo"

export const sliceType = "PrismicPageDataBodyVideo"

const VideoHero = ({
	videoThumbnailAlt,
	videoThumbnailUrl,
	videoUrl,
}: ReturnType<typeof mapDataToProps>) => {
	return (
		<section>
			<StartableVideo
				className="aspect-w-16 aspect-h-9"
				videoThumbnailURL={videoThumbnailUrl}
				videoThumbnailAlt={videoThumbnailAlt}
				videoURL={videoUrl}
				filledPlayIcon
			/>
		</section>
	)
}

export function mapDataToProps({ data }: MapDataToPropsCtx<VideoFragment>) {
	return {
		videoThumbnailUrl: data.primary?.thumbnail?.url,
		videoThumbnailAlt: data.primary?.thumbnail?.alt,
		videoUrl: data.primary?.video_url,
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
			video_url
		}
	}
`

export default VideoHero
