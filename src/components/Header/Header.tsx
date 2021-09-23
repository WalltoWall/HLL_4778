import * as React from "react"
import clsx from "clsx"

import { BoundedBox } from "../BoundedBox"

import { MobileMenu } from "./MobileMenu"
import { DesktopMenu } from "./DesktopMenu"
import { Logo } from "./Logo"

export const Header = () => {
	return (
		<BoundedBox
			tag="header"
			variant="header"
			width="wide"
			className={clsx("absolute top-0 inset-x-0", "z-20")}
		>
			<div className="flex items-center justify-between">
				<Logo />
				<MobileMenu />
				<DesktopMenu />
			</div>
		</BoundedBox>
	)
}
