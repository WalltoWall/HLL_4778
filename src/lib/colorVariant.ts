import type { ButtonVariants } from "../components/Button"

export type ColorVariant = "blue" | "red" | "yellow" | "green" | "purple"

interface ColorVariantStyles {
	bg: string
	textColor: string
	buttonColor: ButtonVariants["color"]
}

const colorVariantMap: Record<ColorVariant, ColorVariantStyles> = {
	blue: {
		bg: "bg-blue-31",
		textColor: "text-beige-92",
		buttonColor: "yellow",
	},
	green: {
		bg: "bg-green-27",
		textColor: "text-beige-92",
		buttonColor: "yellow",
	},
	purple: {
		bg: "bg-purple-57",
		textColor: "text-beige-92",
		buttonColor: "yellow",
	},
	yellow: {
		bg: "bg-yellow-50",
		textColor: "text-black",
		buttonColor: "blue",
	},
	red: {
		bg: "bg-red-45",
		textColor: "text-beige-92",
		buttonColor: "yellow",
	},
}

export function getColorVariantStyles(color: ColorVariant) {
	return colorVariantMap[color]
}

export function getColorVariant(selectField?: string): ColorVariant {
	return (selectField?.toLowerCase() ?? "blue") as ColorVariant
}
