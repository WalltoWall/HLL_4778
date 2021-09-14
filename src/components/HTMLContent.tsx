import clsx from "clsx"
import React from "react"
import styles from "./HTMLContent.module.css"

interface Props extends React.ComponentPropsWithoutRef<"div"> {
	tag?: keyof JSX.IntrinsicElements
	html: string
}

export const HTMLContent = React.forwardRef<HTMLElement, Props>(
	({ tag: Comp = "div", html, className, ...props }) => {
		return (
			//@ts-expect-error - Complex polymorphic type
			<Comp
				className={clsx(className, styles.htmlContent)}
				dangerouslySetInnerHTML={{ __html: html }}
				{...props}
			/>
		)
	}
)

HTMLContent.displayName = "HTMLContent"
