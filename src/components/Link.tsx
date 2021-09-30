import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import { useLocation } from "@reach/router"
import { isInternal, isAnchorOnly, extractAnchor } from "@walltowall/helpers"
import clsx from "clsx"

export type LinkProps = React.ComponentPropsWithoutRef<"a">

export const Link = ({ href, className, ...props }: LinkProps) => {
	const location = useLocation()
	const linkProps = {
		className: clsx(
			className,
			"focus:ring focus:outline-none",
			"transition duration-250 ease-out"
		),
		...props,
	}

	if (!href) return <a {...linkProps} />
	if (isAnchorOnly(href)) {
		let anchorHref = extractAnchor(href)

		if (location.pathname !== "/") {
			anchorHref = `/${anchorHref}`
		}

		return <a href={anchorHref} {...linkProps} />
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
