import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"

import { useIsDesktop } from "../../hooks/useMediaQuery"
import { MenuButton } from "../MenuButton"
import { VisuallyHidden } from "../VisuallyHidden"
import { MobileDrawer } from "./MobileDrawer"

export const MobileMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false)
	const isDesktop = useIsDesktop()

	function toggleMenu() {
		setIsMenuOpen((prev) => !prev)
	}

	if (isDesktop) return null

	return (
		<Dialog.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
			<Dialog.Trigger asChild>
				<MenuButton
					onClick={toggleMenu}
					className="lg:hidden"
					isOpen={isMenuOpen}
				>
					<VisuallyHidden>
						{isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
					</VisuallyHidden>
				</MenuButton>
			</Dialog.Trigger>

			<MobileDrawer toggleMenu={toggleMenu} isOpen={isMenuOpen} />
		</Dialog.Root>
	)
}
