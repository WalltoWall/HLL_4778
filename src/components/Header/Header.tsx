import * as React from "react"
import clsx from "clsx"

import { VisuallyHidden } from "../VisuallyHidden"
import { Link } from "../Link"
import { BoundedBox } from "../BoundedBox"

import logoUrl from "../../assets/logo.png"
import { MobileMenu } from "./MobileMenu"
import { DesktopMenu } from "./DesktopMenu"

export const Header = () => {
	return (
		<BoundedBox
			tag="header"
			variant="header"
			width="wide"
			className={clsx("absolute top-0 inset-x-0", "z-20")}
		>
			<div className="flex items-center justify-between space-x-4">
				<Link className="w-18 md:w-24 lg:w-32 xl:w-40" href="/">
					<VisuallyHidden>Honolulu Pride</VisuallyHidden>
					<img
						src={logoUrl}
						alt="Honolulu Pride"
						loading="lazy"
						decoding="async"
					/>
				</Link>

				<MobileMenu />

				<DesktopMenu />
			</div>
		</BoundedBox>
	)
}
