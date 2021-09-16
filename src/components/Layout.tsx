import * as React from "react"

import { Footer } from "./Footer"
import { Header } from "./Header"

interface LayoutProps {
	children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="relative">
			<Header />
			<main className="relative">{children}</main>
			<Footer />
		</div>
	)
}
