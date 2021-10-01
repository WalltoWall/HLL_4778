import * as React from "react"
import clsx from "clsx"

import { Link } from "../../components/Link"
import { HTMLContent } from "../../components/HTMLContent"

import type { Event } from "./FilterableEvents"
import type { FilterableEventsVariant } from "./getFilterableEventsVariant"

interface Props extends Omit<Event, "color" | "illustration"> {
	activeVariant: FilterableEventsVariant
}

export const EventDescription = React.forwardRef<HTMLDivElement, Props>(
	({ date, descriptionHTML, href, title, activeVariant }, ref) => {
		const dateAndMonth = date.toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
		})
		const time = date.toLocaleTimeString("en-US", {
			hour12: true,
			hour: "numeric",
		})

		return (
			<div
				className="flex flex-col items-start space-y-7 lg:space-y-9"
				ref={ref}
			>
				<div className="flex flex-col items-start space-y-3 md:space-y-4 lg:space-y-5">
					<p
						className={clsx(
							"tracking-caps uppercase font-sansExt",
							"text-16 lg:text-18",
							"leading-1_5",
							"transition duration-300",
							activeVariant.textColor
						)}
					>
						{dateAndMonth} at {time}
					</p>

					{title && (
						<Link href={href} className={clsx("block")}>
							<h4
								className={clsx(
									"font-serif",
									"text-32 md:text-42 lg:text-52",
									"leading-1",
									activeVariant.textColor,
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
						variant="md"
						className={clsx(
							"transition duration-300 max-w-sm",
							activeVariant.textColor
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
						activeVariant.textColor
					)}
				>
					RSVP Now
				</Link>
			</div>
		)
	}
)
EventDescription.displayName = "EventDescription"
