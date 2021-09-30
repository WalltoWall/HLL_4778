import * as React from "react"

export function useStartableVideo() {
	const [hasVideoStarted, setHasVideoStarted] = React.useState(false)
	const videoRef = React.useRef<HTMLVideoElement>(null)

	async function startVideo() {
		if (!videoRef.current) return
		if (!hasVideoStarted) {
			setHasVideoStarted(true)
			await videoRef.current.play()
		} else {
			videoRef.current.pause()
		}
	}

	return { hasVideoStarted, startVideo, videoRef }
}
