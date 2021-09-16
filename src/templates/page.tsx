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
import * as Carousel from "../slices/Carousel"
import * as TwoColumnText from "../slices/TwoColumnText"

const pageTemplateSliceMap: MapToComponentsProps["map"] = {
	[VideoHero.sliceType]: VideoHero.default as React.ComponentType,
	[GradientText.sliceType]: GradientText.default as React.ComponentType,
	[Introduction.sliceType]: Introduction.default as React.ComponentType,
	[FilterableEvents.sliceType]: FilterableEvents.default as React.ComponentType,
	[Carousel.sliceType]: Carousel.default as React.ComponentType,
	[TwoColumnText.sliceType]: TwoColumnText.default as React.ComponentType,
}

const mapDataToPropsMap: MapToComponentsProps["mapDataToProps"] = {
	[VideoHero.sliceType]: VideoHero.mapDataToProps,
	[GradientText.sliceType]: GradientText.mapDataToProps,
	[Introduction.sliceType]: Introduction.mapDataToProps,
	[FilterableEvents.sliceType]: FilterableEvents.mapDataToProps,
	[Carousel.sliceType]: Carousel.mapDataToProps,
	[TwoColumnText.sliceType]: TwoColumnText.mapDataToProps,
}

const mapDataToContextMap: MapToComponentsProps["mapDataToContext"] = {
	[Introduction.sliceType]: Introduction.mapDataToContext,
	[FilterableEvents.sliceType]: FilterableEvents.mapDataToContext,
	[TwoColumnText.sliceType]: TwoColumnText.mapDataToContext,
}

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

export type MapDataToPropsCtx<TData> = TCtxWithContext<
	keyof typeof pageTemplateSliceMap,
	typeof pageTemplateSliceMap,
	TData,
	unknown,
	Record<string, unknown>
>

export type MapDataToContextCtx<TData> = TCtx<
	keyof typeof pageTemplateSliceMap,
	typeof pageTemplateSliceMap,
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
				map={pageTemplateSliceMap}
				mapDataToProps={mapDataToPropsMap}
				mapDataToContext={mapDataToContextMap}
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
					...Carousel
					...TwoColumnText
				}
			}
			uid
			url
		}
	}
`

export default PageTemplate
