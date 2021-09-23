import * as React from "react"
import clsx from "clsx"
import { Link, LinkProps } from "./Link"
import { GetVariants, variantFnFactory } from "../lib/variants"

const buttonVariants = variantFnFactory({
	base: clsx(
		"inline-flex items-center justify-center",
		"py-4 px-9 md:px-11 lg:py-6",
		"border border-transparent",
		"rounded-full",
		"transition duration-250",
		"focus:ring focus:outline-none",
		"hover:bg-transparent"
	),
	variants: {
		color: {
			yellow: clsx("bg-yellow-50 text-black", "hover:border-yellow-50"),
			blue: clsx("bg-blue-31 text-black", "hover:border-blue-31"),
		},
	},
	defaultVariants: {
		color: "yellow",
	},
})
export type ButtonVariants = GetVariants<typeof buttonVariants>

const innerClasses = clsx(
	"tracking-caps uppercase font-sansExt",
	"text-13 sm:text-14 md:text-15",
	"leading-1_5"
)

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & ButtonVariants

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ color, children, className, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={clsx(buttonVariants({ color }), className)}
				{...props}
			>
				<div className={innerClasses}>{children}</div>
			</button>
		)
	}
)
Button.displayName = "Button"

type ButtonLinkProps = LinkProps & ButtonVariants

export const ButtonLink = ({
	color,
	children,
	className,
	...props
}: ButtonLinkProps) => {
	return (
		<Link className={clsx(buttonVariants({ color }), className)} {...props}>
			<div className={innerClasses}>{children}</div>
		</Link>
	)
}
