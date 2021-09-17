import * as React from "react"
import clsx from "clsx"
import { Link, LinkProps } from "./Link"

const variants = {
	filled: {
		bg: "bg-yellow-50",
		color: "text-black",
		border: "border border-transparent",
	},
	outline: {
		bg: "bg-transparent",
		color: "text-black",
		border: "border border-yellow-50",
	},
}

export type ButtonVariant = keyof typeof variants

function getButtonClasses(variant: ButtonVariant): string {
	const variantStyles = variants[variant]

	return clsx(
		"inline-flex items-center justify-center",
		"rounded-full",
		"py-4 px-9",
		"focus:ring",
		variantStyles.bg,
		variantStyles.color,
		variantStyles.border
	)
}

interface Props extends React.ComponentPropsWithoutRef<"button"> {
	variant: ButtonVariant
}

export const Button = React.forwardRef<HTMLButtonElement, Props>(
	({ variant, children, className, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={clsx(getButtonClasses(variant), className)}
				{...props}
			>
				<div className="tracking-[.14em] uppercase font-sansExt text-12 leading-1_5">
					{children}
				</div>
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
			<div className="tracking-[.14em] uppercase font-sansExt text-12 leading-1_5">
				{children}
			</div>
		</Link>
	)
}
