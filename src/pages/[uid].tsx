import {
	GetStaticPathsContext,
	InferGetStaticPropsType,
	GetStaticPropsContext,
} from "next"
import Head from "next/head"
import { BoundedBox } from "../components/BoundedBox"
import { createPrismicClient } from "../prismic/client"
import { findAllPages, findOnePage } from "../prismic/page"
import { asText } from "@prismicio/helpers"
import assert from "tiny-invariant"
import { findSettings } from "../prismic/settings"

const PageTemplate = ({
	uid,
	siteName,
	pageTitle,
	metaDescription,
	metaTitle,
	slices,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Head>
				<title>
					{metaTitle ?? pageTitle} | {siteName}
				</title>
				{metaDescription && (
					<meta name="description" content={metaDescription} />
				)}
			</Head>

			<BoundedBox tag="section">{uid}</BoundedBox>
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

	// TODO: Handle redirects somehow

	return {
		props: {
			uid,
			siteName: asText(settings.data.site_name),
			pageTitle: asText(page.data.title),
			metaTitle: page.data.meta_title,
			metaDescription: page.data.meta_description,
			slices: [],
		},
	}
}

export default PageTemplate
