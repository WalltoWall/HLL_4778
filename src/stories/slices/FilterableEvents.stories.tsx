import * as React from "react"
import type { ComponentStory, ComponentMeta } from "@storybook/react"
import FilterableEvents from "../../pageSlices/FilterableEvents"
import { hidden, html, list, sentences, words } from "../utils"

export default {
	title: "Slices/Filterable Events",
	component: FilterableEvents,
	argTypes: {
		events: list({
			name: "Events",
			description: "Events to show for this slice",
		}),
		nextOverhangs: hidden(),
		previousOverhangs: hidden(),
	},
} as ComponentMeta<typeof FilterableEvents>

const Template: ComponentStory<typeof FilterableEvents> = (args) => (
	<FilterableEvents {...args} />
)

export const Default = Template.bind({})
Default.args = {
	events: [
		{
			color: "blue",
			title: words(3),
			descriptionHTML: html`
				<h4>${words(5)}</h4>
				<p>${sentences(1)}</p>
			`,
			date: new Date(Date.now()),
			href: "#",
			illustration: "flag",
		},
		{
			color: "green",
			title: words(3),
			descriptionHTML: html`
				<h4>${words(5)}</h4>
				<p>${sentences(1)}</p>
			`,
			date: new Date(Date.now()),
			href: "#",
			illustration: "shaka",
		},
		{
			color: "purple",
			title: words(3),
			descriptionHTML: html`
				<h4>${words(5)}</h4>
				<p>${sentences(1)}</p>
			`,
			date: new Date(Date.now()),
			href: "#",
			illustration: "wave",
		},
		{
			color: "red",
			title: words(3),
			descriptionHTML: html`
				<h4>${words(5)}</h4>
				<p>${sentences(1)}</p>
			`,
			date: new Date(Date.now()),
			href: "#",
			illustration: "slippers",
		},
	],
}
