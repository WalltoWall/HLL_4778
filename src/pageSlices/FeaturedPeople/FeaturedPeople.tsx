import * as React from "react"
import { graphql } from "gatsby"
import { undefIfEmpty } from "@walltowall/helpers"
import clsx from "clsx"

import type {
	MapDataToContextCtx,
	MapDataToPropsCtx,
} from "../../templates/page"
import type { FeaturedPeopleFragment } from "../../gqlTypes.gen"

import { BoundedBox } from "../../components/BoundedBox"
import { getColorVariant, getColorVariantStyles } from "../../lib/colorVariant"

import { MobilePeople } from "./MobilePeople"
import { DesktopPeople } from "./DesktopPeople"

export const sliceType = "PrismicPageDataBodyFeaturedPeople"

export type FeaturedPeopleProps = ReturnType<typeof mapDataToProps>
export type Person = FeaturedPeopleProps["people"][number]

const FeaturedPeople = ({
	subheading,
	heading,
	color,
	nextOverhangs,
	nextSharesBg,
	previousOverhangs,
	people,
}: FeaturedPeopleProps) => {
	const variantStyles = getColorVariantStyles(color)

	return (
		<section>
			<BoundedBox className={variantStyles.bg} nextSharesBg>
				<div className="space-y-12">
					<div
						className={clsx("text-center space-y-4", variantStyles.textColor)}
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
							<h4 className={clsx("font-serif text-42 lg:text-62")}>
								{heading}
							</h4>
						)}
					</div>

					<MobilePeople people={people} />
				</div>
			</BoundedBox>

			<DesktopPeople
				people={[...people, ...people]}
				variantStyles={variantStyles}
				nextSharesBg={nextSharesBg}
				nextOverhangs={nextOverhangs}
				previousOverhangs={previousOverhangs}
			/>
		</section>
	)
}

export function mapDataToProps({
	data,
	nextContext,
	previousContext,
}: MapDataToPropsCtx<FeaturedPeopleFragment>) {
	return {
		subheading: data.primary?.subheading?.text,
		heading: data.primary?.heading?.text,
		color: getColorVariant(data.primary?.color),
		nextSharesBg: nextContext?.backgroundColor === "blue",
		previousOverhangs: previousContext?.overhangsPrevious,
		nextOverhangs: nextContext?.overhangsNext,
		people:
			data.items?.map((item) => ({
				name: item?.name?.text,
				title: item?.title1?.text,
				bioHTML: undefIfEmpty(item?.bio?.html),
				instagramHandle: item?.instagram_handle,
				instagramHref: item?.instagram_profile_url?.url,
				websiteLabel: item?.website_label,
				websiteHref: item?.website_url?.url,
				pronouns: item?.pronouns?.text,
				imageURL: item?.headshot?.url,
				imageAlt: item?.headshot?.alt,
			})) ?? [],
	}
}

export function mapDataToContext({
	data,
}: MapDataToContextCtx<FeaturedPeopleFragment>) {
	return {
		backgroundColor: getColorVariant(data.primary?.color),
	}
}

export const gqlFragment = graphql`
	fragment FeaturedPeople on PrismicPageDataBodyFeaturedPeople {
		primary {
			subheading {
				text
			}
			heading {
				text
			}
			color
		}
		items {
			name {
				text
			}
			title1 {
				text
			}
			pronouns {
				text
			}
			bio {
				html
			}
			headshot {
				url
				alt
			}
			instagram_handle
			instagram_profile_url {
				url
			}
			website_label
			website_url {
				url
			}
		}
	}
`

export default FeaturedPeople