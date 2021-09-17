import clsx from "clsx"
import * as React from "react"
import { Link } from "../../components/Link"

import { useIsDesktop } from "../../hooks/useMediaQuery"
import { DesktopEventCard } from "./DesktopEventCard"

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
		<div className={clsx("hidden lg:grid", "grid-cols-2", "relative")}>
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
					"col-start-2 row-start-1 col-span-full",
					"sticky top-0",
					"h-screen",
					"flex flex-col"
				)}
			>
				<Link href="/" className="flex-1 block my-15 bg-beige-92" />
			</div>
		</div>
	)
}
