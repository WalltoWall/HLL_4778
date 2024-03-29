import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import clsx from "clsx"

import { HTMLContent } from "../../components/HTMLContent"
import { MenuButton } from "../../components/MenuButton"
import { VoteButton } from "./VoteButton"
import { StartableVideo } from "../../components/StartableVideo"

import type { TVideo } from "./VideoGallery"
import { ArrowButton } from "../../components/ArrowButton"
import type { ColorVariantStyles } from "../../lib/colorVariant"

interface VideoPopupProps {
	video: TVideo
	variantStyles: ColorVariantStyles
	nextVideo: () => void
	previousVideo: () => void
	votable: boolean
	endDate?: Date
	onFirstVideo: boolean
	onLastVideo: boolean
	mute: boolean
}

export const VideoPopup = ({
	variantStyles,
	video,
	nextVideo,
	previousVideo,
	votable,
	endDate,
	onLastVideo,
	onFirstVideo,
	mute,
}: VideoPopupProps) => {
	return (
		<>
			<Dialog.Overlay className="fixed inset-0 bg-gray-13/70 z-10">
				<Dialog.Close asChild>
					<MenuButton
						isOpen
						className="fixed top-0 right-0 p-5 cursor-pointer text-beige-92"
					/>
				</Dialog.Close>
			</Dialog.Overlay>

			<Dialog.Content
				className={clsx(
					"fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20"
				)}
			>
				<div
					className={clsx(
						"max-w-3xl w-[90vw]",
						"max-h-[90vh]",
						"shadow-xl",
						"overflow-y-auto",
						"px-5 md:px-7 lg:px-10",
						"py-6 md:py-10 lg:py-13",
						variantStyles.bg,
						variantStyles.textColor
					)}
				>
					<div
						className={clsx(
							"relative",
							"-mx-5 md:-mx-7 lg:-mx-10",
							"-mt-6 md:-mt-10 lg:-mt-13",
							"group"
						)}
					>
						<StartableVideo
							className="aspect-w-16 aspect-h-9"
							videoThumbnailURL={video.videoThumbnailURL}
							videoThumbnailAlt={video.videoThumbnailAlt}
							videoURL={video.videoURL}
							filledPlayIcon
							muted={mute}
						/>
					</div>

					<div className="mt-6 md:mt-10 lg:mt-13">
						<div
							className={clsx(
								"grid grid-cols-[1fr,auto] gap-x-8",
								"items-start",
								"mb-6 md:mb-8 lg:mb-10"
							)}
						>
							<div className="space-y-3 md:space-y-5 lg:space-y-6">
								<Dialog.Title
									className={clsx(
										"font-serif",
										"text-22 md:text-32 lg:text-42",
										"leading-1_15"
									)}
								>
									{video.name}
								</Dialog.Title>

								<Dialog.Description
									className={clsx(
										"font-sans",
										"text-14 md:text-18 lg:text-24",
										"leading-1_5 font-semibold"
									)}
								>
									{video.subtitle}
								</Dialog.Description>
							</div>

							{votable && <VoteButton video={video} endDate={endDate} />}
						</div>

						{video.descriptionHTML && (
							<HTMLContent html={video.descriptionHTML} className="max-w-lg" />
						)}
					</div>
				</div>

				{!onFirstVideo && (
					<ArrowButton
						className={clsx(
							"absolute",
							"-bottom-6 translate-y-[100%]",
							"left-[50%] translate-x-[-125%]",
							"lg:-left-8 lg:translate-x-[-100%]",
							"lg:top-[50%] lg:translate-y-[-50%]",
							"lg:bottom-[unset]",
							"text-beige-92",
							"rotate-180"
						)}
						label="Previous video"
						onClick={previousVideo}
					/>
				)}
				{!onLastVideo && (
					<ArrowButton
						className={clsx(
							"absolute",
							"-bottom-6 translate-y-[100%]",
							"right-[50%] translate-x-[125%]",
							"lg:-right-8 lg:translate-x-[100%]",
							"lg:top-[50%] lg:translate-y-[-50%]",
							"lg:bottom-[unset]",
							"text-beige-92"
						)}
						label="Next video"
						onClick={nextVideo}
					/>
				)}
			</Dialog.Content>
		</>
	)
}
