import * as React from "react"
import { useReducedMotion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import clsx from "clsx"
import type { Gradient as GradientController } from "../lib/gradient"

interface Props extends React.ComponentPropsWithoutRef<"div"> {
	shouldPlay?: boolean
	__HACKY_SB_OVERRIDE__?: boolean
}

export const Gradient = ({
	id = "gradient-canvas",
	style,
	shouldPlay = true,
	__HACKY_SB_OVERRIDE__ = false,
	...props
}: Props) => {
	if (process.env.NODE_ENV === "development" && !__HACKY_SB_OVERRIDE__)
		return null

	const shouldReduceMotion = useReducedMotion()
	const gradientRef = React.useRef<GradientController>()
	const { ref: canvasRef, inView } = useInView({ threshold: 0 })

	React.useEffect(() => {
		import("../lib/gradient").then((module) => {
			const GradientController = module.Gradient

			const gradient = new GradientController()
			gradientRef.current = gradient

			//@ts-expect-error - Compiled JS types are wonky.
			gradientRef.current.initGradient(`#${id}`)
		})

		return () => gradientRef.current?.disconnect()
	}, [id])

	React.useEffect(() => {
		if (!gradientRef.current) return

		if (inView && shouldPlay && !shouldReduceMotion) {
			//@ts-expect-error - Compiled JS types are wonky.
			gradientRef.current.play()
		} else {
			//@ts-expect-error - Compiled JS types are wonky.
			gradientRef.current.pause()
		}
	}, [inView, shouldPlay, shouldReduceMotion])

	return (
		<div {...props}>
			<div className="relative w-full h-full">
				<canvas
					id={id}
					ref={canvasRef}
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
