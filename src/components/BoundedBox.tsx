import * as React from "react"
import clsx from "clsx"

interface Props extends React.ComponentPropsWithoutRef<"div"> {
	tag?: keyof JSX.IntrinsicElements
	maxWidthClassName?: string
}

export const BoundedBox = React.forwardRef<HTMLElement, Props>(
	(
		{
			tag: Comp = "div",
			className,
			maxWidthClassName = "max-w-4xl",
			children,
			...props
		},
		ref
	) => {
		return (
			//@ts-expect-error - Complex polymorphic type
			<Comp ref={ref} className={clsx(className, "px-5")} {...props}>
				<div
					className={clsx(
						maxWidthClassName,
						"w-full mx-auto h-full flex flex-col"
					)}
				>
					{children}
				</div>
			</Comp>
		)
	}
)
BoundedBox.displayName = "BoundedBox"
