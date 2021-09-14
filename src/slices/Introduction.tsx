import { asHTML, asText } from "@prismicio/helpers"
import type * as pt from "@prismicio/types"

import type { MapDataToPropsCtx } from "../pages/[uid]"
import { ColorVariant, getColorVariant } from "../lib/getColorVariant"
import { BoundedBox } from "../components/BoundedBox"
import { HTMLContent } from "../components/HTMLContent"
import clsx from "clsx"
import { serifLarge } from "../typography"

export const sliceType = "introduction"

export type IntroductionSlice = pt.Slice<
	typeof sliceType,
	{
		heading: pt.TitleField
		text: pt.RichTextField
		color: pt.SelectField<ColorVariant>
	}
>

interface IntroductionVariant {
	bg: string
	headingBg: string
	text: string
}

const colorVariantMap: Record<ColorVariant, IntroductionVariant> = {
	blue: {
		bg: "bg-blue-31",
		headingBg: "bg-yellow-50",
		text: "text-beige-92",
	},
	green: {
		bg: "bg-green-27",
		headingBg: "bg-yellow-50",
		text: "text-beige-92",
	},
	purple: {
		bg: "bg-purple-57",
		headingBg: "bg-yellow-50",
		text: "text-beige-92",
	},
	yellow: {
		bg: "bg-yellow-50",
		headingBg: "bg-blue-31",
		text: "text-black",
	},
	red: {
		bg: "bg-red-45",
		headingBg: "bg-yellow-50",
		text: "text-beige-92",
	},
}

const Introduction = ({
	textHTML,
	heading,
	color,
}: ReturnType<typeof mapDataToProps>) => {
	const variant = colorVariantMap[color]

	return (
		<BoundedBox tag="section" className={clsx(variant.bg, "py-23")}>
			<div className="max-w-[280px] space-y-5">
				{heading && (
					<div className="relative">
						<div
							aria-hidden
							className={clsx(
								"absolute -left-5 right-0 -top-2",
								"h-full",
								variant.headingBg
							)}
						/>
						<h2 className={clsx(serifLarge, "isolate text-black")}>
							{heading}
						</h2>
					</div>
				)}

				{textHTML && (
					<HTMLContent
						html={textHTML}
						className={clsx("w-3/4", variant.text)}
					/>
				)}
			</div>
		</BoundedBox>
	)
}

export function mapDataToProps({ data }: MapDataToPropsCtx<IntroductionSlice>) {
	return {
		heading: asText(data.primary.heading),
		textHTML: asHTML(data.primary.text),
		color: getColorVariant(data.primary.color),
	}
}

export default Introduction
