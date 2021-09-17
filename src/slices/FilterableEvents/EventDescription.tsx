import * as React from "react"
import clsx from "clsx"

import type { Event, FilterableEventsVariant } from "./FilterableEvents"
import { Link } from "../../components/Link"
import { HTMLContent } from "../../components/HTMLContent"

interface Props extends Omit<Event, "color"> {
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
		hour: "2-digit",
	})

	return (
		<div className="space-y-7">
			<div className="space-y-3">
				<p
					className={clsx(
						"tracking-[.14em] uppercase font-sansExt text-12 leading-1_5",
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
								"font-serif text-32 leading-1_15",
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
					"uppercase font-sansExt text-13 leading-1_5",
					variant.textColor
				)}
			>
				RSVP Now
			</Link>
		</div>
	)
}
