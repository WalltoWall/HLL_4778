import * as React from "react"

import { useUpdateEventInView } from "./useUpdateEventInView"
import { EventDescription } from "./EventDescription"

import type { EventCardProps } from "./MobileEventCard"

type DesktopEventCardProps = EventCardProps

export const DesktopEventCard = ({
	event,
	updateActiveEvent,
	activeVariant,
}: DesktopEventCardProps) => {
	const { ref } = useUpdateEventInView({
		updateEvent: updateActiveEvent,
		event,
		threshold: 1,
	})

	return (
		<div className="h-screen col-start-1">
			<EventDescription
				activeVariant={activeVariant}
				date={event.date}
				descriptionHTML={event.descriptionHTML}
				title={event.title}
				href={event.href}
				ref={ref}
			/>
		</div>
	)
}
