import clsx from "clsx"
import * as React from "react"

import { BoundedBox, BoundedBoxProps } from "../../components/BoundedBox"
import { GlobeIcon } from "../../components/GlobeIcon"
import { HTMLContent } from "../../components/HTMLContent"
import { InstagramIcon } from "../../components/InstagramIcon"
import { Link } from "../../components/Link"

import type { ColorVariantStyles } from "../../lib/colorVariant"
import type { Person } from "./FeaturedPeople"

interface ArrowProps {
	variantStyles: ColorVariantStyles
}

const Arrow = ({ variantStyles }: ArrowProps) => {
	return (
		<div
			className={clsx(
				"absolute top-0 left-[50%] translate-x-[-50%]",
				"w-0 h-0",
				"border-l-[44px] border-r-[44px] border-t-[44px]",
				"lg:border-l-[72px] lg:border-r-[72px] lg:border-t-[72px]",
				"border-l-transparent border-r-transparent",
				variantStyles.arrowPunchoutBorderColor
			)}
		/>
	)
}

interface BioIconWithTextProps {
	icon: (props: React.ComponentPropsWithoutRef<"svg">) => JSX.Element
	href: string
	children: React.ReactNode
	className?: string
}

const BioIconWithText = ({
	href,
	icon: Icon,
	children,
	className,
}: BioIconWithTextProps) => {
	return (
		<Link
			className={clsx("flex items-center space-x-2 group", className)}
			href={href}
		>
			<Icon
				className={clsx(
					"w-8 h-8 lg:w-10 lg:h-10",
					"text-yellow-50",
					"group-hover:text-purple-73 group-focus:text-purple-73",
					"transition"
				)}
			/>

			<p
				className={clsx(
					"font-bold uppercase font-sansExt text-13 lg:text-16",
					"group-hover:text-purple-73 group-focus:text-purple-73",
					"transition"
				)}
			>
				{children}
			</p>
		</Link>
	)
}

interface DesktopBioProps extends BoundedBoxProps {
	person: Person
	variantStyles: ColorVariantStyles
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
				className="relative bg-gray-13 text-beige-92"
				variant="bio"
				width="base"
			>
				<Arrow variantStyles={variantStyles} />

				<div className="flex flex-col items-start space-y-8 lg:space-y-12">
					{person.bioHTML && <HTMLContent html={person.bioHTML} />}

					<div className="space-y-3 lg:space-y-5">
						{person.instagramHandle && person.instagramHref && (
							<BioIconWithText href={person.instagramHref} icon={InstagramIcon}>
								@{person.instagramHandle}
							</BioIconWithText>
						)}

						{person.websiteLabel && person.websiteHref && (
							<BioIconWithText href={person.websiteHref} icon={GlobeIcon}>
								{person.websiteLabel}
							</BioIconWithText>
						)}
					</div>
				</div>
			</BoundedBox>

			<BoundedBox
				className={variantStyles.bg}
				nextSharesBg={nextSharesBg}
				nextOverhangs={nextOverhangs}
			/>
		</>
	)
}
