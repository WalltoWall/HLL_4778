import * as React from "react"

import { useUpdateBackgroundInView } from "./useUpdateBackgroundInView"
import { EventDescription } from "./EventDescription"

import type { EventCardProps } from "./MobileEventCard"

export const DesktopEventCard = ({
	color,
	title,
	descriptionHTML,
	date,
	href,
	updateBackground,
	variant,
}: EventCardProps) => {
	const { ref } = useUpdateBackgroundInView({
		updateBackground,
		color,
		threshold: 0,
	})

	return (
		<div className="h-screen col-start-1" ref={ref}>
			<EventDescription
				variant={variant}
				date={date}
				descriptionHTML={descriptionHTML}
				title={title}
				href={href}
			/>
		</div>
	)
}
