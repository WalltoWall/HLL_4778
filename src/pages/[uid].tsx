import type {
	GetStaticPathsContext,
	InferGetStaticPropsType,
	GetStaticPropsContext,
} from "next"
import { asText } from "@prismicio/helpers"
import assert from "tiny-invariant"
import {
	MapToComponents,
	MapToComponentsProps,
	TCtx,
} from "react-map-to-components"
import type * as pt from "@prismicio/types"

import { createPrismicClient } from "../prismic/client"
import { findAllPages, findOnePage } from "../prismic/page"
import { findSettings } from "../prismic/settings"
import { SEO } from "../components/SEO"
import { Layout } from "../components/Layout"

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

const getSliceKey: MapToComponentsProps["getKey"] = (slice: pt.Slice, idx) => {
	return `${slice.slice_type}-${idx}`
}

const getSliceType: MapToComponentsProps["getType"] = (slice: pt.Slice) => {
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

const PageTemplate = ({
	siteName,
	siteDescription,
	pageTitle,
	metaDescription,
	metaTitle,
	slices,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<Layout>
			<SEO
				metaTitle={metaTitle ?? undefined}
				metaDescription={metaDescription ?? undefined}
				siteName={siteName}
				siteDescription={siteDescription}
				pageTitle={pageTitle}
			/>

			<MapToComponents
				getKey={getSliceKey}
				getType={getSliceType}
				map={pageTemplateSliceMap}
				mapDataToProps={mapDataToPropsMap}
				list={slices}
				default={pageTemplateFallback}
			/>
		</Layout>
	)
}

export async function getStaticPaths(_ctx: GetStaticPathsContext) {
	const client = createPrismicClient()
	const pages = await findAllPages(client)

	const paths = pages.map((page) => ({
		params: { uid: page.uid },
	}))

	return {
		paths,
		fallback: "blocking",
	}
}

export async function getStaticProps(
	ctx: GetStaticPropsContext<{ uid: string }>
) {
	const uid = ctx.params?.uid
	assert(uid, "Did not receive a valid Prismic Document with a uid field")

	const client = createPrismicClient()
	const [settings, page] = await Promise.all([
		findSettings(client),
		findOnePage(client, uid),
	])

	return {
		props: {
			siteName: asText(settings.data.site_name),
			siteDescription: asText(settings.data.site_description),
			pageTitle: asText(page.data.title),
			metaTitle: page.data.meta_title,
			metaDescription: page.data.meta_description,
			slices: page.data.body,
		},
	}
}

export default PageTemplate
