import * as React from "react"
import {
	MapToComponents,
	MapToComponentsProps,
	TCtx,
} from "react-map-to-components"
import { graphql, PageProps } from "gatsby"

import { SEO } from "../components/SEO"
import { Layout } from "../components/Layout"

import type { PageTemplateQuery, PrismicSliceType } from "../gqlTypes.gen"

import * as GradientText from "../slices/GradientText"
import * as VideoHero from "../slices/VideoHero"
import * as Introduction from "../slices/Introduction"
import * as FilterableEvents from "../slices/FilterableEvents"

const pageTemplateSliceMap: MapToComponentsProps["map"] = {
	[VideoHero.sliceType]: VideoHero.default as React.ComponentType,
	[GradientText.sliceType]: GradientText.default as React.ComponentType,
	[Introduction.sliceType]: Introduction.default as React.ComponentType,
	[FilterableEvents.sliceType]: FilterableEvents.default as React.ComponentType,
}

const mapDataToPropsMap: MapToComponentsProps["mapDataToProps"] = {
	[VideoHero.sliceType]: VideoHero.mapDataToProps,
	[GradientText.sliceType]: GradientText.mapDataToProps,
	[Introduction.sliceType]: Introduction.mapDataToProps,
	[FilterableEvents.sliceType]: FilterableEvents.mapDataToProps,
}

const getSliceKey: MapToComponentsProps["getKey"] = (
	slice: PrismicSliceType,
	idx
) => {
	return `${slice.slice_type}-${idx}`
}

const getSliceType: MapToComponentsProps["getType"] = (
	slice: PrismicSliceType
) => {
	return slice.slice_type
}

const pageTemplateFallback: MapToComponentsProps["default"] = (data) => {
	if (process.env.NODE_ENV === "development") {
		console.error(`Could not find a component mapping for type: ${data.type}`)
	}

	return null
}

export type MapDataToPropsCtx<TData> = TCtx<
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
				}
			}
			uid
			url
		}
	}
`

export default PageTemplate
