import * as React from "react"
import { useInView } from "react-intersection-observer"
import clsx from "clsx"
import type { Gradient as GradientController } from "../lib/gradient"
import * as styles from "./Gradient.module.css"

export const Gradient = ({
	className,
	id = "gradient-canvas",
	style,
	...props
}: React.ComponentPropsWithoutRef<"canvas">) => {
	if (process.env.NODE_ENV === "development") {
		return null
	}

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

		if (inView) {
			//@ts-expect-error - Compiled JS types are wonky.
			gradientRef.current.play()
		} else {
			//@ts-expect-error - Compiled JS types are wonky.
			gradientRef.current.pause()
		}
	}, [inView])

	return (
		<canvas
			id={id}
			ref={canvasRef}
			data-transition-in
			className={clsx("w-full h-full", styles.gradient, className)}
			style={
				{
					...style,
					"--gradient-color-1": "#e70000",
					"--gradient-color-2": "#ffab00",
					"--gradient-color-3": "#007ca0",
					"--gradient-color-4": "#7452D4",
				} as React.CSSProperties
			}
			{...props}
		/>
	)
}
