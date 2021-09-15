import * as React from "react"
import clsx from "clsx"
import { useInView } from "react-intersection-observer"

import { HTMLContent } from "../../components/HTMLContent"
import { Link } from "../../components/Link"
import type { ColorVariant } from "../../lib/getColorVariant"
import { sansExt, sansExtMd, serifMd } from "../../typography"
import type { FilterableEventsVariant } from "./FilterableEvents"

interface Props {
	color: ColorVariant
	title?: string
	descriptionHTML?: string
	date: Date
	href?: string
	updateBackground: (color: ColorVariant) => void
	variant: FilterableEventsVariant
}

export const EventCard = ({
	color,
	title,
	descriptionHTML,
	date,
	href,
	updateBackground,
	variant,
}: Props) => {
	const { ref, inView } = useInView({ threshold: 0.25 })

	const dateAndMonth = date.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
	})
	const time = date.toLocaleTimeString("en-US", {
		hour12: true,
		hour: "2-digit",
	})

	React.useEffect(() => {
		if (!inView) return

		updateBackground(color)
	}, [inView, color])

	return (
		<li className="space-y-6" ref={ref}>
			<Link href={href} className="block bg-beige-92 aspect-w-1 aspect-h-1" />

			<div>
				<div className="space-y-7">
					<div className="space-y-3">
						<p
							className={clsx(
								sansExt,
								variant.textColor,
								"transition duration-300"
							)}
						>
							{dateAndMonth} at {time}
						</p>

						{title && (
							<Link href={href} className="block">
								<h4
									className={clsx(
										serifMd,
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
							className={clsx("transition duration-300", variant.textColor)}
						/>
					)}

					<Link
						href="/"
						className={clsx(
							"block underline transition duration-300",
							variant.textColor,
							sansExtMd
						)}
					>
						RSVP Now
					</Link>
				</div>
			</div>
		</li>
	)
}
