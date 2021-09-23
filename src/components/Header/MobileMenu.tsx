import * as React from "react"

import { useIsDesktop } from "../../hooks/useMediaQuery"
import { MenuButton } from "../MenuButton"
import { VisuallyHidden } from "../VisuallyHidden"

export const MobileMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false)
	const isDesktop = useIsDesktop()

	function toggleMenu() {
		setIsMenuOpen((prev) => !prev)
	}

	if (isDesktop) return null

	return (
		<MenuButton onClick={toggleMenu} className="lg:hidden" isOpen={isMenuOpen}>
			<VisuallyHidden>
				{isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
			</VisuallyHidden>
		</MenuButton>
	)
}
