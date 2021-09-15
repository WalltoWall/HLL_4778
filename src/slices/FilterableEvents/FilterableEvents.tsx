import * as React from "react"
import clsx from "clsx"
import { graphql } from "gatsby"
import { undefIfEmpty } from "@walltowall/helpers"

import type { MapDataToPropsCtx } from "../../templates/page"
import type { FilterableEventsFragment } from "../../gqlTypes.gen"

import { BoundedBox } from "../../components/BoundedBox"
import { ColorVariant, getColorVariant } from "../../lib/getColorVariant"
import { FilterControls } from "./FilterControls"
import { EventCard } from "./EventCard"

export type EventType = "watch" | "participate" | "learn"

export const sliceType = "PrismicPageDataBodyFilterableEvents"

export interface FilterableEventsVariant {
	bg: string
	inactiveControlTextColor: string
	activeContolTextColor: string
	activeButtonBg: string
	textColor: string
}

const colorVariants: Record<ColorVariant, FilterableEventsVariant> = {
	blue: {
		bg: "bg-blue-31",
		inactiveControlTextColor: "text-blue-31",
		activeContolTextColor: "text-white",
		activeButtonBg: "bg-yellow-50",
		textColor: "text-beige-92",
	},
	green: {
		bg: "bg-green-27",
		inactiveControlTextColor: "text-green-27",
		activeContolTextColor: "text-white",
		activeButtonBg: "bg-yellow-50",
		textColor: "text-beige-92",
	},
	purple: {
		bg: "bg-purple-57",
		inactiveControlTextColor: "text-purple-57",
		activeContolTextColor: "text-white",
		activeButtonBg: "bg-yellow-50",
		textColor: "text-beige-92",
	},
	red: {
		bg: "bg-red-45",
		inactiveControlTextColor: "text-red-45",
		activeContolTextColor: "text-white",
		activeButtonBg: "bg-yellow-50",
		textColor: "text-beige-92",
	},
	yellow: {
		bg: "bg-yellow-50",
		inactiveControlTextColor: "text-yellow-50",
		activeContolTextColor: "text-white",
		activeButtonBg: "bg-blue-31",
		textColor: "text-black",
	},
}

// TODO: Setup nextSharesBg or equivalent
const FilterableEvents = ({
	events = [],
}: ReturnType<typeof mapDataToProps>) => {
	const [activeFilter, setActiveFilter] = React.useState<
		EventType | undefined
	>()
	const [variant, setVariant] = React.useState<FilterableEventsVariant>(() => {
		const [firstEvent] = events
		if (!firstEvent) return colorVariants.blue

		return colorVariants[firstEvent.color]
	})

	const filteredEvents = events.filter((e) => {
		if (!activeFilter) return true

		return e.type === activeFilter
	})

	function updateBackground(color: ColorVariant) {
		const newVariant = colorVariants[color]

		setVariant(newVariant)
	}

	function clearFilters() {
		setActiveFilter(undefined)
	}

	function filterEvents(type: EventType) {
		setActiveFilter(type)
	}

	return (
		<BoundedBox
			tag="section"
			className={clsx("py-10 transition duration-300", variant.bg)}
		>
			<div className="space-y-11">
				<FilterControls
					variant={variant}
					activeFilter={activeFilter}
					clearFilters={clearFilters}
					filterEvents={filterEvents}
				/>

				<ul className="space-y-14">
					{filteredEvents.map((e, idx) => (
						<EventCard
							key={`event-${idx}`}
							href={e.href}
							color={e.color}
							title={e.title}
							descriptionHTML={e.descriptionHTML}
							date={e.date}
							updateBackground={updateBackground}
							variant={variant}
						/>
					))}
				</ul>
			</div>
		</BoundedBox>
	)
}

export function mapDataToProps({
	data,
}: MapDataToPropsCtx<FilterableEventsFragment>) {
	return {
		events:
			data.items?.map((item) => {
				const event = item?.event?.document

				return {
					color: getColorVariant(item?.color),
					title: undefIfEmpty(event?.data?.title?.text),
					descriptionHTML: undefIfEmpty(event?.data?.description?.html),
					date: new Date(event?.data?.date as string),
					type: event?.data?.type?.toLowerCase() as EventType,
					href: item?.event?.url,
				}
			}) ?? [],
	}
}

export const gqlFragment = graphql`
	fragment FilterableEvents on PrismicPageDataBodyFilterableEvents {
		items {
			color
			event {
				url
				document {
					... on PrismicEvent {
						_previewable
						data {
							date
							description {
								html
							}
							title {
								text
							}
							type
						}
					}
				}
			}
		}
	}
`

export default FilterableEvents
