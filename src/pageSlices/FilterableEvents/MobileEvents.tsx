import * as React from "react"
import clsx from "clsx"

import { MobileEventCard } from "./MobileEventCard"
import { FilterControls } from "./FilterControls"

import type { EventType, Event } from "./FilterableEvents"
import type { FilterableEventsExtraStyles } from "./getFilterableEventsExtraStyles"
import type { ColorVariantStyles } from "../../lib/colorVariant"

export interface EventsListProps extends React.ComponentProps<"div"> {
	updateActiveEvent: (newEvent: Event) => void
	extraStyles: FilterableEventsExtraStyles
	events: Event[]
	activeFilter: EventType | undefined
	clearFilters: () => void
	filterEvents: (type: EventType) => void
	variantStyles: ColorVariantStyles
}

export const MobileEvents = ({
	events,
	updateActiveEvent,
	extraStyles,
	activeFilter,
	clearFilters,
	filterEvents,
	className,
	variantStyles,
	...props
}: EventsListProps) => {
	return (
		<div
			className={clsx("flex flex-col space-y-16 lg:hidden", className)}
			{...props}
		>
			<FilterControls
				extraStyles={extraStyles}
				activeFilter={activeFilter}
				clearFilters={clearFilters}
				filterEvents={filterEvents}
				className="sticky z-10 self-center top-5"
				layoutIdPrefix="mobile"
			/>

			<div className="space-y-25">
				{events.map((event, idx) => (
					<MobileEventCard
						key={`event-${idx}`}
						event={event}
						updateActiveEvent={updateActiveEvent}
						extraStyles={extraStyles}
						variantStyles={variantStyles}
					/>
				))}
			</div>
		</div>
	)
}
