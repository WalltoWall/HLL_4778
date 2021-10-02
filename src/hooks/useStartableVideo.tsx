import * as React from "react"

export function useStartableVideo() {
	const [hasVideoStarted, setHasVideoStarted] = React.useState(false)
	const [isPlaying, setIsPlaying] = React.useState(false)

	const videoRef = React.useRef<HTMLVideoElement>(null)

	function startVideo() {
		if (!videoRef.current) return

		if (!hasVideoStarted) {
			setHasVideoStarted(true)
		}

		videoRef.current.play()
		setIsPlaying(true)
	}

	function stopVideo() {
		if (!videoRef.current) return

		videoRef.current.pause()
		setIsPlaying(false)
	}

	return { hasVideoStarted, isPlaying, videoRef, stopVideo, startVideo }
}
