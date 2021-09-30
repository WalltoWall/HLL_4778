import * as React from "react"
import clsx from "clsx"
import { useKeenSlider } from "keen-slider/react"

import { DesktopPerson } from "./DesktopPerson"
import { BoundedBox } from "../../components/BoundedBox"
import { ArrowButton } from "../../components/ArrowButton"

import type { Person } from "./FeaturedPeople"
import type { ColorVariantStyles } from "../../lib/colorVariant"

import "keen-slider/keen-slider.min.css"

const Gradient = ({
	className,
	...props
}: React.ComponentPropsWithoutRef<"div">) => {
	return (
		<div
			aria-hidden
			className={clsx(
				className,
				"absolute inset-y-0 pointer-events-none w-75 from-yellow-50 to-transparent"
			)}
			{...props}
		/>
	)
}

interface SliderProps {
	people: Person[]
	setActivePerson: (person: Person) => void
	variantStyles: ColorVariantStyles
}

export const DesktopSlider = ({
	people,
	setActivePerson,
	variantStyles,
}: SliderProps) => {
	const [sliderRef, slider] = useKeenSlider<HTMLUListElement>({
		loop: true,
		slidesPerView: 3,
		centered: true,
		spacing: 30,

		breakpoints: {
			"(min-width: 1024px)": {
				spacing: 60,
			},
		},

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
						<DesktopPerson key={`desktopPerson-${idx}`} person={person} />
					))}
				</ul>

				<Gradient aria-hidden className="left-10 bg-gradient-to-r" />
				<Gradient aria-hidden className="right-10 bg-gradient-to-l" />

				<ArrowButton
					className="rotate-180 left-3 absolute top-[35%] translate-y-[-50%]"
					label="Previous person"
					onClick={() => slider.prev()}
				/>
				<ArrowButton
					className="right-3 absolute top-[35%] translate-y-[-50%]"
					label="Next person"
					onClick={() => slider.next()}
				/>
			</div>
		</BoundedBox>
	)
}
