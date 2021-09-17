import * as React from "react"
import clsx from "clsx"
import { graphql } from "gatsby"

import type { MapDataToPropsCtx } from "../templates/page"
import type { GradientTextFragment } from "../gqlTypes.gen"

import { Gradient } from "../components/Gradient"

export const sliceType = "PrismicPageDataBodyGradientText"

const GradientText = ({ text }: ReturnType<typeof mapDataToProps>) => {
	return (
		<section
			className={clsx(
				"relative aspect-w-10 aspect-h-16",
				"md:aspect-w-16 md:aspect-h-9",
				"2xl:aspect-none 2xl:h-[900px]",
				"2xl:relative"
			)}
		>
			<Gradient className="absolute inset-0 2xl:absolute 2xl:inset-0 2xl:w-full 2xl:h-full" />

			<div
				className={clsx(
					"flex items-center justify-center w-full h-full px-8",
					"2xl:w-full 2xl:h-full"
				)}
			>
				<h2
					className={clsx(
						"font-serif leading-1_2",
						"text-24 md:text-32 lg:text-42",
						"relative text-beige-92 text-center",
						"mx-auto",
						"max-w-[600px]"
					)}
				>
					{text}
				</h2>
			</div>
		</section>
	)
}

export function mapDataToProps({
	data,
}: MapDataToPropsCtx<GradientTextFragment>) {
	return {
		text: data.primary?.text?.text,
	}
}

export const gqlFragment = graphql`
	fragment GradientText on PrismicPageDataBodyGradientText {
		primary {
			text {
				text
			}
		}
	}
`

export default GradientText
