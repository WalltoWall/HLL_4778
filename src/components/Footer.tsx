import * as React from "react"
import clsx from "clsx"

import { usePrismicSettings } from "../hooks/usePrismicSettings"
import { BoundedBox } from "./BoundedBox"

import { Image } from "./Image"
import { Link } from "./Link"

import hllLogoUrl from "../assets/hll-logo.png"
import { HTMLContent } from "./HTMLContent"
import { SocialNavigation } from "./SocialNavigation"

import * as styles from "./Footer.module.css"

interface FooterProps {
	lastOverhangs?: boolean
}

export const Footer = ({ lastOverhangs = false }: FooterProps) => {
	const settings = usePrismicSettings()

	return (
		<BoundedBox
			tag="footer"
			className={clsx(
				"bg-gray-13 text-beige-92",
				lastOverhangs && "pt-43 md:pt-58 lg:pt-99",
				lastOverhangs && "-mt-16 sm:-mt-20 md:-mt-24 lg:-mt-36",
				"!pb-8"
			)}
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

				<SocialNavigation className="lg:self-center" />

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
