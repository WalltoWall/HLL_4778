import * as React from "react"

import { useIsDesktop } from "../../hooks/useMediaQuery"
import { DesktopEventCard } from "./DesktopEventCard"

import type { EventsListProps } from "./MobileEvents"

export const DesktopEvents = ({
	events,
	variant,
	updateBackground,
}: EventsListProps) => {
	const isDesktop = useIsDesktop()

	if (!isDesktop) return null

	return (
		<div className="hidden lg:block">
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
		</div>
	)
}
