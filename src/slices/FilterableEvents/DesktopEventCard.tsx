import * as React from "react"

import { useUpdateEventInView } from "./useUpdateEventInView"
import { EventDescription } from "./EventDescription"

import type { EventCardProps } from "./MobileEventCard"

type DesktopEventCardProps = EventCardProps

export const DesktopEventCard = ({
	color,
	title,
	descriptionHTML,
	date,
	illustration,
	href,
	updateActiveEvent,
	activeVariant,
}: DesktopEventCardProps) => {
	const { ref } = useUpdateEventInView({
		updateEvent: updateActiveEvent,
		event: { color, date, illustration, descriptionHTML, href, title },
		threshold: 0.33,
	})

	return (
		<div className="h-screen col-start-1" ref={ref}>
			<EventDescription
				activeVariant={activeVariant}
				date={date}
				descriptionHTML={descriptionHTML}
				title={title}
				href={href}
			/>
		</div>
	)
}
