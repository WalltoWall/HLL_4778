/* eslint-disable react/no-unescaped-entities */
import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"

import { Image } from "../../components/Image"
import { VisuallyHidden } from "../../components/VisuallyHidden"
import { UnstyledButton } from "../../components/UnstyledButton"
import { VideoPopup } from "./VideoPopup"

import type { TVideo } from "./VideoGallery"
import type { ColorVariantStyles } from "../../lib/colorVariant"

export interface VideoProps {
	video: TVideo
	variantStyles: ColorVariantStyles
	isOpen: boolean
	onOpenChange: (open: boolean) => void
	nextVideo: () => void
	previousVideo: () => void
	votable: boolean
	endDate?: Date
	onFirstVideo: boolean
	onLastVideo: boolean
}

export const Video = ({
	video,
	variantStyles,
	isOpen,
	onOpenChange,
	nextVideo,
	previousVideo,
	votable,
	endDate,
	onFirstVideo,
	onLastVideo,
}: VideoProps) => {
	return (
		<Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
			<Dialog.Trigger asChild>
				<UnstyledButton className="block bg-beige-92 aspect-w-1 aspect-h-1">
					<VisuallyHidden>View {video.name}'s video.</VisuallyHidden>
					<Image
						src={video.videoThumbnailURL}
						alt={video.videoThumbnailAlt ?? ""}
						className="absolute object-cover w-full h-full"
					/>
				</UnstyledButton>
			</Dialog.Trigger>

			<VideoPopup
				video={video}
				variantStyles={variantStyles}
				nextVideo={nextVideo}
				previousVideo={previousVideo}
				votable={votable}
				endDate={endDate}
				onFirstVideo={onFirstVideo}
				onLastVideo={onLastVideo}
			/>
		</Dialog.Root>
	)
}
