import clsx from "clsx"
import * as React from "react"

import { Image } from "../../components/Image"

import { useIsDesktop } from "../../hooks/useMediaQuery"
import { DesktopEventCard } from "./DesktopEventCard"
import { IllustrationType } from "./FilterableEvents"
import { FilterControls } from "./FilterControls"
import { getIllustrationUrl } from "./MobileEventCard"

import type { EventsListProps } from "./MobileEvents"

export const DesktopEvents = ({
	events,
	variant,
	updateBackground,
	activeFilter,
	clearFilters,
	filterEvents,
}: EventsListProps) => {
	const [illustration, setIllustration] = React.useState<IllustrationType>(
		() => {
			const firstEvent = events[0]
			if (!firstEvent) return "flag"

			return firstEvent.illustration
		}
	)

	const isDesktop = useIsDesktop()
	const illustrationUrl = getIllustrationUrl(illustration)

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
					illustration={e.illustration}
					href={e.href}
					title={e.title}
					key={`desktopEvent-${idx}`}
					variant={variant}
					updateBackground={updateBackground}
					updateIllustration={setIllustration}
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
				<div className="relative flex-1 bg-beige-92">
					<Image
						src={illustrationUrl}
						alt=""
						className="absolute inset-0 w-full h-full p-15"
						loading="eager"
					/>
				</div>
			</div>
		</div>
	)
}
