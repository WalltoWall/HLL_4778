import * as React from "react"
import clsx from "clsx"

export const variants = {
	base: "py-16 sm:py-20 md:py-24 lg:py-36",
	footer: clsx("pt-43 md:pt-60 lg:pt-99", "pb-8"),
	header: "py-6 md:py-7 lg:py-8",
}

export const maxWidthVariants = {
	base: "max-w-[1200px]",
	wide: "max-w-[2000px]",
}

interface Props extends React.ComponentPropsWithoutRef<"div"> {
	tag?: keyof JSX.IntrinsicElements
	nextSharesBg?: boolean
	variant?: keyof typeof variants
	width?: keyof typeof maxWidthVariants
}

export const BoundedBox = React.forwardRef<HTMLElement, Props>(
	(
		{
			tag: Comp = "div",
			className,
			children,
			variant = "base",
			width = "wide",
			nextSharesBg = false,
			...props
		},
		ref
	) => {
		const variantStyles = variants[variant]
		const maxWidth = maxWidthVariants[width]

		return (
			//@ts-expect-error - Complex polymorphic type
			<Comp
				//@ts-expect-error - Complex polymorphic type
				ref={ref}
				className={clsx(
					variantStyles,
					nextSharesBg && "pb-0 sm:pb-0 md:pb-0 lg:pb-0",
					className,
					"px-5 md:px-8 lg:px-15"
				)}
				{...props}
			>
				<div className={clsx(maxWidth, "w-full mx-auto h-full flex flex-col")}>
					{children}
				</div>
			</Comp>
		)
	}
)
BoundedBox.displayName = "BoundedBox"
