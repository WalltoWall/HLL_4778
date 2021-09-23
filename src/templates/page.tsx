import * as React from "react"
import {
	MapToComponents,
	MapToComponentsProps,
	TCtx,
	TCtxWithContext,
} from "react-map-to-components"
import { graphql, PageProps } from "gatsby"

import { SEO } from "../components/SEO"
import { Layout } from "../components/Layout"

import type { PageTemplateQuery } from "../gqlTypes.gen"

import * as GradientText from "../slices/GradientText"
import * as VideoHero from "../slices/VideoHero"
import * as Introduction from "../slices/Introduction"
import * as FilterableEvents from "../slices/FilterableEvents"
import * as CallToActionCard from "../slices/CallToActionCard"
import * as TwoColumnText from "../slices/TwoColumnText"
import * as ImageCallToAction from "../slices/ImageCallToAction"
import * as CallToAction from "../slices/CallToAction"
import * as NewsletterForm from "../slices/NewsletterForm"
import * as Sponsors from "../slices/Sponsors"
import * as Anchor from "../slices/Anchor"
import {
	mapDataToContextFactory,
	mapDataToPropsFactory,
	mapFactory,
	SliceMap,
} from "../lib/sliceFactories"

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
}

const map = mapFactory(sliceMap)
const mapDataToProps = mapDataToPropsFactory(sliceMap)
const mapDataToContext = mapDataToContextFactory(sliceMap)

interface PrismicSlice {
	__typename: string
}

const getSliceKey: MapToComponentsProps["getKey"] = (
	slice: PrismicSlice,
	idx
) => {
	return `${slice.__typename}-${idx}`
}

const getSliceType: MapToComponentsProps["getType"] = (slice: PrismicSlice) => {
	return slice.__typename
}

const pageTemplateFallback: MapToComponentsProps["default"] = (data) => {
	if (process.env.NODE_ENV === "development") {
		console.error(
			`Could not find a component mapping for type: ${data.__typename}`
		)
	}

	return null
}

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

const PageTemplate = ({ data }: PageProps<PageTemplateQuery>) => {
	const page = data.prismicPage

	return (
		<Layout>
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
				list={page?.data?.body ?? []}
				default={pageTemplateFallback}
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
				}
			}
			uid
			url
		}
	}
`

export default PageTemplate
