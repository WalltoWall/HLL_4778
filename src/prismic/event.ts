import { Client } from "@prismicio/client"
import type * as pt from "@prismicio/types"

const TYPE = "event"

export const eventFetchLinks = [
	"event.title",
	"event.description",
	"event.date",
]

export type Event = pt.PrismicDocument<{
	title: pt.TitleField
	description: pt.RichTextField
	date: pt.TimestampField
}>

export async function findAllEvents(client: Client): Promise<Event[]> {
	return await client.getAllByType<Event>(TYPE)
}

export async function findOneEvent(
	client: Client,
	uid: string
): Promise<Event> {
	return await client.getByUID<Event>(TYPE, uid)
}
