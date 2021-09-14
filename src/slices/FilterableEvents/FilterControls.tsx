import * as React from "react"
import clsx from "clsx"
import type { Filter, FilterableEventsVariant } from "./FilterableEvents"

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

export const FilterControls = ({ variant }: FilterControlsProps) => {
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
