import clsx from "clsx"
import * as React from "react"

import { BoundedBox, BoundedBoxProps } from "../../components/BoundedBox"
import { GlobeIcon } from "../../components/GlobeIcon"
import { HTMLContent } from "../../components/HTMLContent"
import { InstagramIcon } from "../../components/InstagramIcon"
import { Link } from "../../components/Link"

import type { ColorVariantStyles } from "../../lib/colorVariant"
import type { Person } from "./FeaturedPeople"

interface DesktopBioProps extends BoundedBoxProps {
	person: Person
	variantStyles: ColorVariantStyles
}

const Arrow = () => {
	return (
		<div
			className={clsx(
				"absolute top-0 left-[50%] translate-x-[-50%]",
				"w-0 h-0",
				"border-l-[44px] border-r-[44px] border-t-[44px]",
				"lg:border-l-[72px] lg:border-r-[72px] lg:border-t-[72px]",
				"border-l-transparent border-r-transparent border-t-yellow-50"
			)}
		/>
	)
}

export const DesktopBio = ({
	person,
	variantStyles,
	nextSharesBg,
	nextOverhangs,
}: DesktopBioProps) => {
	return (
		<>
			<BoundedBox
				className={clsx("relative bg-gray-13 text-beige-92", "")}
				variant="bio"
				width="base"
			>
				<Arrow />

				{person.bioHTML && <HTMLContent html={person.bioHTML} />}

				{person.instagramHandle && person.instagramHref && (
					<Link
						className={clsx("flex items-center space-x-2", "mt-8 lg:mt-12")}
						href={person.instagramHref}
					>
						<InstagramIcon
							className={clsx("w-8 h-8 lg:w-10 lg:h-10", "text-yellow-50")}
						/>

						<p className="font-bold uppercase font-sansExt text-13 lg:text-16">
							@{person.instagramHandle}
						</p>
					</Link>
				)}

				{person.websiteLabel && person.websiteHref && (
					<Link
						className={clsx("flex items-center space-x-2", "mt-3 lg:mt-5")}
						href={person.websiteHref}
					>
						<GlobeIcon
							className={clsx("w-8 h-8 lg:w-10 lg:h-10", "text-yellow-50")}
						/>

						<p className="font-bold uppercase font-sansExt text-13 lg:text-16">
							{person.websiteLabel}
						</p>
					</Link>
				)}
			</BoundedBox>

			<BoundedBox
				className={variantStyles.bg}
				nextSharesBg={nextSharesBg}
				nextOverhangs={nextOverhangs}
			/>
		</>
	)
}
