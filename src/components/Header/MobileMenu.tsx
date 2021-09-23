import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"

import { useIsDesktop } from "../../hooks/useMediaQuery"
import { MenuButton } from "../MenuButton"
import { VisuallyHidden } from "../VisuallyHidden"
import { MobileDrawer } from "./MobileDrawer"
import { useMobileMenu } from "./MobileMenuProvider"

export const MobileMenu = () => {
	const { isOpen, setIsOpen } = useMobileMenu()
	const isDesktop = useIsDesktop()

	function toggleMenu() {
		setIsOpen((prev) => !prev)
	}

	if (isDesktop) return null

	return (
		<Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
			<Dialog.Trigger asChild>
				<MenuButton onClick={toggleMenu} className="lg:hidden" isOpen={isOpen}>
					<VisuallyHidden>
						{isOpen ? "Close navigation menu" : "Open navigation menu"}
					</VisuallyHidden>
				</MenuButton>
			</Dialog.Trigger>

			<MobileDrawer toggleMenu={toggleMenu} isOpen={isOpen} />
		</Dialog.Root>
	)
}
