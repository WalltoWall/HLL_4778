import type { ColorVariant } from "../../lib/colorVariant"

export interface FilterableEventsVariant {
	bg: string
	controlsBg: string
	controlsBorder: string
	inactiveControlTextColor: string
	activeContolTextColor: string
	activeButtonBg: string
	textColor: string
}

const variantMap: Record<ColorVariant, FilterableEventsVariant> = {
	blue: {
		bg: "bg-blue-31",
		controlsBg: "bg-beige-92",
		controlsBorder: "border-blue-31",
		inactiveControlTextColor: "text-blue-31",
		activeContolTextColor: "text-beige-92",
		activeButtonBg: "bg-blue-31",
		textColor: "text-beige-92",
	},
	green: {
		bg: "bg-green-27",
		controlsBg: "bg-beige-92",
		controlsBorder: "border-green-27",
		inactiveControlTextColor: "text-green-27",
		activeContolTextColor: "text-white",
		activeButtonBg: "bg-green-27",
		textColor: "text-beige-92",
	},
	purple: {
		bg: "bg-purple-57",
		controlsBg: "bg-beige-92",
		controlsBorder: "border-purple-57",
		inactiveControlTextColor: "text-purple-57",
		activeContolTextColor: "text-white",
		activeButtonBg: "bg-purple-57",
		textColor: "text-beige-92",
	},
	red: {
		bg: "bg-red-45",
		controlsBg: "bg-beige-92",
		controlsBorder: "border-red-45",
		inactiveControlTextColor: "text-red-45",
		activeContolTextColor: "text-white",
		activeButtonBg: "bg-red-45",
		textColor: "text-beige-92",
	},
	yellow: {
		bg: "bg-yellow-50",
		controlsBg: "bg-yellow-50",
		controlsBorder: "border-beige-92",
		inactiveControlTextColor: "text-gray-13",
		activeContolTextColor: "text-gray-13",
		activeButtonBg: "bg-beige-92",
		textColor: "text-gray-13",
	},
	orange: {
		bg: "bg-orange-55",
		controlsBg: "bg-beige-92",
		controlsBorder: "border-orange-55",
		inactiveControlTextColor: "text-orange-55",
		activeContolTextColor: "text-white",
		activeButtonBg: "bg-orange-55",
		textColor: "text-beige-92",
	},
}

export function getFilterableEventsVariant(
	color: ColorVariant
): FilterableEventsVariant {
	return variantMap[color]
}
