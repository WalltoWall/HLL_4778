import * as React from "react"
import clsx from "clsx"

import type { Person } from "./FeaturedPeople"

import { Image } from "../../components/Image"
import { PlusIcon } from "../../components/PlusIcon"

interface DesktopPersonProps {
	person: Person
	isActive: boolean
}

export const DesktopPerson = ({ person, isActive }: DesktopPersonProps) => {
	return (
		<li className="keen-slider__slide">
			{person.imageURL && (
				<div className="mb-6">
					<div className="aspect-w-1 aspect-h-1">
						<Image
							src={person.imageURL}
							alt={person.imageAlt ?? person.name}
							className="object-cover w-full h-full rounded-full"
						/>
					</div>
				</div>
			)}

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
				<h3 className={clsx("font-serif text-42 leading-1", "mb-6")}>
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

			<div className="flex items-center space-x-2">
				<PlusIcon className="w-6 h-6 text-black" isOpen={isActive} />

				<p className="font-bold underline uppercase font-sansExt text-16">
					Bio
				</p>
			</div>
		</li>
	)
}
