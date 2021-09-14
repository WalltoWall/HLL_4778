import * as React from "react"
import type * as pt from "@prismicio/types"
import clsx from "clsx"
import type { MapDataToPropsCtx } from "../pages/[uid]"
import { BoundedBox } from "../components/BoundedBox"
import { ColorVariant, getColorVariant } from "../lib/getColorVariant"

type Filter = "watch" | "participate" | "learn"

interface FilterButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	isActive: boolean
	variant: FilterableEventsVariant
}

const FilterButton = ({
	isActive,
	children,
	className,
	variant,
	...props
}: FilterButtonProps) => {
	return (
		<button
			className={clsx(
				"font-sansExt text-10 uppercase leading-1_15 font-bold",
				"rounded-full py-3 px-3",
				isActive && clsx(variant.activeButtonBg, variant.activeTextColor),
				!isActive && variant.inactiveTextColor,
				className
			)}
			{...props}
		>
			{children}
		</button>
	)
}

interface FilterControlsProps {
	variant: FilterableEventsVariant
}

const FilterControls = ({ variant }: FilterControlsProps) => {
	const [activeControl, setActiveControl] = React.useState<Filter | undefined>()

	return (
		<div className={clsx("relative", "p-1")}>
			<div
				aria-hidden
				className={clsx(
					"absolute inset-0 rounded-full mix-blend-multiply",
					variant.bg
				)}
			/>

			<div className="relative flex justify-between">
				<FilterButton
					isActive={!activeControl}
					onClick={() => setActiveControl(undefined)}
					variant={variant}
				>
					All
				</FilterButton>
				<FilterButton
					onClick={() => setActiveControl("watch")}
					isActive={activeControl === "watch"}
					variant={variant}
				>
					Watch
				</FilterButton>
				<FilterButton
					isActive={activeControl === "participate"}
					onClick={() => setActiveControl("participate")}
					variant={variant}
				>
					Participate
				</FilterButton>
				<FilterButton
					isActive={activeControl === "learn"}
					onClick={() => setActiveControl("learn")}
					variant={variant}
				>
					Learn
				</FilterButton>
			</div>
		</div>
	)
}

export const sliceType = "filterable_events"

export type VideoHeroSlice = pt.Slice<
	typeof sliceType,
	never,
	{
		event: pt.RelationField
		color: pt.SelectField<ColorVariant>
	}
>

interface FilterableEventsVariant {
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
	const [variant, setVariant] = React.useState<FilterableEventsVariant>(() => {
		const [firstEvent] = events
		if (!firstEvent) return firstEventBgMap.blue

		return firstEventBgMap[firstEvent.color]
	})

	console.log(events)

	return (
		<BoundedBox tag="section" className={clsx("py-10", variant.bg)}>
			<FilterControls variant={variant} />
		</BoundedBox>
	)
}

export function mapDataToProps({ data }: MapDataToPropsCtx<VideoHeroSlice>) {
	return {
		events: data.items.map((item) => ({
			event: item.event,
			color: getColorVariant(item.color),
		})),
	}
}

export default FilterableEvents
