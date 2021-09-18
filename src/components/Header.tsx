import * as React from "react"
import clsx from "clsx"
import { m, AnimateSharedLayout, AnimatePresence } from "framer-motion"

import { MenuButton } from "./MenuButton"
import { VisuallyHidden } from "./VisuallyHidden"
import { Link, LinkProps } from "./Link"
import { useIsDesktop } from "../hooks/useMediaQuery"
import { usePrismicPrimaryNavigation } from "../hooks/usePrismicPrimaryNavigation"

import logoUrl from "../assets/logo.png"
import { BoundedBox } from "./BoundedBox"

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

interface DesktopMenuLinkProps extends LinkProps {
	isFocused?: boolean
}

const desktopUnderlineVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
}

const DesktopMenuLink = ({
	className,
	children,
	isFocused = false,
	...props
}: DesktopMenuLinkProps) => {
	return (
		<Link className={clsx(className, "block relative")} {...props}>
			<AnimatePresence>
				{isFocused && (
					<m.div
						key="underline"
						layoutId="underline"
						variants={desktopUnderlineVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
						className="absolute inset-x-0 bottom-[-6px] h-[2px] bg-beige-92 rounded"
					/>
				)}
			</AnimatePresence>

			<div className="uppercase text-16 leading-1_15 tracking-caps font-sansExt">
				{children}
			</div>
		</Link>
	)
}

const DesktopMenu = () => {
	const [isFocusedIdx, setIsFocusedIdx] = React.useState<number | undefined>(
		undefined
	)
	const isDesktop = useIsDesktop()
	const navigation = usePrismicPrimaryNavigation()

	if (!isDesktop) return null

	return (
		<AnimateSharedLayout>
			<nav className="hidden lg:flex text-beige-92 space-x-11">
				{navigation.items.map((item, idx) => {
					const focus = () => setIsFocusedIdx(idx)
					const unFocus = () => setIsFocusedIdx(undefined)

					const isFocused = isFocusedIdx === idx

					return (
						<DesktopMenuLink
							key={`destkopMenu-${idx}`}
							href={item.href}
							isFocused={isFocused}
							onMouseEnter={focus}
							onMouseLeave={unFocus}
							onFocus={focus}
							onBlur={unFocus}
						>
							{item.label}
						</DesktopMenuLink>
					)
				})}
			</nav>
		</AnimateSharedLayout>
	)
}

export const Header = () => {
	return (
		<BoundedBox
			tag="header"
			variant="header"
			width="wide"
			className={clsx("absolute top-0 inset-x-0", "z-20")}
		>
			<div className="flex items-center justify-between space-x-4">
				<Link className="w-18 md:w-24 lg:w-32 xl:w-40" href="/">
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
			</div>
		</BoundedBox>
	)
}
