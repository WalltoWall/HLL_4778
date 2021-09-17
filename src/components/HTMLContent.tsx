import * as React from "react"
import clsx from "clsx"
import * as styles from "./HTMLContent.module.css"

interface Props extends React.ComponentPropsWithoutRef<"div"> {
	tag?: keyof JSX.IntrinsicElements
	html: string
	htmlClassName?: string
}

export const HTMLContent = React.forwardRef<HTMLElement, Props>(
	({ tag: Comp = "div", html, className, htmlClassName, ...props }, ref) => {
		return (
			//@ts-expect-error - Complex polymorphic type
			<Comp
				//@ts-expect-error - Complex polymorphic type
				ref={ref}
				className={clsx(
					className,
					htmlClassName ? htmlClassName : styles.htmlContent
				)}
				dangerouslySetInnerHTML={{ __html: html }}
				{...props}
			/>
		)
	}
)

HTMLContent.displayName = "HTMLContent"
