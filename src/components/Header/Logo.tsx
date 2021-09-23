import * as React from "react"

import { Link } from "../Link"
import { VisuallyHidden } from "../VisuallyHidden"

import logoUrl from "../../assets/logo.png"

export const Logo = () => {
	return (
		<Link className="w-18 md:w-24 lg:w-32 xl:w-40" href="/">
			<VisuallyHidden>Honolulu Pride</VisuallyHidden>
			<img src={logoUrl} alt="Honolulu Pride" loading="lazy" decoding="async" />
		</Link>
	)
}
