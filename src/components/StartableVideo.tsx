import clsx from "clsx"
import * as React from "react"

import { useStartableVideo } from "../hooks/useStartableVideo"
import { Image } from "./Image"
import { UnstyledButton } from "./UnstyledButton"
import { PlayIcon } from "./PlayIcon"
import { PauseIcon } from "./PauseIcon"
import { VisuallyHidden } from "./VisuallyHidden"

interface Props extends React.ComponentPropsWithoutRef<"div"> {
	videoURL: string | undefined
	videoThumbnailURL: string | undefined
	videoThumbnailAlt?: string
	filledPlayIcon?: boolean
	muted?: boolean
}

export const StartableVideo = ({
	className,
	videoURL,
	videoThumbnailURL,
	videoThumbnailAlt,
	filledPlayIcon = false,
	muted = false,
	...props
}: Props) => {
	const { hasVideoStarted, isPlaying, startVideo, stopVideo, videoRef } =
		useStartableVideo()

	return (
		<div className={clsx("bg-gray-13", className)} {...props}>
			{videoURL && (
				<video
					ref={videoRef}
					className={clsx(
						"absolute inset-0",
						"object-cover object-center w-full h-full",
						!hasVideoStarted && "hidden"
					)}
					loop
					controlsList="nodownload noremoteplayback"
					disablePictureInPicture
					muted={muted}
				>
					<source type="video/mp4" src={videoURL} />
				</video>
			)}

			{!hasVideoStarted && videoThumbnailURL && (
				<Image
					src={videoThumbnailURL}
					alt={videoThumbnailAlt ?? ""}
					className="absolute inset-0 object-cover object-center pointer-events-none"
				/>
			)}

			{videoURL && (
				<UnstyledButton
					className={clsx(
						"absolute inset-0",
						"flex justify-center items-center",
						"text-beige-92",
						"transition duration-250",
						"group",
						!isPlaying && "bg-gray-13/40 hover:bg-gray-13/20",
						isPlaying && "bg-gray-13/0 hover:bg-gray-13/40"
					)}
					withRing={false}
					onClick={() => (isPlaying ? stopVideo() : startVideo())}
				>
					<VisuallyHidden>
						{isPlaying ? "Pause video" : "Play video"}
					</VisuallyHidden>

					{isPlaying ? (
						<PauseIcon
							className={clsx(
								"w-11 md:w-13 lg:w-15",
								"transition duration-250",
								"opacity-0",
								"group-hover:opacity-100"
							)}
						/>
					) : (
						<PlayIcon filled={filledPlayIcon} className="w-8 md:w-10 lg:w-12" />
					)}
				</UnstyledButton>
			)}
		</div>
	)
}
