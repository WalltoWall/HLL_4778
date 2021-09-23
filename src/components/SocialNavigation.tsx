import clsx from "clsx"
import * as React from "react"

import { VisuallyHidden } from "./VisuallyHidden"
import { Link } from "./Link"
import { usePrismicSettings } from "../hooks/usePrismicSettings"

import { FacebookIcon } from "./FacebookIcon"
import { InstagramIcon } from "./InstagramIcon"
import { YoutubeIcon } from "./YoutubeIcon"
import { TwitterIcon } from "./TwitterIcon"

interface SocialIconLinkProps {
	href: string
	children: React.ReactNode
	label: string
}

const SocialIconLink = ({ href, children, label }: SocialIconLinkProps) => {
	return (
		<Link
			href={href}
			className={clsx(
				"w-10 h-10 lg:w-14 lg:h-14",
				"text-beige-92 hover:text-purple-57 focus:text-purple-57"
			)}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</Link>
	)
}

export const SocialNavigation = ({
	className,
	...props
}: React.ComponentPropsWithoutRef<"nav">) => {
	const settings = usePrismicSettings()

	return (
		<nav
			className={clsx("flex items-center space-x-3", className)}
			aria-label="Social Media Navigation"
			{...props}
		>
			{settings.instagramURL && (
				<SocialIconLink
					href={settings.instagramURL}
					label="Go to Instagram profile"
				>
					<InstagramIcon />
				</SocialIconLink>
			)}

			{settings.facebookURL && (
				<SocialIconLink
					href={settings.facebookURL}
					label="Go to Facebook profile"
				>
					<FacebookIcon />
				</SocialIconLink>
			)}

			{settings.youtubeURL && (
				<SocialIconLink
					href={settings.youtubeURL}
					label="Go to YouTube profile"
				>
					<YoutubeIcon />
				</SocialIconLink>
			)}

			{settings.twitterURL && (
				<SocialIconLink
					href={settings.twitterURL}
					label="Go to Twitter profile"
				>
					<TwitterIcon />
				</SocialIconLink>
			)}
		</nav>
	)
}
