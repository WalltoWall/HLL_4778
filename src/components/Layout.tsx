import * as React from "react"
import { MediaQueryProvider } from "../hooks/useMediaQuery"

import { Footer } from "./Footer"
import { Header } from "./Header"
import { MobileMenuProvider } from "./Header/MobileMenuProvider"

interface LayoutProps {
	children: React.ReactNode
}

const LayoutNodes = React.memo(({ children }: LayoutProps) => {
	return (
		<div className="relative">
			<Header />
			<main className="relative">{children}</main>
			<Footer />
		</div>
	)
})

LayoutNodes.displayName = "LayoutNodes"

export const Layout = ({ children }: LayoutProps) => {
	return (
		<MediaQueryProvider>
			<MobileMenuProvider>
				<LayoutNodes>{children}</LayoutNodes>
			</MobileMenuProvider>
		</MediaQueryProvider>
	)
}
