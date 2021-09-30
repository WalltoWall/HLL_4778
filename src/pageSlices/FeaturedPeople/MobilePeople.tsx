import * as React from "react"

import { useIsTablet } from "../../hooks/useMediaQuery"
import { MobilePerson } from "./MobilePerson"

import type { Person } from "./FeaturedPeople"
import type { ColorVariantStyles } from "../../lib/colorVariant"

export interface MobilePeopleProps {
	people: Person[]
	variantStyles: ColorVariantStyles
}

export const MobilePeople = ({ people, variantStyles }: MobilePeopleProps) => {
	const isTablet = useIsTablet()

	if (isTablet) return null

	return (
		<ul className="block space-y-14 md:hidden">
			{people.map((person, idx) => (
				<MobilePerson
					person={person}
					key={`person-${idx}`}
					variantStyles={variantStyles}
				/>
			))}
		</ul>
	)
}
