import * as React from "react"
import { MapToComponents, TCtx, TCtxWithContext } from "react-map-to-components"
import { graphql, PageProps } from "gatsby"

import { SEO } from "../components/SEO"
import { Layout } from "../components/Layout"

import type { PageTemplateQuery } from "../gqlTypes.gen"

import * as GradientText from "../pageSlices/GradientText"
import * as VideoHero from "../pageSlices/VideoHero"
import * as Introduction from "../pageSlices/Introduction"
import * as FilterableEvents from "../pageSlices/FilterableEvents"
import * as CallToActionCard from "../pageSlices/CallToActionCard"
import * as TwoColumnText from "../pageSlices/TwoColumnText"
import * as ImageCallToAction from "../pageSlices/ImageCallToAction"
import * as CallToAction from "../pageSlices/CallToAction"
import * as NewsletterForm from "../pageSlices/NewsletterForm"
import * as Sponsors from "../pageSlices/Sponsors"
import * as Anchor from "../pageSlices/Anchor"
import * as RichText from "../pageSlices/RichText"
import * as Video from "../pageSlices/Video"

import {
	mapDataToContextFactory,
	mapDataToPropsFactory,
	mapFactory,
	SliceMap,
	fallbackSlice,
	getSliceKey,
	getSliceType,
} from "../lib/mapToComponents"

export type MapDataToPropsCtx<
	TData,
	TCtx extends Record<string, unknown> = Record<string, unknown>
> = TCtxWithContext<keyof typeof map, typeof map, TData, unknown, TCtx>

export type MapDataToContextCtx<TData> = TCtx<
	keyof typeof map,
	typeof map,
	TData,
	unknown
>

const sliceMap: SliceMap = {
	VideoHero,
	GradientText,
	Introduction,
	FilterableEvents,
	CallToActionCard,
	TwoColumnText,
	ImageCallToAction,
	CallToAction,
	NewsletterForm,
	Sponsors,
	Anchor,
	RichText,
	Video,
}

const map = mapFactory(sliceMap)
const mapDataToProps = mapDataToPropsFactory(sliceMap)
const mapDataToContext = mapDataToContextFactory(sliceMap)

const PageTemplate = ({ data }: PageProps<PageTemplateQuery>) => {
	const page = data.prismicPage

	const sliceList = page?.data?.body ?? []
	const lastSlice = sliceList[sliceList.length - 1]

	return (
		<Layout
			lastOverhangs={
				lastSlice?.__typename === "PrismicPageDataBodyNewsletterForm"
			}
		>
			<SEO
				metaTitle={page?.data?.meta_title}
				metaDescription={page?.data?.meta_description}
				pageTitle={page?.data?.title?.text ?? "Honolulu Pride"}
			/>

			<MapToComponents
				getKey={getSliceKey}
				getType={getSliceType}
				map={map}
				mapDataToProps={mapDataToProps}
				mapDataToContext={mapDataToContext}
				list={sliceList}
				default={fallbackSlice}
			/>
		</Layout>
	)
}

export const pageTemplateQuery = graphql`
	query PageTemplate($uid: String!) {
		prismicPage(uid: { eq: $uid }) {
			_previewable
			data {
				meta_description
				meta_title
				title {
					text
				}

				body {
					__typename
					...VideoHero
					...GradientText
					...Introduction
					...FilterableEvents
					...CallToActionCard
					...TwoColumnText
					...ImageCallToAction
					...CallToAction
					...NewsletterForm
					...Sponsors
					...Anchor
					...RichText
					...Video
				}
			}
			uid
			url
		}
	}
`

export default PageTemplate
