import { loremIpsum } from "lorem-ipsum"

export function titleize(string: string) {
	if (typeof string !== "string") {
		throw new TypeError("Expected a string")
	}

	return string.toLowerCase().replace(/(?:^|\s|-)\S/g, (x) => x.toUpperCase())
}

export function words(count: number) {
	return titleize(loremIpsum({ count, units: "words" }))
}

export function sentences(count: number) {
	return loremIpsum({ count, units: "sentence" })
}

export function paragraphs(count: number) {
	return loremIpsum({ count, units: "paragraph" })
}

interface StringArgs {
	name: string
	description: string
	defaultValue?: string
	control?: boolean
	required?: boolean
	options?: string[]
}

export function string({
	name,
	description,
	defaultValue = "None",
	control = true,
	required = true,
	options,
}: StringArgs) {
	const result = {
		name,
		description,
		type: { name: "string", required },
		table: { type: false, defaultValue: { summary: defaultValue } },
		options,
	}

	//@ts-ignore
	if (!control) result.control = false

	return result
}

export function hidden() {
	return { table: { disable: true } }
}

export function colorVariants() {
	return {
		name: "Color",
		description: "Color scheme for the slice",
		type: { name: "string", required: true },
		table: { type: false, defaultValue: { summary: "blue" } },
		options: ["blue", "red", "yellow", "green", "purple", "gray", "orange"],
		control: "select",
	}
}

interface ImageArgs {
	name?: string
	description?: string
}
export function image({
	name = "Image",
	description = "Image shown for the slice",
}: ImageArgs = {}) {
	return {
		name,
		description,
		type: { required: true, name: "string" },
		table: { type: false, defaultValue: { summary: "none" } },
		control: false,
	}
}

interface ListArgs {
	name: string
	description: string
}
export function list({ name, description }: ListArgs) {
	return {
		name,
		description,
		table: { type: false },
		control: false,
	}
}

export const placeholderVideoURL =
	"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"

export { stripIndents as html } from "common-tags"
