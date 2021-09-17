import * as React from "react"
import clsx from "clsx"
import { graphql } from "gatsby"
import { undefIfEmpty } from "@walltowall/helpers"

import type {
	MapDataToContextCtx,
	MapDataToPropsCtx,
} from "../../templates/page"
import type { FilterableEventsFragment } from "../../gqlTypes.gen"

import { BoundedBox } from "../../components/BoundedBox"
import { ColorVariant, getColorVariant } from "../../lib/getColorVariant"
import { FilterControls } from "./FilterControls"
import { DesktopEvents } from "./DesktopEvents"
import { MobileEvents } from "./MobileEvents"

export interface Event {
	color: ColorVariant
	title?: string
	descriptionHTML?: string
	date: Date
	href?: string
}

export type EventType = "watch" | "participate" | "learn"

export interface FilterableEventsVariant {
	bg: string
	controlsBg: string
	controlsBorder: string
	inactiveControlTextColor: string
	activeContolTextColor: string
	activeButtonBg: string
	textColor: string
}

const colorVariants: Record<ColorVariant, FilterableEventsVariant> = {
	blue: {
		bg: "bg-blue-31",
		controlsBg: "bg-beige-92",
		controlsBorder: "border-blue-31",
		inactiveControlTextColor: "text-blue-31",
		activeContolTextColor: "text-beige-92",
		activeButtonBg: "bg-blue-31",
		textColor: "text-beige-92",
	},
	green: {
		bg: "bg-green-27",
		controlsBg: "bg-beige-92",
		controlsBorder: "border-green-27",
		inactiveControlTextColor: "text-green-27",
		activeContolTextColor: "text-white",
		activeButtonBg: "bg-green-27",
		textColor: "text-beige-92",
	},
	purple: {
		bg: "bg-purple-57",
		controlsBg: "bg-beige-92",
		controlsBorder: "border-purple-57",
		inactiveControlTextColor: "text-purple-57",
		activeContolTextColor: "text-white",
		activeButtonBg: "bg-purple-57",
		textColor: "text-beige-92",
	},
	red: {
		bg: "bg-red-45",
		controlsBg: "bg-beige-92",
		controlsBorder: "border-red-45",
		inactiveControlTextColor: "text-red-45",
		activeContolTextColor: "text-white",
		activeButtonBg: "bg-red-45",
		textColor: "text-beige-92",
	},
	yellow: {
		bg: "bg-yellow-50",
		controlsBg: "bg-yellow-50",
		controlsBorder: "border-beige-92",
		inactiveControlTextColor: "text-beige-92",
		activeContolTextColor: "text-black",
		activeButtonBg: "bg-beige-92",
		textColor: "text-black",
	},
}

export const sliceType = "PrismicPageDataBodyFilterableEvents"

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
	const containerRef = React.useRef<HTMLElement | null>(null)

	const filteredEvents = events.filter((e) => {
		if (!activeFilter) return true

		return e.type === activeFilter
	})

	function updateBackground(color: ColorVariant) {
		const newVariant = colorVariants[color]

		setVariant(newVariant)
	}

	function scrollToContainerTop() {
		if (!containerRef.current) return

		containerRef.current.scrollIntoView({ block: "start" })
	}

	function clearFilters() {
		setActiveFilter(undefined)
		scrollToContainerTop()
	}

	function filterEvents(type: EventType) {
		setActiveFilter(type)
		scrollToContainerTop()
	}

	return (
		<BoundedBox
			tag="section"
			ref={containerRef}
			className={clsx("relative transition duration-300", variant.bg)}
		>
			<MobileEvents
				events={filteredEvents}
				updateBackground={updateBackground}
				variant={variant}
				activeFilter={activeFilter}
				clearFilters={clearFilters}
				filterEvents={filterEvents}
			/>

			<DesktopEvents
				events={filteredEvents}
				updateBackground={updateBackground}
				variant={variant}
				activeFilter={activeFilter}
				clearFilters={clearFilters}
				filterEvents={filterEvents}
			/>
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

export function mapDataToContext({
	data,
}: MapDataToContextCtx<FilterableEventsFragment>) {
	const [firstEvent] = data.items ?? []

	return {
		backgroundColor: firstEvent ? getColorVariant(firstEvent.color) : "blue",
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
