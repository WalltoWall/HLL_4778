import * as React from "react"
import { useReducedMotion, m } from "framer-motion"
import { graphql } from "gatsby"
import clsx from "clsx"
import { useLocation } from "@gatsbyjs/reach-router"

import { Image } from "../components/Image"
import { useMobileMenu } from "../components/Header/MobileMenuProvider"
import { useInView } from "../hooks/useInView"
import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { VideoHeroFragment } from "../gqlTypes.gen"

export const sliceType = "PrismicPageDataBodyVideoHero"

const VideoHero = ({
	text,
	videoThumbnailAlt,
	videoThumbnailURL,
	videoURL,
}: ReturnType<typeof mapDataToProps>) => {
	const { isOpen: isMobileMenuOpen } = useMobileMenu()
	const rVideo = React.useRef<HTMLVideoElement | null>(null)
	const inView = useInView({ threshold: 0, ref: rVideo })
	const shouldReduceMotion = useReducedMotion()
	const location = useLocation()

	const isHomePage = location.pathname === "/"

	// Pause the video when the video is not in view.
	React.useEffect(() => {
		if (!rVideo.current) return

		if (inView) {
			rVideo.current.play()
		} else {
			!rVideo.current.paused && rVideo.current.pause()
		}
	}, [inView])

	// Pause the video when the mobile menu is open.
	React.useEffect(() => {
		if (!rVideo.current) return

		if (isMobileMenuOpen && !rVideo.current.paused) {
			rVideo.current.pause()
		} else {
			rVideo.current.play()
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
				<div className="absolute inset-0 pointer-events-none bg-gray-13">
					{videoThumbnailURL && (
						<Image
							src={videoThumbnailURL}
							alt={videoThumbnailAlt ?? ""}
							className="object-cover object-center w-full h-full brightness-[.65]"
							loading="eager"
						/>
					)}
				</div>

				{videoURL && (
					<video
						ref={rVideo}
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
						poster={videoThumbnailURL}
						preload="none"
					>
						<source type="video/mp4" src={videoURL} />
					</video>
				)}

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

				{isHomePage && (
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
				)}
			</div>
		</section>
	)
}

export function mapDataToProps({ data }: MapDataToPropsCtx<VideoHeroFragment>) {
	return {
		text: data.primary?.text?.text,
		videoThumbnailURL: data.primary?.video_thumbnail?.url,
		videoThumbnailAlt: data.primary?.video_thumbnail?.alt,
		videoURL: data.primary?.video_url,
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
			video_url
		}
	}
`

export default VideoHero
