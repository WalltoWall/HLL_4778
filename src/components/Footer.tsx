import * as React from "react"

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

interface SocialIconLinkProps {
	href: string
	children: React.ReactNode
}

const SocialIconLink = ({ href, children }: SocialIconLinkProps) => {
	return (
		<Link href={href} className="w-8 h-8 text-beige-92">
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
			<div className="space-y-7">
				<Link href="/" className="block w-30">
					<Image
						src={hllLogoUrl}
						alt="Hawaii LGBT Legacy Foundation"
						width={348}
						height={144}
					/>
				</Link>

				<nav
					className="flex items-center space-x-3"
					aria-label="Social Media Navigation"
				>
					<SocialIconLink href="/">
						<InstagramIcon />
					</SocialIconLink>

					<SocialIconLink href="/">
						<FacebookIcon />
					</SocialIconLink>

					<SocialIconLink href="/">
						<YoutubeIcon />
					</SocialIconLink>

					<SocialIconLink href="/">
						<TwitterIcon />
					</SocialIconLink>
				</nav>

				<div className="space-y-5">
					{settings.siteCopyrightHTML && (
						<div
							className={styles.footerHtml}
							dangerouslySetInnerHTML={{ __html: settings.siteCopyrightHTML }}
						/>
					)}
					<p className="font-sans font-light text-13 leading-1_15">
						Website design and development <br /> by{" "}
						<Link
							href="https://walltowall.com"
							className="font-normal underline"
						>
							Wall-to-Wall Studios
						</Link>
					</p>
				</div>
			</div>
		</BoundedBox>
	)
}
