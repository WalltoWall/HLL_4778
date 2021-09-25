import * as React from "react"
import { useInView } from "react-intersection-observer"

import type { Event } from "./FilterableEvents"

interface Args {
	updateEvent: (event: Event) => void
	event: Event
	threshold?: number
}

export function useUpdateEventInView({
	updateEvent,
	event,
	threshold = 0,
}: Args) {
	const { ref, inView } = useInView({ threshold })

	React.useEffect(() => {
		if (!inView) return

		updateEvent(event)
	}, [inView, event])

	return { ref }
}
