import * as React from "react"
import { useInView } from "../../hooks/useInView"

import type { Event } from "./FilterableEvents"

interface Args {
	updateEvent: (event: Event) => void
	event: Event
	threshold?: number
	ref: React.RefObject<HTMLElement>
}

export function useUpdateEventInView({
	updateEvent,
	event,
	threshold = 0,
	ref,
}: Args) {
	const inView = useInView({ threshold, ref })

	React.useEffect(() => {
		if (!inView) return

		updateEvent(event)
	}, [inView, event])

	return inView
}
