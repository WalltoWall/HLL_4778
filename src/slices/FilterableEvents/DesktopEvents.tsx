import clsx from "clsx"
import * as React from "react"

import { Image } from "../../components/Image"

import { useIsDesktop } from "../../hooks/useMediaQuery"
import { DesktopEventCard } from "./DesktopEventCard"
import { FilterControls } from "./FilterControls"

import type { Event } from "./FilterableEvents"
import type { EventsListProps } from "./MobileEvents"
import { getIllustrationUrl } from "./getIllustrationUrl"

interface DesktopIllustrationProps {
	activeEvent: Event
}

const DesktopIllustration = ({ activeEvent }: DesktopIllustrationProps) => {
	const illustrationUrl = getIllustrationUrl(activeEvent.illustration)

	return (
		<div
			className={clsx(
				"col-start-2 row-start-2",
				"sticky top-0",
				"h-screen",
				"flex flex-col py-16 -mt-43"
			)}
		>
			<div className="relative flex-1 bg-beige-92">
				<Image
					src={illustrationUrl}
					alt=""
					className="absolute inset-0 w-full h-full p-15"
					loading="eager"
				/>
			</div>
		</div>
	)
}

interface DesktopEventsProps extends EventsListProps {
	activeEvent: Event
}

export const DesktopEvents = ({
	events,
	activeEvent,
	activeVariant,
	updateActiveEvent,
	activeFilter,
	clearFilters,
	filterEvents,
}: DesktopEventsProps) => {
	const isDesktop = useIsDesktop()

	if (!isDesktop) return null

	return (
		<div
			className={clsx(
				"hidden lg:grid",
				"grid-cols-2 gap-y-16 lg:gap-x-25",
				"relative"
			)}
		>
			<FilterControls
				activeVariant={activeVariant}
				activeFilter={activeFilter}
				clearFilters={clearFilters}
				filterEvents={filterEvents}
				className={clsx(
					"sticky z-10 top-16",
					"self-start col-span-2 justify-self-start"
				)}
			/>

			{events.map((e, idx) => (
				<DesktopEventCard
					key={`desktopEvent-${idx}`}
					color={e.color}
					date={e.date}
					descriptionHTML={e.descriptionHTML}
					href={e.href}
					title={e.title}
					illustration={e.illustration}
					activeVariant={activeVariant}
					updateActiveEvent={updateActiveEvent}
				/>
			))}

			<DesktopIllustration activeEvent={activeEvent} />
		</div>
	)
}
