import * as React from "react"

import { useUpdateEventInView } from "./useUpdateEventInView"
import { EventDescription } from "./EventDescription"

import type { EventCardProps } from "./MobileEventCard"
import clsx from "clsx"

interface DesktopEventCardProps extends EventCardProps {
	isFirstEvent: boolean
	hasActiveFilter: boolean
}

export const DesktopEventCard = ({
	event,
	updateActiveEvent,
	variantStyles,
	extraStyles,
	isFirstEvent,
	hasActiveFilter,
}: DesktopEventCardProps) => {
	const { ref } = useUpdateEventInView({
		updateEvent: updateActiveEvent,
		event,
		threshold: 1,
	})

	return (
		<div
			className={clsx(
				"h-screen col-start-1",
				isFirstEvent && !hasActiveFilter && "mt-[33vh]"
			)}
		>
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
