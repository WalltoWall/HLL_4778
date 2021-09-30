import * as React from "react"
import clsx from "clsx"

export interface UnstyledButtonProps
	extends React.ComponentPropsWithoutRef<"button"> {
	withRing?: boolean
}

export const UnstyledButton = React.forwardRef<
	HTMLButtonElement,
	UnstyledButtonProps
>(({ className, withRing = true, ...props }, ref) => {
	return (
		<button
			ref={ref}
			className={clsx(className, withRing && "focus:ring focus:outline-none")}
			{...props}
		/>
	)
})

UnstyledButton.displayName = "UnstyledButton"
