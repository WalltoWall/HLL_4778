import * as React from "react"

import { useUpdateEventInView } from "./useUpdateEventInView"
import { EventDescription } from "./EventDescription"

import type { EventCardProps } from "./MobileEventCard"

type DesktopEventCardProps = EventCardProps

export const DesktopEventCard = ({
	event,
	updateActiveEvent,
	variantStyles,
	extraStyles,
}: DesktopEventCardProps) => {
	const { ref } = useUpdateEventInView({
		updateEvent: updateActiveEvent,
		event,
		threshold: 1,
	})

	return (
		<div className="h-screen col-start-1">
			<EventDescription
				extraStyles={extraStyles}
				variantStyles={variantStyles}
				date={event.date}
				descriptionHTML={event.descriptionHTML}
				title={event.title}
				href={event.href}
				ref={ref}
			/>
		</div>
	)
}
