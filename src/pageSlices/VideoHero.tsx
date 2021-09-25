import * as React from "react"
import mergeRefs from "react-merge-refs"
import { useReducedMotion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { graphql } from "gatsby"
import { m } from "framer-motion"
import clsx from "clsx"

import { Image } from "../components/Image"
import { useMobileMenu } from "../components/Header/MobileMenuProvider"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { VideoHeroFragment } from "../gqlTypes.gen"

export const sliceType = "PrismicPageDataBodyVideoHero"

// TODO: Use intersection observer to pause playback when not in view.
const VideoHero = ({
	text,
	videoThumbnailAlt,
	videoThumbnailUrl,
}: ReturnType<typeof mapDataToProps>) => {
	const { isOpen: isMobileMenuOpen } = useMobileMenu()
	const videoRef = React.useRef<HTMLVideoElement | null>(null)
	const { ref: observerRef, inView } = useInView({ threshold: 0 })
	const shouldReduceMotion = useReducedMotion()

	// Pause the video when the video is not in view.
	React.useEffect(() => {
		if (!videoRef.current) return

		if (inView) {
			videoRef.current?.play()
		} else {
			videoRef.current?.pause()
		}
	}, [inView])

	// Pause the video when the mobile menu is open.
	React.useEffect(() => {
		if (!videoRef.current) return

		if (isMobileMenuOpen) {
			videoRef.current.pause()
		} else {
			videoRef.current.play()
		}
	}, [isMobileMenuOpen])

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
							className="object-cover object-center w-full h-full brightness-[.65]"
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
					autoPlay={!shouldReduceMotion}
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
					<p className="font-sans text-beige-92 text-12 md:text-13 lg:text-14 leading-1_15">
						Explore
					</p>

					<m.div
						aria-hidden
						className="bg-beige-92 w-[1px] h-18 origin-top rounded"
						initial={{ scaleY: 0 }}
						animate={{ scaleY: 1 }}
						transition={{
							type: "spring",
							duration: 1.5,
						}}
					/>
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

export function mapDataToContext(_ctx: MapDataToContextCtx<VideoHeroFragment>) {
	return {}
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
