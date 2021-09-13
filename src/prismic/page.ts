import { Client } from "@prismicio/client"
import * as pt from "@prismicio/types"

export type Page = pt.PrismicDocument<{
	meta_title: pt.KeyTextField
	meta_description: pt.KeyTextField
	redirect_to: pt.LinkField
	redirect_is_permanent: pt.BooleanField
}>

export async function findAllPages(client: Client): Promise<Page[]> {
	return await client.getAllByType<Page>("page")
}
