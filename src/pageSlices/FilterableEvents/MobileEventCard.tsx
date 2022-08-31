import * as React from "react"
import clsx from "clsx"

import { Link } from "../../components/Link"
import { Image } from "../../components/Image"

import { useInView } from "../../hooks/useInView"
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
	const ref = React.useRef<HTMLDivElement>(null)
	const inView = useInView({ threshold: 0.75, ref })

	React.useEffect(() => {
		if (!inView) return

		updateActiveEvent(event)
	}, [inView, event])

	const illustrationUrl = getIllustrationUrl(event.illustration)

	return (
		<div className="space-y-6">
			<Link
				href={event.href}
				className={clsx("block bg-beige-92 aspect-w-1 aspect-h-1")}
				aria-label={`Go to ${event.title} details page.`}
			>
				<div className="flex items-center justify-center p-5 md:p-10">
					<Image
						src={illustrationUrl}
						alt=""
						className="w-full h-full object-contain"
					/>
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
