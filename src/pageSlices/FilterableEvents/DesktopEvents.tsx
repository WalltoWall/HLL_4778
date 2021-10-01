import clsx from "clsx"
import * as React from "react"
import { m } from "framer-motion"

import { Image } from "../../components/Image"
import { DesktopEventCard } from "./DesktopEventCard"
import { FilterControls } from "./FilterControls"
import { getIllustrationUrl } from "./getIllustrationUrl"
import { Link } from "../../components/Link"

import type { Event } from "./FilterableEvents"
import type { EventsListProps } from "./MobileEvents"

interface DesktopIllustrationProps {
	activeEvent: Event
}

const MotionImage = m(Image)

const DesktopIllustration = ({ activeEvent }: DesktopIllustrationProps) => {
	const illustrationUrl = getIllustrationUrl(activeEvent.illustration)

	return (
		<Link
			href={activeEvent.href}
			withRing={false}
			aria-label={`Go to ${activeEvent.title} details page.`}
			className={clsx(
				"col-start-2 row-start-2",
				"sticky top-0",
				"h-screen",
				"flex flex-col py-16 -mt-43"
			)}
		>
			<div className="relative flex-1 bg-beige-92">
				<MotionImage
					key={activeEvent.illustration}
					animate={{ opacity: 1 }}
					initial={{ opacity: 0 }}
					transition={{ type: "tween", duration: 0.75, ease: "easeOut" }}
					src={illustrationUrl}
					alt=""
					className="absolute inset-0 w-full h-full p-15"
					loading="eager"
				/>
			</div>
		</Link>
	)
}

interface DesktopEventsProps extends EventsListProps {
	activeEvent: Event
}

export const DesktopEvents = ({
	events,
	activeEvent,
	extraStyles,
	updateActiveEvent,
	activeFilter,
	clearFilters,
	filterEvents,
	className,
	variantStyles,
	...props
}: DesktopEventsProps) => {
	return (
		<div
			className={clsx(
				"hidden lg:grid",
				"grid-cols-2 gap-y-16 lg:gap-x-25",
				"relative",
				className
			)}
			{...props}
		>
			<FilterControls
				extraStyles={extraStyles}
				activeFilter={activeFilter}
				clearFilters={clearFilters}
				filterEvents={filterEvents}
				className={clsx(
					"sticky z-10 top-16",
					"self-start col-span-2 justify-self-start"
				)}
			/>

			{events.map((event, idx) => (
				<DesktopEventCard
					key={`desktopEvent-${idx}`}
					event={event}
					extraStyles={extraStyles}
					updateActiveEvent={updateActiveEvent}
					variantStyles={variantStyles}
					isFirstEvent={idx === 0}
				/>
			))}

			<DesktopIllustration activeEvent={activeEvent} />
		</div>
	)
}
