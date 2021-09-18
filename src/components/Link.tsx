import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import { isInternal, isAnchorOnly, extractAnchor } from "@walltowall/helpers"
import clsx from "clsx"

export type LinkProps = React.ComponentPropsWithoutRef<"a">

export const Link = ({ href, className, ...props }: LinkProps) => {
	const linkProps = {
		className: clsx(className, "focus:ring focus:outline-none"),
		...props,
	}

	if (!href) return <a {...linkProps} />
	if (isAnchorOnly(href)) {
		return <a href={extractAnchor(href)} {...linkProps} />
	}
	if (!isInternal(href)) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer nofollow"
				{...linkProps}
			/>
		)
	}

	return <GatsbyLink to={href} {...linkProps} />
}
