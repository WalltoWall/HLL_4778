import * as React from "react"

import { EventDescription } from "./EventDescription"

import type { EventCardProps } from "./MobileEventCard"
import clsx from "clsx"
import { useInView } from "../../hooks/useInView"

interface DesktopEventCardProps extends EventCardProps {
	isFirstEvent: boolean
	hasActiveFilter: boolean
}

export const DesktopEventCard = ({
	event,
	updateActiveEvent,
	variantStyles,
	extraStyles,
	isFirstEvent,
	hasActiveFilter,
}: DesktopEventCardProps) => {
	const ref = React.useRef<HTMLDivElement>(null)
	const inView = useInView({ threshold: 1, ref })

	React.useEffect(() => {
		if (!inView) return

		updateActiveEvent(event)
	}, [inView, event])

	return (
		<div
			className={clsx(
				"h-screen col-start-1",
				isFirstEvent && !hasActiveFilter && "mt-[33vh]"
			)}
		>
			<EventDescription
				extraStyles={extraStyles}
				variantStyles={variantStyles}
				date={event.date}
				descriptionHTML={event.descriptionHTML}
				title={event.title}
				href={event.href}
				ref={ref}
			/>
		</div>
	)
}
