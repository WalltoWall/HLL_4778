import { Client } from "@prismicio/client"
import type * as pt from "@prismicio/types"

const TYPE = "settings"

export type Settings = pt.PrismicDocument<{
	title: pt.TitleField
	site_name: pt.TitleField
	site_description: pt.RichTextField
	site_copyright: pt.RichTextField
	site_disclaimer: pt.RichTextField
	redirects: pt.GroupField<{
		from_path: pt.KeyTextField
		to_path: pt.KeyTextField
		is_permanent: pt.BooleanField
	}>
}>

export async function findSettings(client: Client): Promise<Settings> {
	return await client.getSingle<Settings>(TYPE)
}
