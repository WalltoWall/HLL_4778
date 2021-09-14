import * as React from "react"
import clsx from "clsx"
import Image from "next/image"
import logoUrl from "../assets/logo.png"
import { MenuButton } from "./MenuButton"
import { VisuallyHidden } from "./VisuallyHidden"

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false)

	function toggleMenu() {
		setIsMenuOpen((prev) => !prev)
	}

	return (
		<header
			className={clsx(
				"absolute top-0 inset-x-0",
				"px-5 py-6",
				"z-10",
				"flex justify-between items-center space-x-4"
			)}
		>
			<div className="w-18">
				<VisuallyHidden>Honolulu Pride</VisuallyHidden>
				<Image src={logoUrl} alt="Honolulu Pride" />
			</div>

			<MenuButton onClick={toggleMenu}>
				<VisuallyHidden>
					{isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
				</VisuallyHidden>
			</MenuButton>
		</header>
	)
}
