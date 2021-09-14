import * as React from "react"
import clsx from "clsx"
import type { MapDataToPropsCtx } from "../templates/page"
import { serifLarge } from "../typography"

export const sliceType = "video_hero"

// TODO: Use intersection observer to pause playback when not in view.
const VideoHero = ({
	text,
	videoThumbnailAlt,
	videoThumbnailUrl,
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
				{false && (
					<img
						layout="fill"
						objectFit="cover"
						objectPosition="center"
						src={videoThumbnailUrl}
						alt={videoThumbnailAlt ?? ""}
						className="absolute inset-0 bg-black pointer-events-none"
					/>
				)}

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

export function mapDataToProps({ data }: MapDataToPropsCtx<unknown>) {
	return {
		text: asText(data.primary.text),
		videoThumbnailUrl: data.primary.video_thumbnail.url,
		videoThumbnailAlt: data.primary.video_thumbnail.alt,
	}
}

export default VideoHero
