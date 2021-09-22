import * as React from "react"
import clsx from "clsx"

import { Link } from "../../components/Link"
import { Image } from "../../components/Image"
import type { ColorVariant } from "../../lib/getColorVariant"
import type {
	Event,
	FilterableEventsVariant,
	IllustrationType,
} from "./FilterableEvents"

import { useUpdateBackgroundInView } from "./useUpdateBackgroundInView"
import { EventDescription } from "./EventDescription"

import flagSvgUrl from "../../assets/flag.svg"
import shakaSvgUrl from "../../assets/shaka.svg"
import slippersSvgUrl from "../../assets/slippers.svg"
import waveSvgUrl from "../../assets/wave.svg"

function getIllustrationUrl(type: IllustrationType): string {
	switch (type) {
		case "flag":
			return flagSvgUrl

		case "shaka":
			return shakaSvgUrl

		case "slippers":
			return slippersSvgUrl

		case "wave":
			return waveSvgUrl

		default:
			throw new Error("Got invalid illustration type")
	}
}

export interface EventCardProps extends Event {
	updateBackground: (color: ColorVariant) => void
	variant: FilterableEventsVariant
}

export const MobileEventCard = ({
	color,
	title,
	descriptionHTML,
	date,
	illustration,
	href,
	updateBackground,
	variant,
}: EventCardProps) => {
	const illustrationUrl = getIllustrationUrl(illustration)
	const { ref } = useUpdateBackgroundInView({
		updateBackground,
		color,
		threshold: 0.25,
	})

	return (
		<div className="space-y-6" ref={ref}>
			<Link
				href={href}
				className={clsx("block bg-beige-92 aspect-w-1 aspect-h-1")}
			>
				<div className="flex items-center justify-center p-5">
					<Image src={illustrationUrl} alt="" className="w-full h-full" />
				</div>
			</Link>

			<EventDescription
				variant={variant}
				date={date}
				descriptionHTML={descriptionHTML}
				title={title}
				href={href}
			/>
		</div>
	)
}
