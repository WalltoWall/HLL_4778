import * as React from "react"
import clsx from "clsx"

import { BoundedBox } from "../BoundedBox"
import { MenuButton } from "../MenuButton"
import { VisuallyHidden } from "../VisuallyHidden"
import { Logo } from "./Logo"
import { Link, LinkProps } from "../Link"
import { usePrismicPrimaryNavigation } from "../../hooks/usePrismicPrimaryNavigation"
import { SocialNavigation } from "../SocialNavigation"
import { Gradient } from "../Gradient"

interface MobileDrawerLinkProps extends LinkProps {
	toggleMenu: () => void
}

const MobileDrawerLink = ({
	href,
	children,
	className,
	toggleMenu,
	...props
}: MobileDrawerLinkProps) => {
	return (
		<Link
			href={href}
			className={clsx(
				"text-52 font-serif leading-1 text-beige-92 block",
				className
			)}
			onClick={toggleMenu}
			{...props}
		>
			{children}
		</Link>
	)
}

interface Props {
	toggleMenu: () => void
}

export const MobileDrawer = ({ toggleMenu }: Props) => {
	const navigation = usePrismicPrimaryNavigation()

	return (
		<div
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

					<MenuButton onClick={toggleMenu} className="lg:hidden" isOpen>
						<VisuallyHidden>Close Navigation Menu</VisuallyHidden>
					</MenuButton>
				</div>

				<nav className="flex flex-col items-start flex-grow space-y-8">
					{navigation.items.map((item, idx) => (
						<MobileDrawerLink
							key={`mobileDrawer-${idx}`}
							href={item.href}
							toggleMenu={toggleMenu}
						>
							{item.label}
						</MobileDrawerLink>
					))}
				</nav>

				<SocialNavigation className="self-center mt-auto" />
			</BoundedBox>
		</div>
	)
}
