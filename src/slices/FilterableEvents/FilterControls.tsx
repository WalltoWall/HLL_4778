import * as React from "react"
import clsx from "clsx"
import type { EventType, FilterableEventsVariant } from "./FilterableEvents"
import { AnimateSharedLayout, m } from "framer-motion"

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
				"relative",
				"font-sansExt text-12 uppercase leading-1_15 font-bold",
				"rounded-full py-3 px-3",
				"transition duration-300",
				isActive && variant.activeContolTextColor,
				!isActive && variant.inactiveControlTextColor,
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
						variant.activeButtonBg
					)}
				/>
			)}

			<div className="isolate">{children}</div>
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
		<div
			className={clsx(
				"sticky top-5 z-10",
				"rounded-full",
				"p-1",
				"self-center",
				"flex justify-center space-x-4",
				"shadow-xl border-2",
				variant.controlsBg,
				variant.controlsBorder
			)}
		>
			<AnimateSharedLayout>
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
			</AnimateSharedLayout>
		</div>
	)
}
