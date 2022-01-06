import * as React from "react"
import type { ComponentStory, ComponentMeta } from "@storybook/react"
import Introduction from "../../pageSlices/Introduction"
import { html, hidden, string, words, colorVariants, sentences } from "../utils"

export default {
	title: "Slices/Introduction",
	component: Introduction,
	argTypes: {
		heading: string({
			name: "Heading",
			description: "Large text shown in highlighted box",
		}),
		textHTML: string({
			name: "Text",
			description: "Body text shown below highlighted box",
		}),
		nextSharesBg: hidden(),
		color: colorVariants(),
	},
} as ComponentMeta<typeof Introduction>

const Template: ComponentStory<typeof Introduction> = (args) => (
	<Introduction {...args} />
)

export const Default = Template.bind({})
Default.args = {
	heading: words(5),
	textHTML: html`<p>${sentences(1)}</p>`,
	color: "blue",
}
