import * as React from "react"
import type { ComponentStory, ComponentMeta } from "@storybook/react"
import TwoColumnText from "../../pageSlices/TwoColumnText"
import {
	colorVariants,
	hidden,
	string,
	words,
	html,
	paragraphs,
} from "../utils"
import { stripIndents } from "common-tags"

export default {
	title: "Slices/Two Column Text",
	component: TwoColumnText,
	argTypes: {
		leftHTML: string({
			name: "Left Text",
			description: stripIndents`
        Rich text with formatting shown in left-hand side of slice. On mobile
        devices, this will be on top.
      `,
		}),
		rightHTML: string({
			name: "Right Text",
			description: stripIndents`
        Rich text with formatting shown in right-hand side of slice. On mobile
        devices, this will be on bottom.
      `,
		}),
		buttonSide: string({
			name: "Button Side",
			description: "Side of the slice the button will be displayed",
			options: ["left", "right"],
			defaultValue: "left",
			required: false,
		}),
		buttonText: string({
			name: "Button Text",
			description: "Text shown in button",
			required: false,
		}),
		buttonURL: string({
			description: "Link for the button",
			name: "Button Link",
			control: false,
			required: false,
		}),
		color: colorVariants(),
		nextSharesBg: hidden(),
		nextOverhangs: hidden(),
		previousOverhangs: hidden(),
	},
} as ComponentMeta<typeof TwoColumnText>

const Template: ComponentStory<typeof TwoColumnText> = (args) => (
	<TwoColumnText {...args} />
)

export const Default = Template.bind({})
Default.args = {
	leftHTML: html` <h2>${words(10)}</h2> `,
	rightHTML: html`
		<h4>${words(8)}</h4>
		<p>${paragraphs(1)}</p>
		<p>${paragraphs(1)}</p>
	`,
	buttonSide: "left",
	buttonText: words(2),
	buttonURL: "#",
	color: "blue",
}

export const Alternative = Template.bind({})
Alternative.args = {
	rightHTML: html`<h2>${words(10)}</h2>`,
	leftHTML: html`
		<h5>${words(5)}</h5>
		<p>${paragraphs(1)}</p>
		<p>${paragraphs(1)}</p>
	`,
	buttonSide: "right",
	buttonText: words(2),
	buttonURL: "#",
	color: "green",
}
