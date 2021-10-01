import * as React from "react"

import { useUpdateEventInView } from "./useUpdateEventInView"
import { EventDescription } from "./EventDescription"

import type { EventCardProps } from "./MobileEventCard"
import clsx from "clsx"

interface DesktopEventCardProps extends EventCardProps {
	isFirstEvent: boolean
}

export const DesktopEventCard = ({
	event,
	updateActiveEvent,
	variantStyles,
	extraStyles,
	isFirstEvent,
}: DesktopEventCardProps) => {
	const { ref } = useUpdateEventInView({
		updateEvent: updateActiveEvent,
		event,
		threshold: 1,
	})

	return (
		<div className={clsx("h-screen col-start-1", isFirstEvent && "mt-[33vh]")}>
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
