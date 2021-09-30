import * as React from "react"
import { graphql } from "gatsby"
import { undefIfEmpty } from "@walltowall/helpers"
import clsx from "clsx"

import type {
	MapDataToContextCtx,
	MapDataToPropsCtx,
} from "../../templates/page"
import type { VideoGalleryFragment } from "../../gqlTypes.gen"

import { BoundedBox } from "../../components/BoundedBox"
import { getColorVariant, getColorVariantStyles } from "../../lib/colorVariant"
import { HTMLContent } from "../../components/HTMLContent"
import { Video } from "./Video"

export const sliceType = "PrismicPageDataBodyVideoGallery"

type VideoGalleryProps = ReturnType<typeof mapDataToProps>
export type TVideo = VideoGalleryProps["videos"][number]

const VideoGallery = ({
	subheading,
	heading,
	textHTML,
	color,
	videos,
	nextOverhangs,
	nextSharesBg,
	previousOverhangs,
}: VideoGalleryProps) => {
	const variantStyles = getColorVariantStyles(color)

	return (
		<BoundedBox
			tag="section"
			width="lg"
			className={variantStyles.bg}
			nextSharesBg={nextSharesBg}
			nextOverhangs={nextOverhangs}
			previousOverhangs={previousOverhangs}
		>
			<div
				className={clsx(
					"text-center grid gap-y-4 md:gap-y-5 lg:gap-y-6",
					variantStyles.textColor
				)}
			>
				{subheading && (
					<h4
						className={clsx(
							"font-bold uppercase font-sansExt",
							"text-12 md:text-16 lg:text-22",
							"tracking-caps"
						)}
					>
						{subheading}
					</h4>
				)}

				{heading && (
					<h4 className={clsx("font-serif text-42 md:text-52 lg:text-62")}>
						{heading}
					</h4>
				)}

				{textHTML && (
					<HTMLContent
						html={textHTML}
						className="max-w-xl mx-auto mt-4 md:mt-6 lg:mt-8"
					/>
				)}
			</div>

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

	return {
		heading: data.primary?.heading?.text,
		subheading: data.primary?.subheading1?.text,
		textHTML: undefIfEmpty(data.primary?.text?.html),
		color,

		videos:
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
			) ?? [],

		nextSharesBg: nextContext?.backgroundColor === color,
		previousOverhangs: previousContext?.overhangsPrevious,
		nextOverhangs: nextContext?.overhangsNext,
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
			subheading1 {
				text
			}
			heading {
				text
			}
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
