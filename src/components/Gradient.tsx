import * as React from "react"
import { useReducedMotion } from "framer-motion"
import { useInView } from "../hooks/useInView"
import clsx from "clsx"
import type { Gradient as GradientController } from "../lib/gradient"

interface Props extends React.ComponentPropsWithoutRef<"div"> {
	shouldPlay?: boolean
}

export const Gradient = ({ style, shouldPlay = true, ...props }: Props) => {
	const shouldReduceMotion = useReducedMotion()
	const rGradient = React.useRef<GradientController>()
	const rCanvas = React.useRef<HTMLCanvasElement>(null)
	const inView = useInView({ threshold: 0, ref: rCanvas })

	React.useEffect(() => {
		import("../lib/gradient").then((module) => {
			const GradientController = module.Gradient

			rGradient.current = new GradientController()

			//@ts-expect-error - Compiled JS types are wonky.
			rGradient.current.initGradient(rCanvas.current)
		})

		return () => rGradient.current?.disconnect()
	}, [])

	React.useEffect(() => {
		if (!rGradient.current) return

		if (inView && shouldPlay && !shouldReduceMotion) {
			//@ts-expect-error - Compiled JS types are wonky.
			rGradient.current.play()
		} else {
			//@ts-expect-error - Compiled JS types are wonky.
			rGradient.current.pause()
		}
	}, [inView, shouldPlay, shouldReduceMotion])

	return (
		<div {...props}>
			<div className="relative w-full h-full">
				<canvas
					ref={rCanvas}
					data-transition-in
					className={clsx("w-full h-full", "gradient")}
					style={
						{
							...style,
							"--gradient-color-1": "#e70000",
							"--gradient-color-2": "#ffab00",
							"--gradient-color-3": "#007ca0",
							"--gradient-color-4": "#7452D4",
						} as React.CSSProperties
					}
				/>

				<div className="absolute inset-0 w-full h-full pointer-events-none gradient-texture" />
			</div>
		</div>
	)
}
