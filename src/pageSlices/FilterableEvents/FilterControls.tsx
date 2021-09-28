import * as React from "react"
import clsx from "clsx"
import { AnimateSharedLayout, m } from "framer-motion"

import type { EventType } from "./FilterableEvents"
import type { FilterableEventsVariant } from "./getFilterableEventsVariant"

interface FilterButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	isActive: boolean
	activeVariant: FilterableEventsVariant
}

const FilterButton = ({
	isActive,
	children,
	className,
	activeVariant,
	...props
}: FilterButtonProps) => {
	return (
		<button
			className={clsx(
				"relative",
				"font-sansExt",
				"text-11 md:text-13 lg:text-15",
				"uppercase leading-1_15 font-bold",
				"rounded-full py-3 px-3",
				"transition duration-300",
				isActive && activeVariant.activeContolTextColor,
				!isActive && activeVariant.inactiveControlTextColor,
				className
			)}
			{...props}
		>
			{isActive && (
				<m.div
					layoutId="pillBg"
					initial={false}
					className={clsx(
						"absolute inset-0 rounded-full pointer-events-none",
						"shadow",
						"transition-colors duration-300",
						activeVariant.activeButtonBg
					)}
				/>
			)}

			<div className="isolate">{children}</div>
		</button>
	)
}

interface FilterControlsProps extends React.ComponentPropsWithoutRef<"div"> {
	activeVariant: FilterableEventsVariant
	activeFilter: EventType | undefined
	clearFilters: () => void
	filterEvents: (type: EventType) => void
}

export const FilterControls = ({
	activeVariant,
	activeFilter,
	clearFilters,
	filterEvents,
	className,
	...props
}: FilterControlsProps) => {
	return (
		<div
			className={clsx(
				"rounded-full",
				"p-1",
				"flex justify-center space-x-3 lg:space-x-5",
				"shadow-xl border-2",
				activeVariant.controlsBg,
				activeVariant.controlsBorder,
				className
			)}
			{...props}
		>
			<AnimateSharedLayout>
				<FilterButton
					isActive={!activeFilter}
					onClick={clearFilters}
					activeVariant={activeVariant}
				>
					All
				</FilterButton>
				<FilterButton
					onClick={() => filterEvents("watch")}
					isActive={activeFilter === "watch"}
					activeVariant={activeVariant}
				>
					Watch
				</FilterButton>
				<FilterButton
					isActive={activeFilter === "participate"}
					onClick={() => filterEvents("participate")}
					activeVariant={activeVariant}
				>
					Participate
				</FilterButton>
				<FilterButton
					isActive={activeFilter === "learn"}
					onClick={() => filterEvents("learn")}
					activeVariant={activeVariant}
				>
					Learn
				</FilterButton>
			</AnimateSharedLayout>
		</div>
	)
}
