import * as React from "react"
import { useMedia } from "use-media"

interface MediaContextValue {
	isDesktop: boolean
}

const MediaContext = React.createContext<MediaContextValue>({
	isDesktop: false,
})

interface Props {
	children: React.ReactNode
}

export const MediaQueryProvider = ({ children }: Props) => {
	const isDesktop = useMedia({ minWidth: "1024px" })

	const value = React.useMemo(() => ({ isDesktop }), [isDesktop])

	return <MediaContext.Provider value={value}>{children}</MediaContext.Provider>
}

export function useIsDesktop() {
	const val = React.useContext(MediaContext)

	return val.isDesktop
}
