import * as React from "react"

import { usePrismicSettings } from "../hooks/usePrismicSettings"
import { BoundedBox } from "./BoundedBox"

import hllLogoUrl from "../assets/hll-logo.png"
import * as styles from "./Footer.module.css"
import { Image } from "./Image"
import { Link } from "./Link"

export const Footer = () => {
	const settings = usePrismicSettings()

	return (
		<BoundedBox tag="footer" className="pt-12 pb-6 bg-gray-13 text-beige-92">
			<div className="space-y-8">
				<Link href="/" className="block w-30">
					<Image
						src={hllLogoUrl}
						alt="Hawaii LGBT Legacy Foundation"
						width={348}
						height={144}
					/>
				</Link>

				<div className="space-y-5">
					{settings.siteCopyrightHTML && (
						<div
							className={styles.footerHtml}
							dangerouslySetInnerHTML={{ __html: settings.siteCopyrightHTML }}
						/>
					)}
					<p className="font-sans font-light text-13 leading-1_15">
						Website design and development <br /> by Wall-to-Wall Studios
					</p>
				</div>
			</div>
		</BoundedBox>
	)
}
