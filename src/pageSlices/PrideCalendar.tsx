import * as React from "react"
import { graphql } from "gatsby"
import clsx from "clsx"
import { GatsbyImage, type IGatsbyImageData } from "gatsby-plugin-image"
import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import { getColorVariant, getColorVariantStyles } from "../lib/colorVariant"
import { resolvePrevContext, resolveNextContext } from "../lib/mapToComponents"
import { HTMLContent } from "../components/HTMLContent"
import { Link } from "../components/Link"
import { BoundedBox } from "../components/BoundedBox"
import type { PrideCalendarFragment } from "../gqlTypes.gen"
import { ArrowIcon } from "../components/ArrowIcon"

export const sliceType = "PrismicPageDataBodyPrideCalendar"

const Event = ({
	href,
	image,
	imageAlt,
	title,
	descriptionHTML,
}: PrideCalendarProps["events"][number]) => {
	return (
		<Link href={href} className="bg-beige-92 flex flex-col group">
			{image && (
				<div className="aspect-w-4 aspect-h-3 shrink-0">
					<div className="overflow-hidden">
						<GatsbyImage
							image={image}
							alt={imageAlt ?? ""}
							objectFit="cover"
							objectPosition="center"
							className={clsx(
								"h-full",
								"group-hover:scale-105 group-focus:scale-105",
								"group-hover:brightness-105 group-focus:brightness-105",
								"transition duration-300 ease"
							)}
						/>
					</div>
				</div>
			)}

			<div className="px-5 py-6 flex flex-col grow">
				{title && (
					<h3
						className={clsx("font-serif", "text-22 md:text-32", "leading-1_15")}
					>
						{title}
					</h3>
				)}

				{descriptionHTML && (
					<HTMLContent html={descriptionHTML} className="mt-6" />
				)}

				<div
					className={clsx(
						"mt-auto ml-auto pt-8 flex items-center space-x-2",
						"group-hover:text-purple-57 group-focus:text-purple-57"
					)}
				>
					<div
						className={clsx(
							"font-bold uppercase tracking-caps font-sansExt",
							"text-14",
							"leading-1_2 shrink-0",
							"transition"
						)}
					>
						Learn More
					</div>
					<ArrowIcon className="w-[1.125rem] transition" />
				</div>
			</div>
		</Link>
	)
}

type PrideCalendarProps = ReturnType<typeof mapDataToProps>

const PrideCalendar = ({
	color,
	events,
	textHTML,
	nextOverhangs,
	nextSharesBg,
	previousOverhangs,
}: PrideCalendarProps) => {
	const variantStyles = getColorVariantStyles(color)

	return (
		<BoundedBox
			tag="section"
			width="lg"
			className={clsx(variantStyles.bg)}
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
					"grid grid-cols-2 md:grid-cols-3",
					"gap-3 lg:gap-5",
					"mt-12 md:mt-15 lg:mt-18"
				)}
			>
				{events.map((event, idx) => (
					<Event key={`${event.title}-${idx}`} {...event} />
				))}
			</div>
		</BoundedBox>
	)
}

export function mapDataToProps({
	data,
	nextContext,
	previousContext,
}: MapDataToPropsCtx<PrideCalendarFragment>) {
	const color = getColorVariant(data.primary?.color)
	const prevCtx = resolvePrevContext(previousContext)
	const nextCtx = resolveNextContext(nextContext)

	const events = data.items.map((item) => ({
		title: item.event_title?.text,
		descriptionHTML: item.event_description?.html,
		href: item.event_link?.url,
		image: item.image?.gatsbyImageData as IGatsbyImageData | undefined,
		imageAlt: item.image?.alt,
	}))

	return {
		color,
		events,
		textHTML: data.primary.text?.html,

		nextSharesBg: nextContext?.backgroundColor === color,
		previousOverhangs: prevCtx?.overhangsNext,
		nextOverhangs: nextCtx?.overhangsPrevious,
	}
}

export function mapDataToContext({
	data,
}: MapDataToContextCtx<PrideCalendarFragment>) {
	return {
		backgroundColor: getColorVariant(data.primary?.color),
	}
}

export const gqlFragment = graphql`
	fragment PrideCalendar on PrismicPageDataBodyPrideCalendar {
		primary {
			color
			text {
				html
			}
		}
		items {
			event_description {
				html
			}
			event_link {
				url
			}
			event_title {
				text
			}
			image {
				alt
				gatsbyImageData(layout: FULL_WIDTH, sizes: "550px")
			}
		}
	}
`

export default PrideCalendar
