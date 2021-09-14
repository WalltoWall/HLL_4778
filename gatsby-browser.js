import React from "react"
import { HeadProvider } from "react-head"
import { GlobalProviders } from "./src/global"
import "./src/global"

export const wrapRootElement = ({ element }) => {
	return (
		<GlobalProviders>
			<HeadProvider>{element}</HeadProvider>
		</GlobalProviders>
	)
}
