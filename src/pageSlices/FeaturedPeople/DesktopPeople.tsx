import * as React from "react"
import * as Announce from "@radix-ui/react-announce"

import { useIsTablet } from "../../hooks/useMediaQuery"
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
	const isTablet = useIsTablet()
	const [activePerson, setActivePerson] = React.useState<Person | undefined>()

	if (!isTablet) return null

	return (
		<div className="hidden md:block md:-mt-15">
			<DesktopSlider
				people={people}
				setActivePerson={setActivePerson}
				variantStyles={variantStyles}
			/>

			<Announce.Root type="polite">
				{activePerson && (
					<DesktopBio
						person={activePerson}
						variantStyles={variantStyles}
						nextSharesBg={nextSharesBg}
						nextOverhangs={nextOverhangs}
					/>
				)}
			</Announce.Root>
		</div>
	)
}
