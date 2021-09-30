import * as React from "react"
import clsx from "clsx"

import * as styles from "./HTMLContent.module.css"

const variants = {
	default: styles.htmlContent,
	md: styles.htmlContentMedium,
	lg: styles.htmlContentLarge,
}

interface Props extends React.ComponentPropsWithoutRef<"div"> {
	tag?: keyof JSX.IntrinsicElements
	html: string
	htmlClassName?: string
	variant?: keyof typeof variants
}

export const HTMLContent = React.forwardRef<HTMLElement, Props>(
	(
		{
			tag: Comp = "div",
			html,
			className,
			htmlClassName,
			variant = "default",
			...props
		},
		ref
	) => {
		const variantClassName = variants[variant]

		return (
			//@ts-expect-error - Complex polymorphic type
			<Comp
				//@ts-expect-error - Complex polymorphic type
				ref={ref}
				className={clsx(
					className,
					htmlClassName
						? htmlClassName
						: clsx(styles.htmlContentBase, variantClassName)
				)}
				dangerouslySetInnerHTML={{ __html: html }}
				{...props}
			/>
		)
	}
)

HTMLContent.displayName = "HTMLContent"
