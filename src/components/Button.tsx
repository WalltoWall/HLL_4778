import * as React from "react"
import clsx from "clsx"
import { Link, LinkProps } from "./Link"

const variants = {
	filled: {
		bg: "bg-yellow-50 hover:bg-transparent focus:bg-transparent",
		color: "text-black",
		border:
			"border border-transparent hover:border-yellow-50 focus:border-yellow-50",
	},
}

export type ButtonVariant = keyof typeof variants

function getButtonClasses(variant: ButtonVariant): string {
	const variantStyles = variants[variant]

	return clsx(
		"inline-flex items-center justify-center",
		"rounded-full",
		"py-4 px-9 md:px-11 lg:py-6",
		"focus:ring focus:outline-none",
		"transition duration-250",
		variantStyles.bg,
		variantStyles.color,
		variantStyles.border
	)
}

interface Props extends React.ComponentPropsWithoutRef<"button"> {
	variant?: ButtonVariant
}

const innerClasses = clsx(
	"tracking-caps uppercase font-sansExt",
	"text-13 sm:text-14 md:text-15",
	"leading-1_5"
)

export const Button = React.forwardRef<HTMLButtonElement, Props>(
	({ variant = "filled", children, className, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={clsx(getButtonClasses(variant), className)}
				{...props}
			>
				<div className={innerClasses}>{children}</div>
			</button>
		)
	}
)

Button.displayName = "Button"

interface ButtonLinkProps extends LinkProps {
	variant: ButtonVariant
}

export const ButtonLink = ({
	variant,
	children,
	className,
	...props
}: ButtonLinkProps) => {
	return (
		<Link className={clsx(getButtonClasses(variant), className)} {...props}>
			<div className={innerClasses}>{children}</div>
		</Link>
	)
}
