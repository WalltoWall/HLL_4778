import * as React from "react"
import { graphql } from "gatsby"
import clsx from "clsx"

import { Image } from "../components/Image"
import { PlayIcon } from "../components/PlayIcon"
import { UnstyledButton } from "../components/UnstyledButton"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { VideoFragment } from "../gqlTypes.gen"

export const sliceType = "PrismicPageDataBodyVideo"

const VideoHero = ({
	videoThumbnailAlt,
	videoThumbnailUrl,
	videoUrl,
}: ReturnType<typeof mapDataToProps>) => {
	const [hasVideoStarted, setHasVideoStarted] = React.useState(false)
	const videoRef = React.useRef<HTMLVideoElement>(null)

	async function toggleVideo() {
		if (!videoRef.current) return
		if (!hasVideoStarted) {
			setHasVideoStarted(true)
			await videoRef.current.play()
		} else {
			videoRef.current.pause()
		}
	}

	return (
		<section className={clsx("aspect-w-16 aspect-h-9")}>
			{videoUrl && (
				<video
					ref={videoRef}
					className={clsx(
						"absolute inset-0 bg-black",
						"object-cover object-center w-full h-full",
						!hasVideoStarted && "hidden"
					)}
					controls
					controlsList="nodownload noremoteplayback"
					disablePictureInPicture
				>
					<source type="video/mp4" src={videoUrl} />
				</video>
			)}

			{!hasVideoStarted && videoThumbnailUrl && (
				<Image
					src={videoThumbnailUrl}
					alt={videoThumbnailAlt ?? ""}
					className={clsx(
						"absolute inset-0 bg-black",
						"object-cover object-center w-full h-full brightness-[.65]"
					)}
				/>
			)}

			{!hasVideoStarted && (
				<UnstyledButton
					className={clsx(
						"absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]",
						"w-19 h-24",
						"text-beige-92 hover:text-purple-57 focus:text-purple-57 focus:outline-none",
						"transition duration-200"
					)}
					onClick={toggleVideo}
				>
					<PlayIcon />
				</UnstyledButton>
			)}
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
