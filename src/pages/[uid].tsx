import {
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
import * as GradientText from "../slices/GradientText"
import { SEO } from "../components/SEO"

const pageTemplateSliceMap: MapToComponentsProps["map"] = {
	[GradientText.sliceType]: GradientText.default as React.ComponentType,
}

const mapDataToPropsMap: MapToComponentsProps["mapDataToProps"] = {
	[GradientText.sliceType]: GradientText.mapDataToProps,
}

const getSliceKey: MapToComponentsProps["getKey"] = (slice: pt.Slice, idx) => {
	return `${slice.slice_type}-${idx}`
}

const getSliceType: MapToComponentsProps["getType"] = (slice: pt.Slice) => {
	return slice.slice_type
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
		<>
			<SEO
				metaTitle={metaTitle}
				metaDescription={metaDescription}
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
			/>
		</>
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
			metaTitle: page.data.meta_title ?? undefined,
			metaDescription: page.data.meta_description ?? undefined,
			slices: page.data.body,
		},
	}
}

export default PageTemplate
