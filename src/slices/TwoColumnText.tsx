import * as React from "react"
import clsx from "clsx"
import { graphql } from "gatsby"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { TwoColumnTextFragment } from "../gqlTypes.gen"
import { undefIfEmpty } from "@walltowall/helpers"
import { HTMLContent } from "../components/HTMLContent"
import { BoundedBox } from "../components/BoundedBox"

export const sliceType = "PrismicPageDataBodyTwoColumnText"

const TwoColumnText = ({
	leftHTML,
	rightHTML,
	nextSharesBg,
}: ReturnType<typeof mapDataToProps>) => {
	return (
		<BoundedBox
			className="bg-green-27"
			nextSharesBg={nextSharesBg}
			width="base"
		>
			<div
				className={clsx(
					"grid text-center gap-y-12 text-beige-92",
					"md:grid-cols-2 md:text-left md:gap-y-0",
					"md:gap-x-10 lg:gap-x-20"
				)}
			>
				{leftHTML && <HTMLContent html={leftHTML} />}
				{rightHTML && <HTMLContent html={rightHTML} />}
			</div>
		</BoundedBox>
	)
}

export function mapDataToProps({
	data,
	nextContext,
}: MapDataToPropsCtx<TwoColumnTextFragment>) {
	return {
		leftHTML: undefIfEmpty(data.primary?.left_text?.html),
		rightHTML: undefIfEmpty(data.primary?.right_text?.html),
		nextSharesBg: nextContext?.backgroundColor === "green",
	}
}

export function mapDataToContext(
	_ctx: MapDataToContextCtx<TwoColumnTextFragment>
) {
	return {
		backgroundColor: "green",
	}
}

export const gqlFragment = graphql`
	fragment TwoColumnText on PrismicPageDataBodyTwoColumnText {
		primary {
			left_text {
				html
			}
			right_text {
				html
			}
		}
	}
`

export default TwoColumnText
