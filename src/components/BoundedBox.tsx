import * as React from "react"
import clsx from "clsx"

export const variants = {
	base: "py-16 sm:py-20 md:py-24 lg:py-36",
	bio: "pt-16 sm:pt-20 md:pt-24 lg:pt-36 sm:pb-9 md:pb-13 lg:pb-18",
	header: "py-6 md:py-7 lg:py-8",
}

export const maxWidthVariants = {
	base: "max-w-[1200px]",
	lg: "max-w-[1650px]",
	wide: "max-w-[2000px]",
}

export interface BoundedBoxProps extends React.ComponentPropsWithoutRef<"div"> {
	tag?: keyof JSX.IntrinsicElements
	variant?: keyof typeof variants
	width?: keyof typeof maxWidthVariants
	nextSharesBg?: boolean
	previousOverhangs?: boolean
	nextOverhangs?: boolean
}

export const BoundedBox = React.forwardRef<HTMLElement, BoundedBoxProps>(
	(
		{
			tag: Comp = "div",
			className,
			children,
			variant = "base",
			width = "wide",
			nextSharesBg = false,
			previousOverhangs = false,
			nextOverhangs = false,
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
					nextOverhangs &&
						clsx(
							"-mb-16 sm:-mb-20 md:-mb-24 lg:-mb-36",
							"pb-32 sm:pb-40 md:pb-48 lg:pb-80"
						),
					previousOverhangs &&
						clsx(
							"-mt-16 sm:-mt-20 md:-mt-24 lg:-mt-36",
							"pt-32 sm:pt-40 md:pt-48 lg:pt-80"
						),
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
