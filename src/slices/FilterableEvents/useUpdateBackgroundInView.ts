import * as React from "react"
import { useInView } from "react-intersection-observer"
import { ColorVariant } from "../../lib/getColorVariant"

interface Args {
	updateBackground: (color: ColorVariant) => void
	color: ColorVariant
	threshold?: number
}

export function useUpdateBackgroundInView({
	updateBackground,
	color,
	threshold = 0,
}: Args) {
	const { ref, inView } = useInView({ threshold })

	React.useEffect(() => {
		if (!inView) return

		updateBackground(color)
	}, [inView, color])

	return { ref }
}
