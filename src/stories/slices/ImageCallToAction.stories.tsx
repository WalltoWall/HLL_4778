import * as React from "react"
import type { ComponentStory, ComponentMeta } from "@storybook/react"
import ImageCallToAction from "../../pageSlices/ImageCallToAction"
import {
	colorVariants,
	hidden,
	html,
	image,
	paragraphs,
	string,
	words,
} from "../utils"

export default {
	title: "Slices/Image Call To Action",
	component: ImageCallToAction,
	argTypes: {
		textHTML: string({
			name: "Text",
			description: "Large text shown in slice",
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
		imageUrl: image(),
		imageAlt: hidden(),
		nextOverhangs: hidden(),
		previousOverhangs: hidden(),
		nextSharesBg: hidden(),
	},
} as ComponentMeta<typeof ImageCallToAction>

const Template: ComponentStory<typeof ImageCallToAction> = (args) => (
	<ImageCallToAction {...args} />
)

export const Default = Template.bind({})
Default.args = {
	textHTML: html`
		<h2>${words(4)}</h2>
		<p>${paragraphs(1)}</p>
	`,
	imageUrl:
		"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80",
	buttonText: words(2),
	buttonHref: "#",
}
