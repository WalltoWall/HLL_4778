import * as React from "react"

import type { ColorVariant } from "../../lib/getColorVariant"
import type {
	EventType,
	FilterableEventsVariant,
	Event,
} from "./FilterableEvents"

import { MobileEventCard } from "./MobileEventCard"
import { useIsDesktop } from "../../hooks/useMediaQuery"
import { FilterControls } from "./FilterControls"

export interface EventsListProps {
	updateBackground: (color: ColorVariant) => void
	variant: FilterableEventsVariant
	events: Event[]
	activeFilter: EventType | undefined
	clearFilters: () => void
	filterEvents: (type: EventType) => void
}

export const MobileEvents = ({
	events,
	updateBackground,
	variant,
	activeFilter,
	clearFilters,
	filterEvents,
}: EventsListProps) => {
	const isDesktop = useIsDesktop()

	if (isDesktop) return null

	return (
		<div className="flex flex-col space-y-10">
			<FilterControls
				variant={variant}
				activeFilter={activeFilter}
				clearFilters={clearFilters}
				filterEvents={filterEvents}
				className="self-center"
			/>

			<div className="space-y-10 lg:hidden">
				{events.map((e, idx) => (
					<MobileEventCard
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
			</div>
		</div>
	)
}
