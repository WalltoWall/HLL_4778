import * as React from "react"
import type { ComponentStory, ComponentMeta } from "@storybook/react"
import RichText from "../../pageSlices/RichText"
import { colorVariants, hidden, string, words, html, sentences } from "../utils"

export default {
	title: "Slices/Rich Text",
	component: RichText,
	argTypes: {
		textHTML: string({
			name: "Text",
			description: "Rich text with formatting shown in block",
		}),
		buttonText: string({
			name: "Button Text",
			description: "Text shown in button",
			required: false,
		}),
		buttonHref: string({
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
} as ComponentMeta<typeof RichText>

const Template: ComponentStory<typeof RichText> = (args) => (
	<RichText {...args} />
)

export const Default = Template.bind({})
Default.args = {
	textHTML: html`
		<h2>${words(8)}</h2>
		<p>${sentences(3)}</p>
	`,
	buttonText: words(2),
	buttonHref: "#",
	color: "blue",
}

export const AlternativeTextStyles = Template.bind({})
AlternativeTextStyles.args = {
	textHTML: html`
		<h2>${words(3)}</h2>
		<h4>${words(8)}</h4>
		<h5>${words(3)}</h5>
		<p>${sentences(3)}</p>
	`,
	buttonText: words(2),
	buttonHref: "#",
	color: "green",
}
