import * as React from "react"
import clsx from "clsx"
import logoUrl from "../assets/logo.png"
import { MenuButton } from "./MenuButton"
import { VisuallyHidden } from "./VisuallyHidden"
import { Link } from "./Link"
import { useIsDesktop } from "../hooks/useMediaQuery"
import { usePrismicPrimaryNavigation } from "../hooks/usePrismicPrimaryNavigation"

const MobileMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false)
	const isDesktop = useIsDesktop()

	function toggleMenu() {
		setIsMenuOpen((prev) => !prev)
	}

	if (isDesktop) return null

	return (
		<MenuButton onClick={toggleMenu} className="lg:hidden">
			<VisuallyHidden>
				{isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
			</VisuallyHidden>
		</MenuButton>
	)
}

const DesktopMenu = () => {
	const isDesktop = useIsDesktop()
	const navigation = usePrismicPrimaryNavigation()

	if (!isDesktop) return null

	return (
		<nav className="hidden lg:flex text-beige-92 space-x-11">
			{navigation.items.map((item, idx) => (
				<Link
					key={`destkopMenu-${idx}`}
					href={item.href}
					className="block uppercase font-sansExt text-16 leading-1_15 tracking-caps"
				>
					{item.label}
				</Link>
			))}
		</nav>
	)
}

export const Header = () => {
	return (
		<header
			className={clsx(
				"absolute top-0 inset-x-0",
				"px-5 lg:px-8",
				"py-6 md:py-7 lg:py-8",
				"flex items-center justify-between space-x-4",
				"z-20"
			)}
		>
			<Link className="w-18 md:w-24 lg:w-32" href="/">
				<VisuallyHidden>Honolulu Pride</VisuallyHidden>
				<img
					src={logoUrl}
					alt="Honolulu Pride"
					loading="lazy"
					decoding="async"
				/>
			</Link>

			<MobileMenu />
			<DesktopMenu />
		</header>
	)
}
