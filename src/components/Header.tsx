import * as React from "react"
import clsx from "clsx"
import logoUrl from "../assets/logo.png"
import { MenuButton } from "./MenuButton"
import { VisuallyHidden } from "./VisuallyHidden"
import { Link } from "./Link"

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
				"z-20",
				"flex justify-between items-center space-x-4"
			)}
		>
			<Link className="w-18" href="/">
				<VisuallyHidden>Honolulu Pride</VisuallyHidden>
				<img
					src={logoUrl}
					alt="Honolulu Pride"
					loading="lazy"
					decoding="async"
				/>
			</Link>

			<MenuButton onClick={toggleMenu}>
				<VisuallyHidden>
					{isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
				</VisuallyHidden>
			</MenuButton>
		</header>
	)
}
