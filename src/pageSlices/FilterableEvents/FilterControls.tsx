import * as React from "react"
import clsx from "clsx"
import { m } from "framer-motion"

import type { EventType } from "./FilterableEvents"
import type { FilterableEventsExtraStyles } from "./getFilterableEventsExtraStyles"

interface FilterButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	isActive: boolean
	extraStyles: FilterableEventsExtraStyles
	layoutIdPrefix: string
}

const FilterButton = ({
	isActive,
	children,
	className,
	extraStyles,
	layoutIdPrefix,
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
				"transition duration-500 linear",
				isActive && extraStyles.activeContolTextColor,
				!isActive && extraStyles.inactiveControlTextColor,
				className
			)}
			{...props}
		>
			{isActive && (
				<m.div
					layoutId={layoutIdPrefix + "pillBg"}
					initial={false}
					className={clsx(
						"absolute inset-0 rounded-full pointer-events-none",
						"shadow",
						"transition-colors duration-500",
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
	layoutIdPrefix: string
}

export const FilterControls = ({
	extraStyles,
	activeFilter,
	clearFilters,
	filterEvents,
	className,
	layoutIdPrefix,
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
				layoutIdPrefix={layoutIdPrefix}
			>
				All
			</FilterButton>
			<FilterButton
				onClick={() => filterEvents("learn")}
				isActive={activeFilter === "learn"}
				extraStyles={extraStyles}
				layoutIdPrefix={layoutIdPrefix}
			>
				Learn
			</FilterButton>
			<FilterButton
				isActive={activeFilter === "share"}
				onClick={() => filterEvents("share")}
				extraStyles={extraStyles}
				layoutIdPrefix={layoutIdPrefix}
			>
				Share
			</FilterButton>
			<FilterButton
				isActive={activeFilter === "participate"}
				onClick={() => filterEvents("participate")}
				extraStyles={extraStyles}
				layoutIdPrefix={layoutIdPrefix}
			>
				Participate
			</FilterButton>
		</div>
	)
}
