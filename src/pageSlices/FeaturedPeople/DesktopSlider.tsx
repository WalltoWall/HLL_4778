import * as React from "react"
import clsx from "clsx"
import { useKeenSlider } from "keen-slider/react"

import { DesktopPerson } from "./DesktopPerson"
import { BoundedBox } from "../../components/BoundedBox"

import type { Person } from "./FeaturedPeople"
import type { ColorVariantStyles } from "../../lib/colorVariant"

import "keen-slider/keen-slider.min.css"

interface SliderProps {
	people: Person[]
	activePerson: Person | undefined
	setActivePerson: (person: Person) => void
	variantStyles: ColorVariantStyles
}

export const DesktopSlider = ({
	people,
	setActivePerson,
	activePerson,
	variantStyles,
}: SliderProps) => {
	const [sliderRef, _slider] = useKeenSlider<HTMLUListElement>({
		loop: true,
		slidesPerView: 3,
		centered: true,
		spacing: 60,

		slideChanged: (slider) => {
			const nextPerson = people[slider.details().relativeSlide]
			setActivePerson(nextPerson)
		},
	})

	return (
		<BoundedBox
			className={clsx(variantStyles.bg, "!pb-24")}
			width="lg"
			nextSharesBg
		>
			<div className="relative px-10">
				<ul ref={sliderRef} className="keen-slider">
					{people.map((person, idx) => (
						<DesktopPerson
							key={`desktopPerson-${idx}`}
							person={person}
							isActive={person === activePerson}
						/>
					))}
				</ul>

				<div
					aria-hidden
					className="absolute inset-y-0 pointer-events-none left-10 w-75 bg-gradient-to-r from-yellow-50 to-transparent"
				/>
				<div
					aria-hidden
					className="absolute inset-y-0 pointer-events-none right-10 w-75 bg-gradient-to-l from-yellow-50 to-transparent"
				/>
			</div>
		</BoundedBox>
	)
}
