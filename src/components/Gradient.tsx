import * as React from "react"
import clsx from "clsx"
import { Gradient as GradientFoo } from "../lib/gradient"

export const Gradient = ({
	className,
	id = "gradient-canvas",
	style,
	...props
}: React.ComponentPropsWithoutRef<"canvas">) => {
	React.useEffect(() => {
		const gradient = new GradientFoo()

		//@ts-expect-error - Compiled JS types are wonky.
		gradient.initGradient(`#${id}`)
	}, [id])

	return (
		<canvas
			id={id}
			data-transition-in
			className={clsx("w-full h-full", className)}
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
