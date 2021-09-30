import clsx from "clsx"
import * as React from "react"

import { useStartableVideo } from "../hooks/useStartableVideo"
import { Image } from "./Image"
import { UnstyledButton } from "./UnstyledButton"
import { PlayIcon } from "./PlayIcon"

interface Props extends React.ComponentPropsWithoutRef<"div"> {
	videoURL: string | undefined
	videoThumbnailURL: string | undefined
	videoThumbnailAlt?: string
	filledPlayIcon?: boolean
}

export const StartableVideo = ({
	className,
	videoURL,
	videoThumbnailURL,
	videoThumbnailAlt,
	filledPlayIcon = false,
	...props
}: Props) => {
	const { hasVideoStarted, startVideo, videoRef } = useStartableVideo()

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
					controls
					controlsList="nodownload noremoteplayback"
					disablePictureInPicture
				>
					<source type="video/mp4" src={videoURL} />
				</video>
			)}

			{!hasVideoStarted && videoThumbnailURL && (
				<Image
					src={videoThumbnailURL}
					alt={videoThumbnailAlt ?? ""}
					className="absolute inset-0 object-cover object-center pointer-events-none brightness-75"
				/>
			)}

			{!hasVideoStarted && (
				<UnstyledButton
					className={clsx(
						"absolute inset-0",
						"flex justify-center items-center",
						"text-beige-92 hover:text-purple-57 focus:text-purple-57 focus:outline-none",
						"transition duration-200"
					)}
					onClick={startVideo}
				>
					<PlayIcon filled={filledPlayIcon} className="w-8 md:w-10 lg:w-12" />
				</UnstyledButton>
			)}
		</div>
	)
}
