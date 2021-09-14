import * as React from "react"
import clsx from "clsx"

import { HTMLContent } from "../../components/HTMLContent"
import { Link } from "../../components/Link"
import type { ColorVariant } from "../../lib/getColorVariant"
import { sansExt, serifMd } from "../../typography"

interface Props {
	color: ColorVariant
	title: string
	descriptionHTML: string
	date: Date
	href: string
}

export const EventCard = ({
	color,
	title,
	descriptionHTML,
	date,
	href,
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
		<div className="space-y-6">
			<div className="bg-beige-92 aspect-w-1 aspect-h-1" />

			<div>
				<div className="space-y-5">
					<div className="space-y-3">
						<h5 className={clsx(sansExt, "text-beige-92")}>
							{dateAndMonth} at {time}
						</h5>

						<h4 className={clsx(serifMd, "text-beige-92")}>{title}</h4>
					</div>

					<HTMLContent html={descriptionHTML} />
				</div>

				<Link href="/">RSVP Now</Link>
			</div>
		</div>
	)
}
