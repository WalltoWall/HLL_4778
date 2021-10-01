import * as React from "react"

export function useInterval(callback: () => void, interval: number) {
	const savedCallback = React.useRef(callback)

	// Remember the latest callback if it changes.
	React.useEffect(() => {
		savedCallback.current = callback
	}, [callback])

	// Set up the interval.
	React.useEffect(() => {
		const id = setInterval(() => savedCallback.current(), interval)

		return () => clearInterval(id)
	}, [interval])
}
