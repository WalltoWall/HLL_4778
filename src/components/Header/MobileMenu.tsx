import * as React from "react"

import { MenuButton } from "../MenuButton"
import { VisuallyHidden } from "../VisuallyHidden"
import { MobileDrawer } from "./MobileDrawer"
import { useMobileMenu } from "./MobileMenuProvider"

export const MobileMenu = () => {
	const { isOpen, setIsOpen } = useMobileMenu()

	function toggleMenu() {
		setIsOpen((prev) => !prev)
	}

	return (
		<>
			<MenuButton onClick={toggleMenu} className="lg:hidden" isOpen={isOpen}>
				<VisuallyHidden>
					{isOpen ? "Close navigation menu" : "Open navigation menu"}
				</VisuallyHidden>
			</MenuButton>

			{isOpen && <MobileDrawer toggleMenu={toggleMenu} />}
		</>
	)
}
