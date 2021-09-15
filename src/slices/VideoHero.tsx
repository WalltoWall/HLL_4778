import * as React from "react"
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import clsx from "clsx"

import { serifLarge } from "../typography"

import type { MapDataToPropsCtx } from "../templates/page"
import type { VideoHeroFragment } from "../gqlTypes.gen"

export const sliceType = "PrismicPageDataBodyVideoHero"

// TODO: Use intersection observer to pause playback when not in view.
const VideoHero = ({
	text,
	videoThumbnailAlt,
	videoThumbnailImageData,
}: ReturnType<typeof mapDataToProps>) => {
	return (
		<section
			className={clsx(
				"relative z-10 text-center",
				"aspect-w-11 aspect-h-16",
				"md:aspect-w-16 md:aspect-h-9",
				"2xl:aspect-none 2xl:h-[800px]"
			)}
		>
			<div className="flex flex-col justify-center h-full px-8 2xl:h-[800px]">
				<div className="absolute inset-0 bg-black pointer-events-none">
					{videoThumbnailImageData && (
						<GatsbyImage
							objectFit="cover"
							objectPosition="center"
							image={videoThumbnailImageData}
							alt={videoThumbnailAlt ?? ""}
							className="w-full h-full"
						/>
					)}
				</div>

				<video
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
							serifLarge,
							"relative text-beige-92 max-w-[10ch] mx-auto"
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
		videoThumbnailImageData: data.primary?.video_thumbnail
			?.gatsbyImageData as IGatsbyImageData,
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
				gatsbyImageData(
					layout: FULL_WIDTH
					placeholder: BLURRED
					breakpoints: [360, 768, 1024, 1440]
				)
			}
		}
	}
`

export default VideoHero
