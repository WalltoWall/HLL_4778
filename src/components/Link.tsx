import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import { isInternal } from "@walltowall/helpers"
import clsx from "clsx"

export type LinkProps = React.ComponentPropsWithoutRef<"a">

export const Link = ({ href, className, ...props }: LinkProps) => {
	const linkProps = {
		className: clsx(className, "focus:ring"),
		...props,
	}

	if (!href) return <a {...linkProps} />
	if (!isInternal(href))
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer nofollow"
				{...linkProps}
			/>
		)

	return <GatsbyLink to={href} {...linkProps} />
}
