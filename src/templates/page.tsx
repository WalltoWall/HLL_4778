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
import * as ImageCallToAction from "../slices/ImageCallToAction"
import * as CallToAction from "../slices/CallToAction"
import * as NewsletterForm from "../slices/NewsletterForm"
import * as Sponsors from "../slices/Sponsors"

const pageTemplateSliceMap: MapToComponentsProps["map"] = {
	[VideoHero.sliceType]: VideoHero.default as React.ComponentType,
	[GradientText.sliceType]: GradientText.default as React.ComponentType,
	[Introduction.sliceType]: Introduction.default as React.ComponentType,
	[FilterableEvents.sliceType]: FilterableEvents.default as React.ComponentType,
	[Carousel.sliceType]: Carousel.default as React.ComponentType,
	[TwoColumnText.sliceType]: TwoColumnText.default as React.ComponentType,
	[ImageCallToAction.sliceType]:
		ImageCallToAction.default as React.ComponentType,
	[CallToAction.sliceType]: CallToAction.default as React.ComponentType,
	[NewsletterForm.sliceType]: NewsletterForm.default as React.ComponentType,
	[Sponsors.sliceType]: Sponsors.default as React.ComponentType,
}

const mapDataToPropsMap: MapToComponentsProps["mapDataToProps"] = {
	[VideoHero.sliceType]: VideoHero.mapDataToProps,
	[GradientText.sliceType]: GradientText.mapDataToProps,
	[Introduction.sliceType]: Introduction.mapDataToProps,
	[FilterableEvents.sliceType]: FilterableEvents.mapDataToProps,
	[Carousel.sliceType]: Carousel.mapDataToProps,
	[TwoColumnText.sliceType]: TwoColumnText.mapDataToProps,
	[ImageCallToAction.sliceType]: ImageCallToAction.mapDataToProps,
	[CallToAction.sliceType]: CallToAction.mapDataToProps,
	[NewsletterForm.sliceType]: NewsletterForm.mapDataToProps,
	[Sponsors.sliceType]: Sponsors.mapDataToProps,
}

const mapDataToContextMap: MapToComponentsProps["mapDataToContext"] = {
	[Introduction.sliceType]: Introduction.mapDataToContext,
	[FilterableEvents.sliceType]: FilterableEvents.mapDataToContext,
	[TwoColumnText.sliceType]: TwoColumnText.mapDataToContext,
	[ImageCallToAction.sliceType]: ImageCallToAction.mapDataToContext,
	[NewsletterForm.sliceType]: NewsletterForm.mapDataToContext,
	[CallToAction.sliceType]: CallToAction.mapDataToContext,
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

export type MapDataToPropsCtx<
	TData,
	TCtx extends Record<string, unknown> = Record<string, unknown>
> = TCtxWithContext<
	keyof typeof pageTemplateSliceMap,
	typeof pageTemplateSliceMap,
	TData,
	unknown,
	TCtx
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
					...ImageCallToAction
					...CallToAction
					...NewsletterForm
					...Sponsors
				}
			}
			uid
			url
		}
	}
`

export default PageTemplate
