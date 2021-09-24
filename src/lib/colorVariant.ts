import type { ButtonVariants } from "../components/Button"

export type ColorVariant =
	| "blue"
	| "red"
	| "yellow"
	| "green"
	| "purple"
	| "gray"

interface ColorVariantStyles {
	bg: string
	textColor: string
	buttonColor: ButtonVariants["color"]
	borderColor: string
	placeholderColor: string
}

const colorVariantMap: Record<ColorVariant, ColorVariantStyles> = {
	blue: {
		bg: "bg-blue-31",
		textColor: "text-beige-92",
		buttonColor: "yellow",
		borderColor: "border-beige-92",
		placeholderColor: "placeholder-beige-92/60",
	},
	green: {
		bg: "bg-green-27",
		textColor: "text-beige-92",
		buttonColor: "yellow",
		borderColor: "border-beige-92",
		placeholderColor: "placeholder-beige-92/60",
	},
	purple: {
		bg: "bg-purple-57",
		textColor: "text-beige-92",
		buttonColor: "yellow",
		borderColor: "border-beige-92",
		placeholderColor: "placeholder-beige-92/60",
	},
	yellow: {
		bg: "bg-yellow-50",
		textColor: "text-black",
		buttonColor: "blue",
		borderColor: "border-black",
		placeholderColor: "placeholder-black/60",
	},
	red: {
		bg: "bg-red-45",
		textColor: "text-beige-92",
		buttonColor: "yellow",
		borderColor: "border-beige-92",
		placeholderColor: "placeholder-beige-92/60",
	},
	gray: {
		bg: "bg-gray-23",
		textColor: "text-beige-92",
		buttonColor: "yellow",
		borderColor: "border-beige-92",
		placeholderColor: "placeholder-beige-92/60",
	},
}

export function getColorVariantStyles(color: ColorVariant) {
	return colorVariantMap[color]
}

export function getColorVariant(selectField?: string): ColorVariant {
	return (selectField?.toLowerCase() ?? "blue") as ColorVariant
}