import { ClientConfig, createClient, getEndpoint } from "@prismicio/client"
import {
	LinkResolverFunction,
	HTMLFunctionSerializer,
	Element,
} from "@prismicio/helpers"
import { PRISMIC_ACCESS_TOKEN, PRISMIC_REPOSITORY_NAME } from "../constants"

export function createPrismicClient(ref?: ClientConfig["ref"]) {
	const endpoint = getEndpoint(PRISMIC_REPOSITORY_NAME)
	const client = createClient(endpoint, {
		accessToken: PRISMIC_ACCESS_TOKEN,
		ref,
	})

	return client
}

export const linkResolver: LinkResolverFunction = (doc) => {
	if (doc.uid === "home") return "/"

	return `/${doc.uid}`
}

export const htmlSerializer: HTMLFunctionSerializer = (
	type,
	node,
	text,
	children
) => {
	switch (type) {
		default:
			return null
	}
}
