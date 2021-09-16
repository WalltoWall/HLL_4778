import * as React from "react"
import { LazyMotion } from "framer-motion"

import { Footer } from "./Footer"
import { Header } from "./Header"

interface LayoutProps {
	children: React.ReactNode
}

async function loadFeatures() {
	const mod = await import("../lib/framerFeatures")

	return mod.default
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<LazyMotion features={loadFeatures} strict>
			<div className="relative">
				<Header />
				<main className="relative">{children}</main>
				<Footer />
			</div>
		</LazyMotion>
	)
}
