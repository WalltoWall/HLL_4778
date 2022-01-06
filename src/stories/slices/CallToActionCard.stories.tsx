import * as React from "react"
import type { ComponentStory, ComponentMeta } from "@storybook/react"
import CallToActionCard from "../../pageSlices/CallToActionCard"
import { hidden, string, words, html, sentences, colorVariants } from "../utils"

export default {
	title: "Slices/Call To Action Card",
	component: CallToActionCard,
	argTypes: {
		textHTML: string({
			name: "Text",
			description: "Text shown in the block",
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
		nextOverhangs: hidden(),
		previousOverhangs: hidden(),
		nextSharesBg: hidden(),
		withTransform: hidden(),
		className: hidden(),
	},
} as ComponentMeta<typeof CallToActionCard>

const Template: ComponentStory<typeof CallToActionCard> = (args) => (
	<CallToActionCard className="!py-0 !h-auto" withTransform={false} {...args} />
)

export const Default = Template.bind({})
Default.args = {
	textHTML: html`
		<h2>${words(3)}</h2>
		<p>${sentences(2)}</p>
	`,
	buttonHref: "#",
	buttonText: words(2),
	color: "blue",
}

export const AltTextStyles = Template.bind({})
AltTextStyles.args = {
	textHTML: html`
		<h4>${words(3)}</h4>
		<h5>${words(6)}</h5>
		<p>${sentences(2)}</p>
	`,
	buttonHref: "#",
	buttonText: words(2),
	color: "green",
}
