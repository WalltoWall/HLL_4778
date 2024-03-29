import * as React from "react"
import clsx from "clsx"

import { Link } from "../../components/Link"
import { HTMLContent } from "../../components/HTMLContent"

import type { Event } from "./FilterableEvents"
import type { ColorVariantStyles } from "../../lib/colorVariant"
import type { FilterableEventsExtraStyles } from "./getFilterableEventsExtraStyles"
import { VisuallyHidden } from "../../components/VisuallyHidden"

interface Props extends Omit<Event, "color" | "illustration" | "type"> {
	variantStyles: ColorVariantStyles
	extraStyles: FilterableEventsExtraStyles
}

export const EventDescription = React.forwardRef<HTMLDivElement, Props>(
	({ date, descriptionHTML, href, title, variantStyles, extraStyles }, ref) => {
		return (
			<div
				className="flex flex-col items-start space-y-7 lg:space-y-9"
				ref={ref}
			>
				<div className="flex flex-col items-start space-y-3 md:space-y-4 lg:space-y-5">
					{date && (
						<p
							className={clsx(
								"tracking-caps uppercase font-sansExt",
								"text-16 lg:text-18",
								"leading-1_5",
								"transition duration-250",
								variantStyles.textColor
							)}
						>
							{date.toLocaleDateString("en-US", {
								month: "short",
								day: "numeric",
							})}{" "}
							at{" "}
							{date.toLocaleTimeString("en-US", {
								hour12: true,
								hour: "numeric",
								minute: "2-digit",
							})}
						</p>
					)}

					{title && (
						<Link
							href={href}
							className={clsx(
								"block",
								variantStyles.textColor,
								extraStyles.hoverLinkColor,
								"transition duration-250"
							)}
						>
							<h4
								className={clsx(
									"font-serif",
									"text-32 md:text-42 lg:text-52",
									"leading-1"
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
							"transition duration-250 max-w-sm",
							variantStyles.textColor
						)}
					/>
				)}

				<Link
					href={href}
					className={clsx(
						"block underline transition duration-250",
						"uppercase font-sansExt",
						"text-13 md:text-16 lg:text-18",
						"leading-1_5",
						variantStyles.textColor,
						extraStyles.hoverLinkColor
					)}
				>
					<VisuallyHidden>Learn more about {title}</VisuallyHidden>
					Learn More
				</Link>
			</div>
		)
	}
)
EventDescription.displayName = "EventDescription"
