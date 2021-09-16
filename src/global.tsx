/**
 * This module is imported in the following files:
 *
 * - /gatsby-browser.js
 * - /gatsby-ssr.js
 *
 * All exports are re-exported in the gatsby-* files allowing access to the
 * Gatsby Browser and SSR APIs.
 *
 * @see https://www.gatsbyjs.org/docs/browser-apis/
 * @see https://www.gatsbyjs.org/docs/ssr-apis/
 */

import * as React from "react"
import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews"
import { LazyMotion, domMax } from "framer-motion"

import "@fontsource/work-sans/variable.css"
import "tailwindcss/tailwind.css"
import "gatsby-plugin-prismic-previews/dist/styles.css"
import "./styles/global.css"

export const GlobalProviders: React.FC = ({ children }) => {
	return (
		<LazyMotion strict features={domMax}>
			<PrismicPreviewProvider>{children}</PrismicPreviewProvider>
		</LazyMotion>
	)
}
