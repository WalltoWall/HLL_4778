import * as React from "react"
import clsx from "clsx"
import { graphql } from "gatsby"
import { undefIfEmpty } from "@walltowall/helpers"

import type { MapDataToPropsCtx } from "../../templates/page"
import type { FilterableEventsFragment } from "../../gqlTypes.gen"

import { BoundedBox } from "../../components/BoundedBox"
import { ColorVariant, getColorVariant } from "../../lib/getColorVariant"
import { FilterControls } from "./FilterControls"
import { EventCard } from "./EventCard"

export type Filter = "watch" | "participate" | "learn"

export const sliceType = "PrismicPageDataBodyFilterableEvents"

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
					{events.map((e, idx) => (
						<EventCard
							key={`event-${idx}`}
							href={e.href}
							color={e.color}
							title={e.title}
							descriptionHTML={e.descriptionHTML}
							date={e.date}
						/>
					))}
				</ul>
			</div>
		</BoundedBox>
	)
}

export function mapDataToProps({
	data,
}: MapDataToPropsCtx<FilterableEventsFragment>) {
	return {
		events:
			data.items?.map((item) => {
				const event = item?.event?.document

				return {
					color: getColorVariant(item?.color),
					title: undefIfEmpty(event?.data?.title?.text),
					descriptionHTML: undefIfEmpty(event?.data?.description?.html),
					date: new Date(event?.data?.date as string),
					href: item?.event?.url,
				}
			}) ?? [],
	}
}

export const gqlFragment = graphql`
	fragment FilterableEvents on PrismicPageDataBodyFilterableEvents {
		items {
			color
			event {
				url
				document {
					... on PrismicEvent {
						_previewable
						data {
							date
							description {
								html
							}
							title {
								text
							}
							type
						}
					}
				}
			}
		}
	}
`

export default FilterableEvents
