import * as React from "react"
import clsx from "clsx"

export const Card = ({
	className,
	children,
	...props
}: React.ComponentPropsWithoutRef<"div">) => {
	return (
		<div
			className={clsx(
				"px-5 md:px-9 lg:px-14",
				"py-6 md:py-12 lg:py-18",
				className
			)}
			{...props}
		>
			{children}
		</div>
	)
}
