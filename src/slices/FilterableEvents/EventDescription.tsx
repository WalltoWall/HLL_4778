import * as React from "react"
import clsx from "clsx"

import type { Event, FilterableEventsVariant } from "./FilterableEvents"
import { Link } from "../../components/Link"
import { HTMLContent } from "../../components/HTMLContent"

interface Props extends Omit<Event, "color" | "illustration"> {
	variant: FilterableEventsVariant
}

export const EventDescription = ({
	date,
	descriptionHTML,
	href,
	title,
	variant,
}: Props) => {
	const dateAndMonth = date.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
	})
	const time = date.toLocaleTimeString("en-US", {
		hour12: true,
		hour: "numeric",
	})

	return (
		<div className="flex flex-col items-start space-y-7 lg:space-y-9">
			<div className="flex flex-col items-start space-y-3 md:space-y-4 lg:space-y-5">
				<p
					className={clsx(
						"tracking-caps uppercase font-sansExt",
						"text-12 md:text-13 lg:text-16",
						"leading-1_5",
						"transition duration-300",
						variant.textColor
					)}
				>
					{dateAndMonth} at {time}
				</p>

				{title && (
					<Link href={href} className="block">
						<h4
							className={clsx(
								"font-serif",
								"text-32 md:text-36 lg:text-42",
								"leading-1_15",
								variant.textColor,
								"transition duration-300"
							)}
						>
							{title}
						</h4>
					</Link>
				)}
			</div>

			{descriptionHTML && (
				<HTMLContent
					html={descriptionHTML}
					className={clsx(
						"transition duration-300 max-w-sm",
						variant.textColor
					)}
				/>
			)}

			<Link
				href="/"
				className={clsx(
					"block underline transition duration-300",
					"uppercase font-sansExt",
					"text-13 md:text-16 lg:text-18",
					"leading-1_5",
					variant.textColor
				)}
			>
				RSVP Now
			</Link>
		</div>
	)
}
