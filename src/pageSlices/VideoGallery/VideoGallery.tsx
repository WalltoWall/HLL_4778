import * as React from "react"
import { graphql } from "gatsby"
import { undefIfEmpty } from "@walltowall/helpers"
import clsx from "clsx"
import shuffle from "just-shuffle"

import type {
	MapDataToContextCtx,
	MapDataToPropsCtx,
} from "../../templates/page"
import type { VideoGalleryFragment } from "../../gqlTypes.gen"

import { BoundedBox } from "../../components/BoundedBox"
import { getColorVariant, getColorVariantStyles } from "../../lib/colorVariant"
import { HTMLContent } from "../../components/HTMLContent"
import { Video } from "./Video"
import {
	resolvePrevContext,
	resolveNextContext,
} from "../../lib/mapToComponents"

export const sliceType = "PrismicPageDataBodyVideoGallery"

type VideoGalleryProps = ReturnType<typeof mapDataToProps>
export type TVideo = VideoGalleryProps["videos"][number]

const VideoGallery = ({
	textHTML,
	color,
	videos,
	nextOverhangs,
	nextSharesBg,
	previousOverhangs,
}: VideoGalleryProps) => {
	const [activeVideoIdx, setActiveVideoIdx] = React.useState<
		number | undefined
	>(undefined)
	const variantStyles = getColorVariantStyles(color)

	const onOpenChangeFactory = (idx: number) => (open: boolean) => {
		if (open) setActiveVideoIdx(idx)
		else setActiveVideoIdx(undefined)
	}

	function nextVideo() {
		if (activeVideoIdx === undefined || activeVideoIdx === videos.length - 1)
			return

		setActiveVideoIdx(activeVideoIdx + 1)
	}

	function previousVideo() {
		if (activeVideoIdx === undefined || activeVideoIdx <= 0) return

		setActiveVideoIdx(activeVideoIdx - 1)
	}

	console.log(activeVideoIdx)

	return (
		<BoundedBox
			tag="section"
			width="lg"
			className={variantStyles.bg}
			nextSharesBg={nextSharesBg}
			nextOverhangs={nextOverhangs}
			previousOverhangs={previousOverhangs}
		>
			{textHTML && (
				<HTMLContent
					html={textHTML}
					className={clsx(
						variantStyles.textColor,
						"text-center max-w-xl mx-auto mt-4 md:mt-6 lg:mt-8"
					)}
					variant="lg"
				/>
			)}

			<div
				className={clsx(
					"grid grid-cols-3",
					"gap-[1px] md:gap-3 lg:gap-5",
					"mt-12 md:mt-15 lg:mt-18",
					"-mx-5 md:-mx-8 lg:mx-0"
				)}
			>
				{videos.map((video, idx) => (
					<Video
						key={`videoGallery-${idx}`}
						video={video}
						variantStyles={variantStyles}
						isOpen={activeVideoIdx === idx}
						onOpenChange={onOpenChangeFactory(idx)}
						nextVideo={nextVideo}
						previousVideo={previousVideo}
					/>
				))}
			</div>
		</BoundedBox>
	)
}

export function mapDataToProps({
	data,
	nextContext,
	previousContext,
}: MapDataToPropsCtx<VideoGalleryFragment>) {
	const submissionType = data.primary?.video_submission_type?.uid

	const color = getColorVariant(data.primary?.color)
	const prevCtx = resolvePrevContext(previousContext)
	const nextCtx = resolveNextContext(nextContext)

	const videos =
		data.primary?.video_submission_type?.document?.submissions?.map(
			(submission) => ({
				name: submission?.data?.name?.text,
				descriptionHTML: undefIfEmpty(submission?.data?.description?.html),
				subtitle: submission?.data?.subtitle?.text,
				videoThumbnailURL: submission?.data?.video_thumbnail?.url,
				videoThumbnailAlt: submission?.data?.video_thumbnail?.alt,
				videoURL: submission?.data?.video_url,
				votable: submission?.data?.votable ?? false,
				uid: submission?.uid,
				href: submission?.url,
				submissionType,
			})
		) ?? []

	return {
		textHTML: undefIfEmpty(data.primary?.text?.html),
		color,

		videos: shuffle(videos),

		nextSharesBg: nextContext?.backgroundColor === color,
		previousOverhangs: prevCtx?.overhangsNext,
		nextOverhangs: nextCtx?.overhangsPrevious,
	}
}

export function mapDataToContext({
	data,
}: MapDataToContextCtx<VideoGalleryFragment>) {
	return {
		backgroundColor: getColorVariant(data.primary?.color),
	}
}

export const gqlFragment = graphql`
	fragment VideoGallery on PrismicPageDataBodyVideoGallery {
		primary {
			text {
				html
			}
			color
			video_submission_type {
				uid
				document {
					... on PrismicSubmissionType {
						_previewable
						submissions {
							_previewable
							url
							uid
							data {
								name {
									text
								}
								description {
									html
								}
								subtitle {
									text
								}
								video_thumbnail {
									url
									alt
								}
								video_url
								votable
							}
						}
					}
				}
			}
		}
	}
`

export default VideoGallery
