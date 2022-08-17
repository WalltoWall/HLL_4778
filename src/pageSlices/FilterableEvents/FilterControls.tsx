import * as React from "react"
import clsx from "clsx"
import { m } from "framer-motion"

import type { EventType } from "./FilterableEvents"
import type { FilterableEventsExtraStyles } from "./getFilterableEventsExtraStyles"

interface FilterButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	isActive: boolean
	extraStyles: FilterableEventsExtraStyles
}

const FilterButton = ({
	isActive,
	children,
	className,
	extraStyles,
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
				"transition duration-250",
				isActive && extraStyles.activeContolTextColor,
				!isActive && extraStyles.inactiveControlTextColor,
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
						"transition-colors",
						extraStyles.activeButtonBg
					)}
				/>
			)}

			<div className="isolate">{children}</div>
		</button>
	)
}

interface FilterControlsProps extends React.ComponentPropsWithoutRef<"div"> {
	extraStyles: FilterableEventsExtraStyles
	activeFilter: EventType | undefined
	clearFilters: () => void
	filterEvents: (type: EventType) => void
}

export const FilterControls = ({
	extraStyles,
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
				extraStyles.controlsBg,
				extraStyles.controlsBorder,
				className
			)}
			{...props}
		>
			<FilterButton
				isActive={!activeFilter}
				onClick={clearFilters}
				extraStyles={extraStyles}
			>
				All
			</FilterButton>
			<FilterButton
				onClick={() => filterEvents("watch")}
				isActive={activeFilter === "watch"}
				extraStyles={extraStyles}
			>
				Watch
			</FilterButton>
			<FilterButton
				isActive={activeFilter === "participate"}
				onClick={() => filterEvents("participate")}
				extraStyles={extraStyles}
			>
				Participate
			</FilterButton>
			<FilterButton
				isActive={activeFilter === "learn"}
				onClick={() => filterEvents("learn")}
				extraStyles={extraStyles}
			>
				Learn
			</FilterButton>
		</div>
	)
}
