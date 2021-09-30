import * as React from "react"
import clsx from "clsx"
import * as Collapsible from "@radix-ui/react-collapsible"

import { Image } from "../../components/Image"
import { PlusIcon } from "../../components/PlusIcon"

import type { Person } from "./FeaturedPeople"
import { HTMLContent } from "../../components/HTMLContent"
import { InstagramIcon } from "../../components/InstagramIcon"
import { Link } from "../../components/Link"
import { GlobeIcon } from "../../components/GlobeIcon"

interface MobilePersonProps {
	person: Person
}

export const MobilePerson = ({ person }: MobilePersonProps) => {
	const [isExpanded, setIsExpanded] = React.useState(false)

	return (
		<li>
			{person.imageURL && (
				<div className="max-w-sm mb-6">
					<div className="aspect-w-1 aspect-h-1">
						<Image
							src={person.imageURL}
							alt={person.imageAlt ?? person.name}
							className="w-full h-full rounded-full"
						/>
					</div>
				</div>
			)}

			{person.pronouns && (
				<h4
					className={clsx(
						"font-bold uppercase font-sansExt",
						"text-12 md:text-16",
						"tracking-caps",
						"mb-3"
					)}
				>
					{person.pronouns}
				</h4>
			)}

			{person.name && (
				<h3 className={clsx("font-serif text-32 md:text-42 leading-1", "mb-6")}>
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

			{person.bioHTML && (
				<Collapsible.Root
					open={isExpanded}
					onOpenChange={(open: boolean) => setIsExpanded(open)}
				>
					<Collapsible.Trigger>
						<div className="flex items-center space-x-2">
							<PlusIcon className="w-5 h-5 text-gray-13" isOpen={isExpanded} />

							<p className="font-bold underline uppercase font-sansExt text-13">
								Bio
							</p>
						</div>
					</Collapsible.Trigger>

					<Collapsible.Content className="pt-4">
						<HTMLContent html={person.bioHTML} />

						{person.instagramHandle && person.instagramHref && (
							<Link
								className={clsx("flex items-center space-x-2", "mt-6")}
								href={person.instagramHref}
							>
								<InstagramIcon className="w-8 h-8" />

								<p className="font-bold uppercase font-sansExt text-13 ">
									@{person.instagramHandle}
								</p>
							</Link>
						)}

						{person.websiteLabel && person.websiteHref && (
							<Link
								className={clsx("flex items-center space-x-2", "mt-3")}
								href={person.websiteHref}
							>
								<GlobeIcon className="w-8 h-8" />

								<p className="font-bold uppercase font-sansExt text-13">
									{person.websiteLabel}
								</p>
							</Link>
						)}
					</Collapsible.Content>
				</Collapsible.Root>
			)}
		</li>
	)
}
