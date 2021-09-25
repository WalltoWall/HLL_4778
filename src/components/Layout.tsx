import * as React from "react"
import { MediaQueryProvider } from "../hooks/useMediaQuery"

import { Footer } from "./Footer"
import { Header } from "./Header"
import { MobileMenuProvider } from "./Header/MobileMenuProvider"

interface LayoutProps {
	children: React.ReactNode
	lastOverhangs?: boolean
}

const LayoutNodes = React.memo(
	({ children, lastOverhangs = false }: LayoutProps) => {
		return (
			<div className="relative">
				<Header />
				<main className="relative">{children}</main>
				<Footer lastOverhangs={lastOverhangs} />
			</div>
		)
	}
)

LayoutNodes.displayName = "LayoutNodes"

export const Layout = ({ children, lastOverhangs }: LayoutProps) => {
	return (
		<MediaQueryProvider>
			<MobileMenuProvider>
				<LayoutNodes lastOverhangs={lastOverhangs}>{children}</LayoutNodes>
			</MobileMenuProvider>
		</MediaQueryProvider>
	)
}
