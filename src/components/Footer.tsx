import * as React from "react"
import clsx from "clsx"

import { usePrismicSettings } from "../hooks/usePrismicSettings"
import { BoundedBox } from "./BoundedBox"

import { Image } from "./Image"
import { Link } from "./Link"

import { FacebookIcon } from "./FacebookIcon"
import { InstagramIcon } from "./InstagramIcon"
import { YoutubeIcon } from "./YoutubeIcon"
import { TwitterIcon } from "./TwitterIcon"

import hllLogoUrl from "../assets/hll-logo.png"
import * as styles from "./Footer.module.css"
import { VisuallyHidden } from "./VisuallyHidden"
import { HTMLContent } from "./HTMLContent"

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
				"w-8 h-8 md:w-11 md:h-11 lg:w-14 lg:h-14",
				"text-beige-92 hover:text-purple-57 focus:text-purple-57"
			)}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</Link>
	)
}

export const Footer = () => {
	const settings = usePrismicSettings()

	return (
		<BoundedBox
			tag="footer"
			className="bg-gray-13 text-beige-92"
			variant="footer"
		>
			<div
				className={clsx(
					"grid",
					"gap-y-7",
					"lg:grid-cols-[1fr,auto] lg:gap-y-12"
				)}
			>
				<Link href="/" className="block w-30 md:w-45 lg:w-63">
					<Image
						src={hllLogoUrl}
						alt="Hawaii LGBT Legacy Foundation"
						width={348}
						height={144}
					/>
				</Link>

				<nav
					className="flex items-center space-x-3 lg:self-center"
					aria-label="Social Media Navigation"
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

				<div className="space-y-5 lg:contents lg:space-y-0">
					{settings.siteCopyrightHTML && (
						<HTMLContent
							html={settings.siteCopyrightHTML}
							htmlClassName={styles.footerHtml}
						/>
					)}

					<p className="font-sans font-light text-13 md:text-16 lg:text-18 leading-1_3">
						Website design and development <br /> by{" "}
						<Link
							href="https://walltowall.com"
							className="font-normal underline focus:text-purple-57 hover:text-purple-57"
						>
							Wall-to-Wall Studios
						</Link>
					</p>
				</div>
			</div>
		</BoundedBox>
	)
}
