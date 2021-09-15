import * as React from "react"
import clsx from "clsx"
import type { EventType, FilterableEventsVariant } from "./FilterableEvents"

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
				isActive && clsx(variant.activeButtonBg, variant.activeContolTextColor),
				!isActive && variant.inactiveControlTextColor,
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
	activeFilter: EventType | undefined
	clearFilters: () => void
	filterEvents: (type: EventType) => void
}

export const FilterControls = ({
	variant,
	activeFilter,
	clearFilters,
	filterEvents,
}: FilterControlsProps) => {
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
					isActive={!activeFilter}
					onClick={clearFilters}
					variant={variant}
				>
					All
				</FilterButton>
				<FilterButton
					onClick={() => filterEvents("watch")}
					isActive={activeFilter === "watch"}
					variant={variant}
				>
					Watch
				</FilterButton>
				<FilterButton
					isActive={activeFilter === "participate"}
					onClick={() => filterEvents("participate")}
					variant={variant}
				>
					Participate
				</FilterButton>
				<FilterButton
					isActive={activeFilter === "learn"}
					onClick={() => filterEvents("learn")}
					variant={variant}
				>
					Learn
				</FilterButton>
			</div>
		</div>
	)
}
