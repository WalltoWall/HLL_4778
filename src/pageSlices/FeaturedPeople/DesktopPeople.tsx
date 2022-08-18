import * as React from "react"

import { BoundedBoxProps } from "../../components/BoundedBox"
import { DesktopBio } from "./DesktopBio"
import { DesktopSlider } from "./DesktopSlider"

import type { Person } from "./FeaturedPeople"
import type { ColorVariantStyles } from "../../lib/colorVariant"

interface DesktopPeopleProps extends BoundedBoxProps {
	people: Person[]
	variantStyles: ColorVariantStyles
}

export const DesktopPeople = ({
	people,
	nextOverhangs,
	nextSharesBg,
	variantStyles,
}: DesktopPeopleProps) => {
	const [activePerson, setActivePerson] = React.useState<Person>(people[0])

	return (
		<div className="hidden md:block md:-mt-15">
			<DesktopSlider
				people={people}
				setActivePerson={setActivePerson}
				variantStyles={variantStyles}
			/>

			{activePerson && (
				<DesktopBio
					person={activePerson}
					variantStyles={variantStyles}
					nextSharesBg={nextSharesBg}
					nextOverhangs={nextOverhangs}
				/>
			)}
		</div>
	)
}
