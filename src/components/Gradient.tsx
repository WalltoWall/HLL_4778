import { useEffect } from "react"
import { Gradient as GradientFoo } from "../lib/gradient"

export const Gradient = () => {
	useEffect(() => {
		const gradient = new GradientFoo()

		gradient.initGradient("#gradient-canvas")
	}, [])

	return (
		<canvas
			id="gradient-canvas"
			data-transition-in
			className="w-full h-full"
			style={
				{
					"--gradient-color-1": "#e70000",
					"--gradient-color-2": "#ffab00",
					"--gradient-color-3": "#007ca0",
					"--gradient-color-4": "#ffab00",
				} as React.CSSProperties
			}
		/>
	)
}
