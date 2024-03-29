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
import { LazyMotion } from "framer-motion"
import {
	componentResolverFromMap,
	PrismicPreviewProvider,
} from "gatsby-plugin-prismic-previews"
import { PRISMIC_REPOSITORY_NAME } from "./constants"
import { linkResolver } from "./prismic"

import PageTemplate from "./templates/page"
import EventTemplate from "./templates/event"

import "@fontsource/work-sans/variable.css"
import "tailwindcss/tailwind.css"
import "./styles/global.css"

interface Props {
	children: React.ReactNode
}

const loadFeatures = () =>
	import("./lib/framerFeatures").then((res) => res.default)

export const GlobalProviders = ({ children }: Props) => {
	return (
		<PrismicPreviewProvider
			repositoryConfigs={[
				{
					repositoryName: PRISMIC_REPOSITORY_NAME,
					linkResolver,
					componentResolver: componentResolverFromMap({
						page: PageTemplate,
						event: EventTemplate,
					}),
				},
			]}
		>
			<LazyMotion strict features={loadFeatures}>
				{children}
			</LazyMotion>
		</PrismicPreviewProvider>
	)
}
