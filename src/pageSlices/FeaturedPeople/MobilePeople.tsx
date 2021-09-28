import * as React from "react"

import type { Person } from "./FeaturedPeople"
import { useIsTablet } from "../../hooks/useMediaQuery"
import { MobilePerson } from "./MobilePerson"

export interface MobilePeopleProps {
	people: Person[]
}

export const MobilePeople = ({ people }: MobilePeopleProps) => {
	const isTablet = useIsTablet()

	if (isTablet) return null

	return (
		<ul className="block space-y-14 md:hidden">
			{people.map((person, idx) => (
				<MobilePerson person={person} key={`person-${idx}`} />
			))}
		</ul>
	)
}
