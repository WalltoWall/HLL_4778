import * as React from "react"
import clsx from "clsx"
import * as Dialog from "@radix-ui/react-dialog"

import { BoundedBox } from "../BoundedBox"
import { MenuButton } from "../MenuButton"
import { VisuallyHidden } from "../VisuallyHidden"
import { Logo } from "./Logo"
import { Link, LinkProps } from "../Link"
import { usePrismicPrimaryNavigation } from "../../hooks/usePrismicPrimaryNavigation"
import { SocialNavigation } from "../SocialNavigation"
import { Gradient } from "../Gradient"

interface Props {
	toggleMenu: () => void
	isOpen: boolean
}

const MobileDrawerLink = ({
	href,
	children,
	className,
	...props
}: LinkProps) => {
	return (
		<Link
			href={href}
			className={clsx(
				"text-52 font-serif leading-1 text-beige-92 block",
				className
			)}
			{...props}
		>
			{children}
		</Link>
	)
}

export const MobileDrawer = ({ toggleMenu, isOpen }: Props) => {
	const navigation = usePrismicPrimaryNavigation()

	return (
		<Dialog.Content
			className="fixed inset-0 flex flex-col lg:hidden bg-gradient-to-b from-purple-57 to-blue-31"
			aria-label="Mobile navigation menu"
		>
			<Gradient
				className="absolute inset-0 pointer-events-none"
				id="mobile-menu-gradient"
			/>

			<BoundedBox variant="header" width="wide" className="flex-grow isolate">
				<div className="flex items-center justify-between mb-15">
					<Logo />

					<Dialog.Close asChild>
						<MenuButton
							onClick={toggleMenu}
							className="lg:hidden"
							isOpen={isOpen}
						>
							<VisuallyHidden>
								{isOpen ? "Close navigation menu" : "Open navigation menu"}
							</VisuallyHidden>
						</MenuButton>
					</Dialog.Close>
				</div>

				<Dialog.Description className="sr-only">
					Honolulu Pride navigation menu
				</Dialog.Description>

				<nav className="flex flex-col items-start flex-grow space-y-8">
					{navigation.items.map((item, idx) => (
						<MobileDrawerLink key={`mobileDrawer-${idx}`} href={item.href}>
							{item.label}
						</MobileDrawerLink>
					))}
				</nav>

				<SocialNavigation className="self-center mt-auto" />
			</BoundedBox>
		</Dialog.Content>
	)
}
