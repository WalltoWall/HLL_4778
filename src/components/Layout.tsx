import * as React from "react"

import { Footer } from "./Footer"
import { Header } from "./Header"
import { MobileMenuProvider } from "./Header/MobileMenuProvider"
import { MediaQueryProvider } from "../hooks/useMediaQuery"
import { UserProvider } from "../hooks/useUser"
import { NotificationBar } from "./NotificationBar"

interface LayoutProps {
	children: React.ReactNode
	lastOverhangs?: boolean
}

const LayoutNodes = React.memo(
	({ children, lastOverhangs = false }: LayoutProps) => {
		return (
			<>
				<NotificationBar />
				<div className="relative">
					<Header />
					<main className="relative">{children}</main>
					<Footer lastOverhangs={lastOverhangs} />
				</div>
			</>
		)
	}
)
LayoutNodes.displayName = "LayoutNodes"

export const Layout = ({ children, lastOverhangs }: LayoutProps) => {
	return (
		<MediaQueryProvider>
			<MobileMenuProvider>
				<UserProvider>
					<LayoutNodes lastOverhangs={lastOverhangs}>{children}</LayoutNodes>
				</UserProvider>
			</MobileMenuProvider>
		</MediaQueryProvider>
	)
}
