import * as React from "react"
import { graphql } from "gatsby"
import clsx from "clsx"
import { undefIfEmpty } from "@walltowall/helpers"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { IntroductionFragment } from "../gqlTypes.gen"

import { ColorVariant, getColorVariant } from "../lib/getColorVariant"
import { BoundedBox } from "../components/BoundedBox"
import { HTMLContent } from "../components/HTMLContent"

import * as styles from "./Introduction.module.css"

export const sliceType = "PrismicPageDataBodyIntroduction"

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
	nextSharesBg = false,
}: ReturnType<typeof mapDataToProps>) => {
	const variant = colorVariantMap[color]

	return (
		<BoundedBox
			tag="section"
			className={clsx(variant.bg, "!pb-8")}
			nextSharesBg={nextSharesBg}
		>
			<div className="max-w-[280px] md:max-w-[320px] lg:max-w-sm space-y-5">
				{heading && (
					<div className="relative">
						<div
							aria-hidden
							className={clsx(
								"absolute",
								"-left-5 md:-left-8 lg:-left-15",
								"right-0 -top-2",
								"h-full",
								variant.headingBg
							)}
						/>
						<h2
							className={clsx(
								"font-serif leading-1",
								"text-42 md:text-52 lg:text-62",
								"isolate text-black"
							)}
						>
							{heading}
						</h2>
					</div>
				)}

				{textHTML && (
					<HTMLContent
						html={textHTML}
						htmlClassName={styles.html}
						className={clsx("w-3/4 lg:w-full", variant.text)}
					/>
				)}
			</div>
		</BoundedBox>
	)
}

export function mapDataToProps({
	data,
	nextContext,
}: MapDataToPropsCtx<IntroductionFragment>) {
	return {
		heading: data.primary?.heading?.text,
		textHTML: undefIfEmpty(data.primary?.text?.html),
		color: getColorVariant(data.primary?.color),
		nextSharesBg: nextContext?.backgroundColor === "blue",
	}
}

export function mapDataToContext(
	_ctx: MapDataToContextCtx<IntroductionFragment>
) {
	return {
		backgroundColor: "blue",
	}
}

export const gqlFragment = graphql`
	fragment Introduction on PrismicPageDataBodyIntroduction {
		primary {
			heading {
				text
			}
			text {
				html
			}
			color
		}
	}
`

export default Introduction
