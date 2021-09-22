import * as React from "react"
import clsx from "clsx"

import { Link } from "../../components/Link"
import { Image } from "../../components/Image"

import { useUpdateEventInView } from "./useUpdateEventInView"
import { EventDescription } from "./EventDescription"
import { getIllustrationUrl } from "./getIllustrationUrl"

import type { FilterableEventsVariant } from "./getFilterableEventsVariant"
import type { Event } from "./FilterableEvents"

export interface EventCardProps {
	event: Event
	updateActiveEvent: (newEvent: Event) => void
	activeVariant: FilterableEventsVariant
}

export const MobileEventCard = ({
	event,
	updateActiveEvent,
	activeVariant,
}: EventCardProps) => {
	const { ref } = useUpdateEventInView({
		updateEvent: updateActiveEvent,
		event,
		threshold: 0.25,
	})
	const illustrationUrl = getIllustrationUrl(event.illustration)

	return (
		<div className="space-y-6" ref={ref}>
			<Link
				href={event.href}
				className={clsx("block bg-beige-92 aspect-w-1 aspect-h-1")}
			>
				<div className="flex items-center justify-center p-5">
					<Image src={illustrationUrl} alt="" className="w-full h-full" />
				</div>
			</Link>

			<EventDescription
				activeVariant={activeVariant}
				date={event.date}
				descriptionHTML={event.descriptionHTML}
				title={event.title}
				href={event.href}
			/>
		</div>
	)
}
