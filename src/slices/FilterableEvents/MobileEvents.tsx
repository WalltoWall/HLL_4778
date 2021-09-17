import * as React from "react"

import type { ColorVariant } from "../../lib/getColorVariant"
import type { FilterableEventsVariant, Event } from "./FilterableEvents"

import { MobileEventCard } from "./MobileEventCard"
import { useIsDesktop } from "../../hooks/useMediaQuery"

export interface EventsListProps {
	updateBackground: (color: ColorVariant) => void
	variant: FilterableEventsVariant
	events: Event[]
}

export const MobileEvents = ({
	events,
	updateBackground,
	variant,
}: EventsListProps) => {
	const isDesktop = useIsDesktop()

	if (isDesktop) return null

	return (
		<div className="lg:hidden">
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
	)
}
