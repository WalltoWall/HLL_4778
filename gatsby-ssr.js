import React from "react"
import { GlobalProviders } from "./src/global"
import "./src/global"

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
	setHtmlAttributes({ lang: "en" })
	setHeadComponents([
		<link
			rel="stylesheet"
			href="https://use.typekit.net/bry3kbj.css"
			key="fonts"
		/>,
	])
}

export const wrapRootElement = ({ element }) => (
	<GlobalProviders>{element}</GlobalProviders>
)
