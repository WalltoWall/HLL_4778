import * as React from "react"
import { useInView } from "react-intersection-observer"
import { ColorVariant } from "../../lib/getColorVariant"

interface Args {
	updateBackground: (color: ColorVariant) => void
	color: ColorVariant
	threshold?: number
	callback?: () => void
}

export function useUpdateBackgroundInView({
	updateBackground,
	color,
	threshold = 0,
	callback,
}: Args) {
	const { ref, inView } = useInView({ threshold })

	React.useEffect(() => {
		if (!inView) return

		if (callback) callback()

		updateBackground(color)
	}, [inView, color, callback])

	return { ref }
}
