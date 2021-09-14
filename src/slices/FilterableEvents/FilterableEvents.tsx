import * as React from "react"
import clsx from "clsx"

import type { MapDataToPropsCtx } from "../../templates/page"
import { BoundedBox } from "../../components/BoundedBox"
import { ColorVariant, getColorVariant } from "../../lib/getColorVariant"
import { FilterControls } from "./FilterControls"
import { EventCard } from "./EventCard"

export type Filter = "watch" | "participate" | "learn"

export const sliceType = "filterable_events"

export interface FilterableEventsVariant {
	bg: string
	inactiveTextColor: string
	activeTextColor: string
	activeButtonBg: string
}

const firstEventBgMap: Record<ColorVariant, FilterableEventsVariant> = {
	blue: {
		bg: "bg-blue-31",
		inactiveTextColor: "text-blue-31",
		activeTextColor: "text-white",
		activeButtonBg: "bg-yellow-50",
	},
	green: {
		bg: "bg-green-27",
		inactiveTextColor: "text-green-27",
		activeTextColor: "text-white",
		activeButtonBg: "bg-yellow-50",
	},
	purple: {
		bg: "bg-purple-57",
		inactiveTextColor: "text-purple-57",
		activeTextColor: "text-white",
		activeButtonBg: "bg-yellow-50",
	},
	red: {
		bg: "bg-red-45",
		inactiveTextColor: "text-red-45",
		activeTextColor: "text-white",
		activeButtonBg: "bg-yellow-50",
	},
	yellow: {
		bg: "bg-yellow-50",
		inactiveTextColor: "text-yellow-50",
		activeTextColor: "text-white",
		activeButtonBg: "bg-blue-31",
	},
}

// TODO: Setup nextSharesBg or equivalent
const FilterableEvents = ({
	events = [],
}: ReturnType<typeof mapDataToProps>) => {
	const [variant, _setVariant] = React.useState<FilterableEventsVariant>(() => {
		const [firstEvent] = events
		if (!firstEvent) return firstEventBgMap.blue

		return firstEventBgMap[firstEvent.color]
	})

	return (
		<BoundedBox tag="section" className={clsx("py-10", variant.bg)}>
			<div className="space-y-11">
				<FilterControls variant={variant} />

				<ul className="space-y-12">
					{events.map((e, idx) => {
						if (!e) return null

						return (
							<EventCard
								key={`event-${idx}`}
								href={e.href}
								color={e.color}
								title={e.title}
								descriptionHTML={e.descriptionHTML}
								date={e.date}
							/>
						)
					})}
				</ul>
			</div>
		</BoundedBox>
	)
}

export function mapDataToProps({ data }: MapDataToPropsCtx<unknown>) {
	return {
		events: data.items.map((item) => {
			const event = extractEventLinkField(item.event)
			if (!event.data) return

			return {
				// TODO: maybe consolidate this prefix logic?
				title: asText(event.data.title),
				descriptionHTML: asHTML(event.data.description, linkResolver),
				date: asDate(event.data.date)!,
				color: getColorVariant(item.color),
				href: `/event/${event.uid}`,
			}
		}),
	}
}

export default FilterableEvents
