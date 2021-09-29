import * as React from "react"
import useLocalStorageState from "use-local-storage-state"
import { v4 as uuid } from "@lukeed/uuid"

interface User {
	id: string
	votedVideos: string[]
}

interface UserContextValue {
	user?: User
	voteForVideo: (uid: string) => void
}

//@ts-expect-error - We initialize a value in UserProvider
const UserContext = React.createContext<UserContextValue>()

interface Props {
	children: React.ReactNode
}

export const UserProvider = React.memo(({ children }: Props) => {
	const [user, setUser] = useLocalStorageState<User | undefined>(
		"hawaii-pride-user",
		undefined
	)

	function voteForVideo(uid: string) {
		setUser((prevUser) => {
			// This case shouldn't happen because of the useEffect below.
			if (!prevUser) return prevUser

			return {
				id: prevUser.id,
				votedVideos: [...prevUser.votedVideos, uid],
			}
		})
	}

	React.useEffect(() => {
		if (user) return

		setUser({ id: uuid(), votedVideos: [] })
	}, [user])

	const value = React.useMemo(
		() => ({
			user,
			voteForVideo,
		}),
		[user, voteForVideo]
	)

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>
})
UserProvider.displayName = "UserProvider"

export function useUser() {
	return React.useContext(UserContext)
}
