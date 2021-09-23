import * as React from "react"

interface MobileMenuContextValue {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

//@ts-expect-error - Providing an initial value isn't necessary since it's
//initialized below.
const MobileMenuContext = React.createContext<MobileMenuContextValue>()

interface Props {
	children: React.ReactNode
}

export const MobileMenuProvider = React.memo(({ children }: Props) => {
	const [isOpen, setIsOpen] = React.useState(false)

	const value = React.useMemo(() => ({ isOpen, setIsOpen }), [isOpen])

	return (
		<MobileMenuContext.Provider value={value}>
			{children}
		</MobileMenuContext.Provider>
	)
})

MobileMenuProvider.displayName = "MobileMenuProvider"

export function useMobileMenu() {
	return React.useContext(MobileMenuContext)
}
