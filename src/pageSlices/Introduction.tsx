import * as React from "react"
import { graphql } from "gatsby"
import clsx from "clsx"
import { undefIfEmpty } from "@walltowall/helpers"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { IntroductionFragment } from "../gqlTypes.gen"

import {
	ColorVariant,
	getColorVariant,
	getColorVariantStyles,
} from "../lib/colorVariant"
import { BoundedBox } from "../components/BoundedBox"
import { HTMLContent } from "../components/HTMLContent"

import * as styles from "./Introduction.module.css"

export const sliceType = "PrismicPageDataBodyIntroduction"

interface IntroductionVariant {
	headingBg: string
}

const introductionVariants: Record<ColorVariant, IntroductionVariant> = {
	blue: { headingBg: "bg-yellow-50" },
	green: { headingBg: "bg-yellow-50" },
	purple: { headingBg: "bg-yellow-50" },
	yellow: { headingBg: "bg-blue-31" },
	red: { headingBg: "bg-yellow-50" },
	gray: { headingBg: "bg-yellow-50" },
	orange: { headingBg: "bg-yellow-50" },
}

const Introduction = ({
	textHTML,
	heading = "",
	color,
	nextSharesBg = false,
}: ReturnType<typeof mapDataToProps>) => {
	const variant = introductionVariants[color]
	const variantStyles = getColorVariantStyles(color)

	return (
		<BoundedBox
			tag="section"
			className={clsx(variantStyles.bg, "!pb-20")}
			nextSharesBg={nextSharesBg}
		>
			<div className="max-w-[560px] space-y-5 md:space-y-8 lg:space-y-12">
				{heading && (
					<div className="relative">
						<div
							aria-hidden
							className={clsx(
								"absolute",
								"-left-5 md:-left-8 lg:-left-15",
								"right-0",
								"-top-5 lg:-top-8",
								"bottom-2 lg:bottom-3",
								variant.headingBg
							)}
						/>

						<h2
							className={clsx(
								"font-serif leading-1",
								"text-42 md:text-52 lg:text-62",
								"isolate text-gray-13"
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
						className={clsx("max-w-xs", variantStyles.textColor)}
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
	const color = getColorVariant(data.primary?.color)

	return {
		heading: data.primary?.heading?.text,
		textHTML: undefIfEmpty(data.primary?.text?.html),
		color,
		nextSharesBg: nextContext?.backgroundColor === color,
	}
}

export function mapDataToContext({
	data,
}: MapDataToContextCtx<IntroductionFragment>) {
	return {
		backgroundColor: getColorVariant(data.primary?.color),
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
