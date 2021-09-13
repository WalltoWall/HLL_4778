import { Client } from "@prismicio/client"
import type * as pt from "@prismicio/types"
import type { GradientTextSlice } from "../slices/GradientText"

const TYPE = "page"

export type PageSlices = pt.SliceZone<GradientTextSlice>

export type Page = pt.PrismicDocument<{
	title: pt.TitleField
	meta_title: pt.KeyTextField
	meta_description: pt.KeyTextField
	redirect_to: pt.LinkField
	redirect_is_permanent: pt.BooleanField
	body: PageSlices
}>

export async function findAllPages(client: Client): Promise<Page[]> {
	return await client.getAllByType<Page>(TYPE)
}

export async function findOnePage(client: Client, uid: string): Promise<Page> {
	return await client.getByUID<Page>(TYPE, uid)
}
