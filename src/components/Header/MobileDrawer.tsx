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
import { delay } from "../../lib/delay"
import { extractAnchor } from "@walltowall/helpers"

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
	async function manuallyScrollIfHomePageAnchor(
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) {
		// If we're on the home page, we need to manually close our mobile menu and
		// scroll to the approopriate anchor link since Radix's Dialog component
		// places a scroll lock on the <body> tag.
		if (location.pathname !== "/" || !href) return

		event.preventDefault()

		// First, we need to close our menu which will remove the scroll lock from
		// the <body> tag.
		toggleMenu()

		// This is kind of hacky, but we need to wait for the next tick of the event
		// loop so we can ensure that the menu is closed and the scroll lock has
		// been removed.
		await delay(10)

		const anchorId = extractAnchor(href)
		if (!anchorId) return

		// Setting location.hash will scroll us to the appropriate anchor link just
		// as if we clicked on it normally. History will be automatically updated
		// just as the user would expect.
		location.hash = anchorId
	}

	return (
		<Link
			href={href}
			className={clsx(
				"text-52 font-serif leading-1 text-beige-92 block",
				className
			)}
			onClick={manuallyScrollIfHomePageAnchor}
			{...props}
		>
			{children}
		</Link>
	)
}

interface Props {
	toggleMenu: () => void
	isOpen: boolean
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
		</Dialog.Content>
	)
}
