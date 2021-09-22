import * as React from "react"

import { useUpdateBackgroundInView } from "./useUpdateBackgroundInView"
import { EventDescription } from "./EventDescription"

import type { EventCardProps } from "./MobileEventCard"
import type { IllustrationType } from "./FilterableEvents"

interface DesktopEventCardProps extends EventCardProps {
	updateIllustration: (illustration: IllustrationType) => void
}

export const DesktopEventCard = ({
	color,
	title,
	descriptionHTML,
	date,
	href,
	updateBackground,
	updateIllustration,
	illustration,
	variant,
}: DesktopEventCardProps) => {
	const updateCardIllustration = React.useCallback(() => {
		updateIllustration(illustration)
	}, [illustration])

	const { ref } = useUpdateBackgroundInView({
		updateBackground,
		color,
		threshold: 0.33,
		callback: updateCardIllustration,
	})

	return (
		<div className="h-screen col-start-1" ref={ref}>
			<EventDescription
				variant={variant}
				date={date}
				descriptionHTML={descriptionHTML}
				title={title}
				href={href}
			/>
		</div>
	)
}
