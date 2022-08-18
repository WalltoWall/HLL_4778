import * as React from "react"
import clsx from "clsx"
import { UnstyledButton } from "./UnstyledButton"

const Line = ({
	className,
	...props
}: React.ComponentPropsWithoutRef<"div">) => (
	<div
		className={clsx("bg-beige-92 w-[30px] h-[3px] rounded-full", className)}
		{...props}
	/>
)

interface Props extends React.ComponentPropsWithoutRef<"button"> {
	isOpen: boolean
}

export const MenuButton = React.forwardRef<HTMLButtonElement, Props>(
	({ className, children, isOpen, ...props }, ref) => {
		return (
			<UnstyledButton
				ref={ref}
				className={clsx("grid gap-y-[10px]", "focus:ring", className)}
				{...props}
			>
				<Line
					className={clsx(
						isOpen ? "translate-y-[6px] -rotate-45" : "translate-y-0 rotate-0"
					)}
				/>
				<Line
					className={clsx(
						isOpen ? "-translate-y-[6px] rotate-45" : "translate-y-0 rotate-0"
					)}
				/>

				{children}
			</UnstyledButton>
		)
	}
)

MenuButton.displayName = "MenuButton"
