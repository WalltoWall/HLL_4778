import * as React from "react"

import { MobileEventCard } from "./MobileEventCard"
import { useIsDesktop } from "../../hooks/useMediaQuery"
import { FilterControls } from "./FilterControls"

import type { EventType, Event } from "./FilterableEvents"
import type { FilterableEventsVariant } from "./getFilterableEventsVariant"
import clsx from "clsx"

export interface EventsListProps extends React.ComponentProps<"div"> {
	updateActiveEvent: (newEvent: Event) => void
	activeVariant: FilterableEventsVariant
	events: Event[]
	activeFilter: EventType | undefined
	clearFilters: () => void
	filterEvents: (type: EventType) => void
}

export const MobileEvents = ({
	events,
	updateActiveEvent,
	activeVariant,
	activeFilter,
	clearFilters,
	filterEvents,
	className,
	...props
}: EventsListProps) => {
	const isDesktop = useIsDesktop()

	if (isDesktop) return null

	return (
		<div className={clsx("flex flex-col space-y-16", className)} {...props}>
			<FilterControls
				activeVariant={activeVariant}
				activeFilter={activeFilter}
				clearFilters={clearFilters}
				filterEvents={filterEvents}
				className="sticky z-10 self-center top-5"
			/>

			<div className="space-y-16 lg:hidden">
				{events.map((event, idx) => (
					<MobileEventCard
						key={`event-${idx}`}
						event={event}
						updateActiveEvent={updateActiveEvent}
						activeVariant={activeVariant}
					/>
				))}
			</div>
		</div>
	)
}