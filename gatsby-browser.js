import React from "react"
import { GlobalProviders } from "./src/global"
import "./src/global"

export const wrapRootElement = ({ element }) => (
	<GlobalProviders>{element}</GlobalProviders>
)
