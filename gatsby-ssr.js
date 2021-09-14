import React from "react"
import { HeadProvider } from "react-head"
import { GlobalProviders } from "./src/global"

import "./src/global"

let headTags = []

export const onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents(headTags)
}

export const wrapRootElement = ({ element }) => {
	return (
		<GlobalProviders>
			<HeadProvider headTags={headTags}>{element}</HeadProvider>
		</GlobalProviders>
	)
}
