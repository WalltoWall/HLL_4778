import * as React from "react"

import { usePrismicPrimaryNavigation } from "../../hooks/usePrismicPrimaryNavigation"
import { DesktopMenuLink } from "./DesktopMenuLink"

export const DesktopMenu = () => {
	const [isFocusedIdx, setIsFocusedIdx] = React.useState<number | undefined>(
		undefined
	)
	const navigation = usePrismicPrimaryNavigation()

	return (
		<nav className="hidden lg:flex text-beige-92 space-x-11">
			{navigation.items.map((item, idx) => {
				const focus = () => setIsFocusedIdx(idx)
				const unFocus = () => setIsFocusedIdx(undefined)

				const isFocused = isFocusedIdx === idx

				return (
					<DesktopMenuLink
						key={`destkopMenu-${idx}`}
						href={item.href}
						isFocused={isFocused}
						onMouseEnter={focus}
						onMouseLeave={unFocus}
						onFocus={focus}
						onBlur={unFocus}
					>
						{item.label}
					</DesktopMenuLink>
				)
			})}
		</nav>
	)
}
