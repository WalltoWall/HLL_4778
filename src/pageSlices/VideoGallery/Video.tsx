/* eslint-disable react/no-unescaped-entities */
import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import clsx from "clsx"

import { Image } from "../../components/Image"
import { VisuallyHidden } from "../../components/VisuallyHidden"

import { UnstyledButton } from "../../components/UnstyledButton"
import { HTMLContent } from "../../components/HTMLContent"

import type { TVideo } from "./VideoGallery"
import type { ColorVariantStyles } from "../../lib/colorVariant"
import { MenuButton } from "../../components/MenuButton"
import { ThumbIcon } from "../../components/ThumbIcon"
import { PlayIcon } from "../../components/PlayIcon"

interface VideoProps {
	video: TVideo
	variantStyles: ColorVariantStyles
}

export const Video = ({ video, variantStyles }: VideoProps) => {
	return (
		<Dialog.Root>
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

			<Dialog.Overlay className="fixed inset-0 bg-gray-13/70">
				<Dialog.Close asChild>
					<MenuButton
						isOpen
						withAnimation={false}
						className="fixed top-0 right-0 p-5 cursor-pointer text-beige-92"
					/>
				</Dialog.Close>
			</Dialog.Overlay>

			<Dialog.Content
				className={clsx(
					"fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
					"max-w-3xl w-[90vw]",
					"max-h-[90vh]",
					"shadow-xl",
					"px-5 md:px-7 lg:px-10",
					"py-6 md:py-10 lg:py-13",
					variantStyles.bg,
					variantStyles.textColor
				)}
			>
				{video.videoThumbnailURL && (
					<div
						className={clsx(
							"relative",
							"-mx-5 md:-mx-7 lg:-mx-10",
							"-mt-6 md:-mt-10 lg:-mt-13"
						)}
					>
						<div className="aspect-w-16 aspect-h-9">
							<Image
								src={video.videoThumbnailURL}
								alt={video.videoThumbnailAlt ?? ""}
								className="absolute object-cover w-full h-full"
							/>
						</div>

						<UnstyledButton
							className={clsx(
								"absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
							)}
						>
							<PlayIcon className="w-9 h-9 md:w-14 md:h-14 lg:w-19 lg:h-19" />
						</UnstyledButton>
					</div>
				)}

				<div className="mt-6 md:mt-10 lg:mt-13">
					<div
						className={clsx(
							"grid grid-cols-2 gap-x-2",
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

						<UnstyledButton
							className={clsx(
								"flex flex-col items-center",
								"space-y-2 md:space-y-5 lg:space-y-5",
								"text-center justify-self-end"
							)}
						>
							<ThumbIcon className="w-7 h-7 md:w-9 md:h-9 lg:w-12 lg:h-12" />

							<p
								className={clsx(
									"font-bold uppercase tracking-caps font-sansExt",
									"text-10 md:text-12 lg:text-14",
									"leading-1_2"
								)}
							>
								Cast your vote
							</p>
						</UnstyledButton>
					</div>

					{video.descriptionHTML && (
						<HTMLContent html={video.descriptionHTML} />
					)}
				</div>
			</Dialog.Content>
		</Dialog.Root>
	)
}
