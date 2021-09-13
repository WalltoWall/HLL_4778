import {
	GetStaticPathsContext,
	InferGetStaticPropsType,
	GetStaticPropsContext,
} from "next"
import { BoundedBox } from "../components/BoundedBox"
import { createPrismicClient } from "../prismic/client"
import { findAllPages } from "../prismic/page"

const PageTemplate = ({
	uid,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return <BoundedBox tag="section">{uid}</BoundedBox>
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
	return {
		props: {
			uid: ctx.params?.uid,
		},
	}
}

export default PageTemplate
