import clsx from "clsx"
import * as React from "react"
import { Link } from "../../components/Link"

import { useIsDesktop } from "../../hooks/useMediaQuery"
import { DesktopEventCard } from "./DesktopEventCard"
import { FilterControls } from "./FilterControls"

import type { EventsListProps } from "./MobileEvents"

export const DesktopEvents = ({
	events,
	variant,
	updateBackground,
	activeFilter,
	clearFilters,
	filterEvents,
}: EventsListProps) => {
	const isDesktop = useIsDesktop()

	if (!isDesktop) return null

	return (
		<div className={clsx("hidden lg:grid", "grid-cols-2 gap-16", "relative")}>
			<FilterControls
				variant={variant}
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
					color={e.color}
					date={e.date}
					descriptionHTML={e.descriptionHTML}
					href={e.href}
					title={e.title}
					key={`desktopEvent-${idx}`}
					variant={variant}
					updateBackground={updateBackground}
				/>
			))}

			<div
				className={clsx(
					"col-start-2 row-start-2",
					"sticky top-0",
					"h-screen",
					"flex flex-col py-16 -mt-43"
				)}
			>
				<Link href="/" className="flex-1 block bg-beige-92" />
			</div>
		</div>
	)
}
