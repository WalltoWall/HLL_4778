import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"

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
