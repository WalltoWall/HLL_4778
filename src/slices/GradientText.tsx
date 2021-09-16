import * as React from "react"
import clsx from "clsx"
import { graphql } from "gatsby"

import type { MapDataToPropsCtx } from "../templates/page"
import type { GradientTextFragment } from "../gqlTypes.gen"

import { Gradient } from "../components/Gradient"
import { serif } from "../typography"

export const sliceType = "PrismicPageDataBodyGradientText"

const GradientText = ({ text }: ReturnType<typeof mapDataToProps>) => {
	return (
		<section className="relative aspect-w-10 aspect-h-16">
			<Gradient className="absolute inset-0" />

			<div className="flex items-center justify-center w-full h-full px-8">
				<h2 className={clsx(serif, "relative text-beige-92 text-center")}>
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
