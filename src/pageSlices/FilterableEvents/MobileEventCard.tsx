import * as React from "react"
import clsx from "clsx"

import { Link } from "../../components/Link"
import { Image } from "../../components/Image"

import { useUpdateEventInView } from "./useUpdateEventInView"
import { EventDescription } from "./EventDescription"
import { getIllustrationUrl } from "./getIllustrationUrl"

import type { FilterableEventsExtraStyles } from "./getFilterableEventsExtraStyles"
import type { Event } from "./FilterableEvents"
import type { ColorVariantStyles } from "../../lib/colorVariant"

export interface EventCardProps {
	event: Event
	updateActiveEvent: (newEvent: Event) => void
	variantStyles: ColorVariantStyles
	extraStyles: FilterableEventsExtraStyles
}

export const MobileEventCard = ({
	event,
	updateActiveEvent,
	extraStyles,
	variantStyles,
}: EventCardProps) => {
	const { ref } = useUpdateEventInView({
		updateEvent: updateActiveEvent,
		event,
		threshold: 0.75,
	})
	const illustrationUrl = getIllustrationUrl(event.illustration)

	return (
		<div className="space-y-6">
			<Link
				href={event.href}
				className={clsx("block bg-beige-92 aspect-w-1 aspect-h-1")}
			>
				<div className="flex items-center justify-center p-5">
					<Image src={illustrationUrl} alt="" className="w-full h-full" />
				</div>
			</Link>

			<EventDescription
				ref={ref}
				variantStyles={variantStyles}
				extraStyles={extraStyles}
				date={event.date}
				descriptionHTML={event.descriptionHTML}
				title={event.title}
				href={event.href}
			/>
		</div>
	)
}
