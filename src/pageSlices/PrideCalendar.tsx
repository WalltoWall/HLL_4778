import * as React from "react"
import { graphql } from "gatsby"
import clsx from "clsx"
import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import { getColorVariant, getColorVariantStyles } from "../lib/colorVariant"
import { resolvePrevContext, resolveNextContext } from "../lib/mapToComponents"
import { HTMLContent } from "../components/HTMLContent"
import { BoundedBox } from "../components/BoundedBox"
import type { PrideCalendarFragment } from "../gqlTypes.gen"

export const sliceType = "PrismicPageDataBodyPrideCalendar"

const PrideCalendar = ({
	color,
	nextOverhangs,
	nextSharesBg,
	previousOverhangs,
}: ReturnType<typeof mapDataToProps>) => {
	const variantStyles = getColorVariantStyles(color)

	return (
		<BoundedBox
			tag="section"
			className={clsx(variantStyles.bg)}
			nextSharesBg={nextSharesBg}
			nextOverhangs={nextOverhangs}
			previousOverhangs={previousOverhangs}
		>
			Pride Calendar
		</BoundedBox>
	)
}

export function mapDataToProps({
	data,
	nextContext,
	previousContext,
}: MapDataToPropsCtx<PrideCalendarFragment>) {
	const color = getColorVariant(data.primary?.color)
	const prevCtx = resolvePrevContext(previousContext)
	const nextCtx = resolveNextContext(nextContext)

	return {
		color,
		nextSharesBg: nextContext?.backgroundColor === color,
		previousOverhangs: prevCtx?.overhangsNext,
		nextOverhangs: nextCtx?.overhangsPrevious,
	}
}

export function mapDataToContext({
	data,
}: MapDataToContextCtx<PrideCalendarFragment>) {
	return {
		backgroundColor: getColorVariant(data.primary?.color),
	}
}

export const gqlFragment = graphql`
	fragment PrideCalendar on PrismicPageDataBodyPrideCalendar {
		primary {
			color
			text {
				html
			}
		}
		items {
			event_description {
				html
			}
			event_link {
				url
			}
			event_title {
				text
			}
			image {
				alt
				url
			}
		}
	}
`

export default PrideCalendar
