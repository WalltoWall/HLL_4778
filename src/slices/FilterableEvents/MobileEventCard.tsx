import * as React from "react"
import clsx from "clsx"

import { Link } from "../../components/Link"
import type { ColorVariant } from "../../lib/getColorVariant"
import type { Event, FilterableEventsVariant } from "./FilterableEvents"
import { useUpdateBackgroundInView } from "./useUpdateBackgroundInView"
import { EventDescription } from "./EventDescription"

export interface EventCardProps extends Event {
	updateBackground: (color: ColorVariant) => void
	variant: FilterableEventsVariant
}

export const MobileEventCard = ({
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
		threshold: 0.25,
	})

	return (
		<div className="space-y-6" ref={ref}>
			<Link
				href={href}
				className={clsx("block bg-beige-92 aspect-w-1 aspect-h-1")}
			/>

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
