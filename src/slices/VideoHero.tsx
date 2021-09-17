import * as React from "react"
import mergeRefs from "react-merge-refs"
import { useInView } from "react-intersection-observer"
import { graphql } from "gatsby"
import clsx from "clsx"

import type { MapDataToPropsCtx } from "../templates/page"
import type { VideoHeroFragment } from "../gqlTypes.gen"
import { Image } from "../components/Image"

export const sliceType = "PrismicPageDataBodyVideoHero"

// TODO: Use intersection observer to pause playback when not in view.
const VideoHero = ({
	text,
	videoThumbnailAlt,
	videoThumbnailUrl,
}: ReturnType<typeof mapDataToProps>) => {
	const videoRef = React.useRef<HTMLVideoElement | null>(null)
	const { ref: observerRef, inView } = useInView({ threshold: 0 })

	React.useEffect(() => {
		if (!videoRef.current) return

		if (inView) {
			videoRef.current?.play()
		} else {
			videoRef.current?.pause()
		}
	}, [inView])

	return (
		<section
			className={clsx(
				"z-10 text-center",
				"aspect-w-10 aspect-h-16",
				"md:aspect-w-16 md:aspect-h-9",
				"2xl:aspect-none 2xl:h-[900px]",
				"2xl:relative"
			)}
		>
			<div className="flex flex-col justify-center h-full px-8 2xl:h-[800px]">
				<div className="absolute inset-0 bg-black pointer-events-none">
					{videoThumbnailUrl && (
						<Image
							src={videoThumbnailUrl}
							alt={videoThumbnailAlt ?? ""}
							className="object-cover object-center w-full h-full"
						/>
					)}
				</div>

				<video
					ref={mergeRefs([videoRef, observerRef])}
					className={clsx(
						"absolute inset-0",
						"object-cover object-center",
						"w-full h-full",
						"pointer-events-none",
						"brightness-[.65]"
					)}
					autoPlay
					loop
					muted
					playsInline
				>
					<source type="video/mp4" src="/fpo-hero.mp4" />
				</video>

				{text && (
					<h1
						className={clsx(
							"font-serif leading-1",
							"text-42 md:text-52 lg:text-62",
							"relative text-beige-92 mx-auto",
							"max-w-[10ch] lg:max-w-none"
						)}
					>
						{text}
					</h1>
				)}

				<div className="absolute inset-x-0 flex flex-col items-center space-y-3 -bottom-9">
					<p className="font-sans font-light text-beige-92 text-12 leading-1_15">
						Explore
					</p>

					<div aria-hidden className="bg-beige-92 w-[1px] h-18" />
				</div>
			</div>
		</section>
	)
}

export function mapDataToProps({ data }: MapDataToPropsCtx<VideoHeroFragment>) {
	return {
		text: data.primary?.text?.text,
		videoThumbnailUrl: data.primary?.video_thumbnail?.url,
		videoThumbnailAlt: data.primary?.video_thumbnail?.alt,
	}
}

export const gqlFragment = graphql`
	fragment VideoHero on PrismicPageDataBodyVideoHero {
		primary {
			text {
				text
			}
			video_thumbnail {
				alt
				url
			}
		}
	}
`

export default VideoHero
