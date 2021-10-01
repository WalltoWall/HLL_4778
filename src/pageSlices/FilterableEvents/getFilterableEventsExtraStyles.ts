import type { ColorVariant } from "../../lib/colorVariant"

export interface FilterableEventsExtraStyles {
	controlsBg: string
	controlsBorder: string
	inactiveControlTextColor: string
	activeContolTextColor: string
	activeButtonBg: string
	hoverLinkColor: string
}

const extraStylesMap: Record<ColorVariant, FilterableEventsExtraStyles> = {
	blue: {
		controlsBg: "bg-beige-92",
		controlsBorder: "border-blue-31",
		inactiveControlTextColor: "text-blue-31",
		activeContolTextColor: "text-beige-92",
		activeButtonBg: "bg-blue-31",
		hoverLinkColor: "hover:text-yellow-50 focus:text-yellow-50",
	},
	green: {
		controlsBg: "bg-beige-92",
		controlsBorder: "border-green-27",
		inactiveControlTextColor: "text-green-27",
		activeContolTextColor: "text-white",
		activeButtonBg: "bg-green-27",
		hoverLinkColor: "hover:text-yellow-50 focus:text-yellow-50",
	},
	purple: {
		controlsBg: "bg-beige-92",
		controlsBorder: "border-purple-57",
		inactiveControlTextColor: "text-purple-57",
		activeContolTextColor: "text-white",
		activeButtonBg: "bg-purple-57",
		hoverLinkColor: "hover:text-yellow-50 focus:text-yellow-50",
	},
	red: {
		controlsBg: "bg-beige-92",
		controlsBorder: "border-red-45",
		inactiveControlTextColor: "text-red-45",
		activeContolTextColor: "text-white",
		activeButtonBg: "bg-red-45",
		hoverLinkColor: "hover:text-yellow-50 focus:text-yellow-50",
	},
	yellow: {
		controlsBg: "bg-yellow-50",
		controlsBorder: "border-beige-92",
		inactiveControlTextColor: "text-gray-13",
		activeContolTextColor: "text-gray-13",
		activeButtonBg: "bg-beige-92",
		hoverLinkColor: "hover:text-beige-92 focus:text-beige-92",
	},
	orange: {
		controlsBg: "bg-beige-92",
		controlsBorder: "border-orange-55",
		inactiveControlTextColor: "text-orange-55",
		activeContolTextColor: "text-white",
		activeButtonBg: "bg-orange-55",
		hoverLinkColor: "hover:text-beige-92 focus:text-beige-92",
	},
}

export function getFilterableEventsExtraStyles(
	color: ColorVariant
): FilterableEventsExtraStyles {
	return extraStylesMap[color]
}
