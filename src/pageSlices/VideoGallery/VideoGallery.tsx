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

export const sliceType = "PrismicPageDataBodyVideoGallery"

const VideoGallery = ({
	subheading,
	heading,
	color,
	videos,
	nextOverhangs,
	nextSharesBg,
	previousOverhangs,
}: ReturnType<typeof mapDataToProps>) => {
	const variantStyles = getColorVariantStyles(color)

	console.log(videos)

	return (
		<BoundedBox
			tag="section"
			className={variantStyles.bg}
			nextSharesBg={nextSharesBg}
			nextOverhangs={nextOverhangs}
			previousOverhangs={previousOverhangs}
		>
			<div
				className={clsx(
					"text-center space-y-4 md:space-y-5 lg:space-y-6",
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
			</div>
		</BoundedBox>
	)
}

export function mapDataToProps({
	data,
	nextContext,
	previousContext,
}: MapDataToPropsCtx<VideoGalleryFragment>) {
	return {
		heading: data.primary?.heading?.text,
		subheading: data.primary?.subheading1?.text,
		textHTML: undefIfEmpty(data.primary?.text?.html),
		color: getColorVariant(data.primary?.color),

		videos:
			data.primary?.video_submission_type?.document?.submissions?.map(
				(submission) => ({
					name: submission?.data?.name?.text,
					descriptionHTML: undefIfEmpty(submission?.data?.description?.html),
					subtitle: submission?.data?.subtitle?.text,
					videoThumbnailURL: submission?.data?.video_thumbnail?.url,
					videoThumbnailAlt: submission?.data?.video_thumbnail?.alt,
					votable: submission?.data?.votable ?? false,
				})
			) ?? [],

		nextSharesBg: nextContext?.backgroundColor === "blue",
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
				document {
					... on PrismicSubmissionType {
						id
						submissions {
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
