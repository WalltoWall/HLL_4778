import * as React from "react"
import { useInView } from "react-intersection-observer"
import clsx from "clsx"
import { Gradient as GradientController } from "../lib/gradient"

export const Gradient = ({
	className,
	id = "gradient-canvas",
	style,
	...props
}: React.ComponentPropsWithoutRef<"canvas">) => {
	const gradientRef = React.useRef<GradientController>()
	const { ref: canvasRef, inView } = useInView({ threshold: 0 })

	React.useEffect(() => {
		const gradient = new GradientController()
		gradientRef.current = gradient

		//@ts-expect-error - Compiled JS types are wonky.
		gradientRef.current.initGradient(`#${id}`)

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
			className={clsx("w-full h-full bg-purple-57", className)}
			style={
				{
					...style,
					"--gradient-color-1": "#e70000",
					"--gradient-color-2": "#ffab00",
					"--gradient-color-3": "#007ca0",
					"--gradient-color-4": "#ffab00",
					"--gradient-color-5": "#7452D4",
				} as React.CSSProperties
			}
			{...props}
		/>
	)
}
