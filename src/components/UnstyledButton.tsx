import * as React from "react"
import clsx from "clsx"

export type UnstyledButtonProps = React.ComponentPropsWithoutRef<"button">

export const UnstyledButton = React.forwardRef<
	HTMLButtonElement,
	UnstyledButtonProps
>(({ className, ...props }, ref) => {
	return (
		<button
			ref={ref}
			className={clsx(className, "focus:ring focus:outline-none")}
			{...props}
		/>
	)
})

UnstyledButton.displayName = "UnstyledButton"
