import * as React from "react"
import { useMedia } from "./useMedia"

interface MediaContextValue {
	isDesktop: boolean
	isTablet: boolean
}

const MediaContext = React.createContext<MediaContextValue>({
	isDesktop: false,
	isTablet: false,
})

interface Props {
	children: React.ReactNode
}

export const MediaQueryProvider = React.memo(({ children }: Props) => {
	const isDesktop = useMedia("(min-width: 1024px)")
	const isTablet = useMedia("(min-width): 768px")

	const value = React.useMemo(
		() => ({ isDesktop, isTablet }),
		[isDesktop, isTablet]
	)

	return <MediaContext.Provider value={value}>{children}</MediaContext.Provider>
})
MediaQueryProvider.displayName = "MediaQueryProvider"

export function useIsDesktop() {
	const val = React.useContext(MediaContext)

	return val.isDesktop
}

export function useIsTablet() {
	const val = React.useContext(MediaContext)

	return val.isTablet
}
