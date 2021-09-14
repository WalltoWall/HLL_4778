import type * as pt from "@prismicio/types"

export type ColorVariant = "blue" | "red" | "yellow" | "green" | "purple"

export function getColorVariant(
	selectField: pt.SelectField<ColorVariant>
): ColorVariant {
	return selectField?.toLowerCase() as ColorVariant
}
