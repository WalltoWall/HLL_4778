import type { ButtonVariants } from "../components/Button"

export type ColorVariant =
	| "blue"
	| "red"
	| "yellow"
	| "green"
	| "purple"
	| "gray"
	| "orange"

export interface ColorVariantStyles {
	bg: string
	textColor: string
	buttonColor: ButtonVariants["color"]
	borderColor: string
	placeholderColor: string
	plusIconPunchoutColor: string
	gradientOrigin: string
	arrowPunchoutBorderColor: string
}

const colorVariantMap: Record<ColorVariant, ColorVariantStyles> = {
	blue: {
		bg: "bg-blue-31",
		textColor: "text-beige-92",
		buttonColor: "yellow",
		borderColor: "border-beige-92",
		placeholderColor: "placeholder-beige-92/60",
		plusIconPunchoutColor: "group-hover:text-blue-31 group-focus:text-blue-31",
		gradientOrigin: "from-blue-31",
		arrowPunchoutBorderColor: "border-t-blue-31",
	},
	green: {
		bg: "bg-green-27",
		textColor: "text-beige-92",
		buttonColor: "yellow",
		borderColor: "border-beige-92",
		placeholderColor: "placeholder-beige-92/60",
		plusIconPunchoutColor:
			"group-hover:text-green-27 group-focus:text-green-27",
		gradientOrigin: "from-green-27",
		arrowPunchoutBorderColor: "border-t-green-27",
	},
	purple: {
		bg: "bg-purple-57",
		textColor: "text-beige-92",
		buttonColor: "yellow",
		borderColor: "border-beige-92",
		placeholderColor: "placeholder-beige-92/60",
		plusIconPunchoutColor:
			"group-hover:text-purple-57 group-focus:text-purple-57",
		gradientOrigin: "from-purple-57",
		arrowPunchoutBorderColor: "border-t-purple-57",
	},
	orange: {
		bg: "bg-orange-55",
		textColor: "text-gray-13",
		buttonColor: "yellow",
		borderColor: "border-gray-13",
		placeholderColor: "placeholder-gray-13/60",
		plusIconPunchoutColor:
			"group-hover:text-orange-55 group-focus:text-orange-55",
		gradientOrigin: "from-orange-55",
		arrowPunchoutBorderColor: "border-t-orange-55",
	},
	yellow: {
		bg: "bg-yellow-50",
		textColor: "text-gray-13",
		buttonColor: "black",
		borderColor: "border-gray-13",
		placeholderColor: "placeholder-glay-13/60",
		plusIconPunchoutColor:
			"group-hover:text-yellow-50 group-focus:text-yellow-50",
		gradientOrigin: "from-yellow-50",
		arrowPunchoutBorderColor: "border-t-yellow-50",
	},
	red: {
		bg: "bg-red-45",
		textColor: "text-beige-92",
		buttonColor: "yellow",
		borderColor: "border-beige-92",
		placeholderColor: "placeholder-beige-92/60",
		plusIconPunchoutColor: "group-hover:text-red-45 group-focus:text-red-45",
		gradientOrigin: "from-red-45",
		arrowPunchoutBorderColor: "border-t-red-45",
	},
	gray: {
		bg: "bg-gray-23",
		textColor: "text-beige-92",
		buttonColor: "yellow",
		borderColor: "border-beige-92",
		placeholderColor: "placeholder-beige-92/60",
		plusIconPunchoutColor: "group-hover:text-gray-23 group-focus:text-gray-23",
		gradientOrigin: "from-gray-23",
		arrowPunchoutBorderColor: "border-t-gray-23",
	},
}

export function getColorVariantStyles(color: ColorVariant) {
	return colorVariantMap[color] ?? colorVariantMap.blue
}

export function getColorVariant(selectField?: string): ColorVariant {
	return (selectField?.toLowerCase() ?? "blue") as ColorVariant
}
