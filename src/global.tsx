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
import { LazyMotion, domMax } from "framer-motion"
import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews"

import "@fontsource/work-sans/variable.css"
import "tailwindcss/tailwind.css"
import "gatsby-plugin-prismic-previews/dist/styles.css"
import "./styles/global.css"

export const GlobalProviders: React.FC = ({ children }) => {
	return (
		<PrismicPreviewProvider>
			<LazyMotion strict features={domMax}>
				{children}
			</LazyMotion>
		</PrismicPreviewProvider>
	)
}
