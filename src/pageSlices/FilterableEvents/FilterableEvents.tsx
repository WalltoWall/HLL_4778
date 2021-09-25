import * as React from "react"
import clsx from "clsx"
import { graphql } from "gatsby"
import { undefIfEmpty } from "@walltowall/helpers"

import { BoundedBox } from "../../components/BoundedBox"
import { ColorVariant, getColorVariant } from "../../lib/colorVariant"
import { DesktopEvents } from "./DesktopEvents"
import { MobileEvents } from "./MobileEvents"
import { getFilterableEventsVariant } from "./getFilterableEventsVariant"

import type { IllustrationType } from "./getIllustrationUrl"
import type {
	MapDataToContextCtx,
	MapDataToPropsCtx,
} from "../../templates/page"
import type { FilterableEventsFragment } from "../../gqlTypes.gen"

export interface Event {
	color: ColorVariant
	title?: string
	descriptionHTML?: string
	date: Date
	href?: string
	illustration: IllustrationType
}
export type EventType = "watch" | "participate" | "learn"

export const sliceType = "PrismicPageDataBodyFilterableEvents"

const FilterableEvents = ({
	events = [],
	nextOverhangs,
	previousOverhangs,
}: ReturnType<typeof mapDataToProps>) => {
	const [activeFilter, setActiveFilter] = React.useState<
		EventType | undefined
	>()
	const filteredEvents = events.filter((e) => {
		if (!activeFilter) return true

		return e.type === activeFilter
	})

	const [activeEvent, setActiveEvent] = React.useState<Event>(filteredEvents[0])
	const containerRef = React.useRef<HTMLElement | null>(null)

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

	const activeColorVariant = getFilterableEventsVariant(activeEvent.color)

	return (
		<BoundedBox
			tag="section"
			ref={containerRef}
			className={clsx(
				"relative transition duration-300",
				activeColorVariant.bg
			)}
			nextOverhangs={nextOverhangs}
			previousOverhangs={previousOverhangs}
		>
			<MobileEvents
				events={filteredEvents}
				updateActiveEvent={setActiveEvent}
				activeVariant={activeColorVariant}
				activeFilter={activeFilter}
				clearFilters={clearFilters}
				filterEvents={filterEvents}
			/>

			<DesktopEvents
				events={filteredEvents}
				updateActiveEvent={setActiveEvent}
				activeVariant={activeColorVariant}
				activeEvent={activeEvent}
				activeFilter={activeFilter}
				clearFilters={clearFilters}
				filterEvents={filterEvents}
			/>
		</BoundedBox>
	)
}

export function mapDataToProps({
	data,
	nextContext,
	previousContext,
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
					illustration:
						event?.data?.illustration?.toLowerCase() as IllustrationType,
					type: event?.data?.type?.toLowerCase() as EventType,
					href: item?.event?.url,
				}
			}) ?? [],
		previousOverhangs: previousContext?.overhangsPrevious,
		nextOverhangs: nextContext?.overhangsNext,
	}
}

export function mapDataToContext({
	data,
}: MapDataToContextCtx<FilterableEventsFragment>) {
	const events = data.items ?? []
	const firstEvent = events[0]

	return {
		backgroundColor: getColorVariant(firstEvent?.color),
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
							illustration
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
