import * as React from "react"
import type { ComponentStory, ComponentMeta } from "@storybook/react"
import FeaturedPeople from "../../pageSlices/FeaturedPeople"
import {
	colorVariants,
	hidden,
	html,
	list,
	sentences,
	string,
	words,
} from "../utils"

export default {
	title: "Slices/Featured People",
	component: FeaturedPeople,
	argTypes: {
		subheading: string({
			name: "Subheading",
			description: "Caps text at the top of the slice",
		}),
		heading: string({
			name: "Heading",
			description: "Large text at the top of the slice",
		}),
		people: list({
			name: "People",
			description: "People to show in the slice",
		}),
		color: colorVariants(),
		nextOverhangs: hidden(),
		previousOverhangs: hidden(),
		nextSharesBg: hidden(),
	},
} as ComponentMeta<typeof FeaturedPeople>

const Template: ComponentStory<typeof FeaturedPeople> = (args) => (
	<FeaturedPeople {...args} />
)

export const Default = Template.bind({})
Default.args = {
	subheading: words(3),
	heading: words(3),
	color: "yellow",
	people: [
		{
			name: words(2),
			title: words(4),
			bioHTML: html`<p>${sentences(2)}</p>`,
			instagramHandle: words(1),
			instagramHref: "#",
			websiteLabel: words(1),
			websiteHref: "#",
			pronouns: "They/Them",
			imageURL:
				"https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
			imageAlt: "",
		},
		{
			name: words(2),
			title: words(4),
			bioHTML: html`<p>${sentences(2)}</p>`,
			instagramHandle: words(1),
			instagramHref: "#",
			websiteLabel: words(1),
			websiteHref: "#",
			pronouns: "She/Her",
			imageURL:
				"https://images.unsplash.com/photo-1599900554895-5e0fc7bbc9c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXNpYW4lMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			imageAlt: "",
		},
		{
			name: words(2),
			title: words(4),
			bioHTML: html`<p>${sentences(2)}</p>`,
			instagramHandle: words(1),
			instagramHref: "#",
			websiteLabel: words(1),
			websiteHref: "#",
			pronouns: "He/Him",
			imageURL:
				"https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
			imageAlt: "",
		},
	],
}
