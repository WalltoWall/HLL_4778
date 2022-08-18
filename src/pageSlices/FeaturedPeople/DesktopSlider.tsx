import * as React from "react"
import clsx from "clsx"
import { useKeenSlider } from "keen-slider/react"

import { DesktopPerson } from "./DesktopPerson"
import { BoundedBox } from "../../components/BoundedBox"
import { ArrowButton } from "../../components/ArrowButton"

import type { Person } from "./FeaturedPeople"
import type { ColorVariantStyles } from "../../lib/colorVariant"

import "keen-slider/keen-slider.min.css"

interface GradientProps extends React.ComponentPropsWithoutRef<"div"> {
	variantStyles: ColorVariantStyles
}

const Gradient = ({ className, variantStyles, ...props }: GradientProps) => {
	return (
		<div
			aria-hidden
			className={clsx(
				className,
				variantStyles.gradientOrigin,
				"absolute inset-y-0 pointer-events-none w-40 to-transparent"
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
	const [isReady, setIsReady] = React.useState(false)
	const [rList, rSlider] = useKeenSlider<HTMLUListElement>({
		slides: {
			perView: 3,
			spacing: 30,
			origin: "center",
		},
		loop: true,

		breakpoints: {
			"(min-width: 1024px)": {
				slides: { spacing: 60, perView: 3, origin: "center" },
			},
		},

		slideChanged: (slider) => {
			const nextPerson = people[slider.track.details.rel]
			setActivePerson(nextPerson)
		},

		created: () => setIsReady(true),
	})

	return (
		<BoundedBox
			className={clsx(variantStyles.bg, "!pb-24")}
			width="lg"
			nextSharesBg
		>
			<div
				className={clsx(
					"relative px-10",
					isReady ? "opacity-100" : "opacity-0",
					"transition duration-300 ease"
				)}
			>
				<ul ref={rList} className="keen-slider">
					{people.map((person, idx) => (
						<DesktopPerson key={`desktopPerson-${idx}`} person={person} />
					))}
				</ul>

				<Gradient
					aria-hidden
					variantStyles={variantStyles}
					className="left-10 bg-gradient-to-r"
				/>
				<Gradient
					aria-hidden
					variantStyles={variantStyles}
					className="right-10 bg-gradient-to-l"
				/>

				<ArrowButton
					className="rotate-180 left-3 absolute top-[35%] translate-y-[-50%]"
					label="Previous person"
					onClick={() => rSlider.current?.prev()}
				/>
				<ArrowButton
					className="right-3 absolute top-[35%] translate-y-[-50%]"
					label="Next person"
					onClick={() => rSlider.current?.next()}
				/>
			</div>
		</BoundedBox>
	)
}
