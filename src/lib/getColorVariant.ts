export type ColorVariant = "blue" | "red" | "yellow" | "green" | "purple"

export function getColorVariant(selectField?: string): ColorVariant {
	return (selectField?.toLowerCase() ?? "blue") as ColorVariant
}
