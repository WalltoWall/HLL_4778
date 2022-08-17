import * as React from "react"

const isRenderingOnServer = typeof window === "undefined"
const getInitialState = (query: string) => {
	// For our initial server render, we won't know if the user
	// prefers reduced motion, but it doesn't matter. This value
	// will be overwritten on the client, before any animations
	// occur.
	return isRenderingOnServer ? true : !window.matchMedia(query).matches
}

export function useMedia(query: string) {
	const [prefersReducedMotion, setPrefersReducedMotion] =
		React.useState(getInitialState)

	React.useEffect(() => {
		const mediaQueryList = window.matchMedia(query)

		const listener = (event) => {
			setPrefersReducedMotion(!event.matches)
		}

		mediaQueryList.addEventListener("change", listener)
		return () => {
			mediaQueryList.removeEventListener("change", listener)
		}
	}, [])

	return prefersReducedMotion
}
