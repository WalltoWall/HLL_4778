import * as React from "react"
import clsx from "clsx"

export const variants = {
	base: "py-16 sm:py-20 md:py-24 lg:py-36",
}

interface Props extends React.ComponentPropsWithoutRef<"div"> {
	tag?: keyof JSX.IntrinsicElements
	maxWidthClassName?: string
	nextSharesBg?: boolean
	variant?: keyof typeof variants
}

export const BoundedBox = React.forwardRef<HTMLElement, Props>(
	(
		{
			tag: Comp = "div",
			className,
			maxWidthClassName = "max-w-6xl",
			children,
			variant = "base",
			nextSharesBg = false,
			...props
		},
		ref
	) => {
		const variantStyles = variants[variant]

		return (
			//@ts-expect-error - Complex polymorphic type
			<Comp
				//@ts-expect-error - Complex polymorphic type
				ref={ref}
				className={clsx(
					variantStyles,
					nextSharesBg && "pb-0 sm:pb-0 md:pb-0 lg:pb-0",
					className,
					"px-5 lg:px-8"
				)}
				{...props}
			>
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
