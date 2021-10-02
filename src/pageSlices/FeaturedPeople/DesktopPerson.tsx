import * as React from "react"
import clsx from "clsx"

import type { Person } from "./FeaturedPeople"

import { Image } from "../../components/Image"

interface DesktopPersonProps {
	person: Person
}

export const DesktopPerson = ({ person }: DesktopPersonProps) => {
	return (
		<li className="keen-slider__slide">
			{person.imageURL && (
				<div className="mb-6">
					<div className="aspect-w-1 aspect-h-1">
						<Image
							src={person.imageURL}
							alt={person.imageAlt ?? person.name}
							className="object-cover object-center w-full h-full rounded-full"
						/>
					</div>
				</div>
			)}

			<div className="px-4 text-center">
				{person.pronouns && (
					<h4
						className={clsx(
							"font-bold uppercase font-sansExt",
							"text-16",
							"tracking-caps",
							"mb-3"
						)}
					>
						{person.pronouns}
					</h4>
				)}

				{person.name && (
					<h3 className={clsx("font-serif text-42 leading-1", "mb-8")}>
						{person.name}
					</h3>
				)}

				{person.title && (
					<p
						className={clsx(
							"font-sans font-semibold leading-1_5",
							"text-18",
							"mb-6"
						)}
					>
						{person.title}
					</p>
				)}
			</div>
		</li>
	)
}
