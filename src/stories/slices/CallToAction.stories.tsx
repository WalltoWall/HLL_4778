import * as React from "react"
import type { ComponentStory, ComponentMeta } from "@storybook/react"
import CallToAction from "../../pageSlices/CallToAction"
import { hidden, string, words } from "../utils"

export default {
	title: "Slices/Call To Action",
	component: CallToAction,
	argTypes: {
		heading: string({
			name: "Heading",
			description: "Large text above button",
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
		nextOverhangs: hidden(),
		previousOverhangs: hidden(),
		nextSharesBg: hidden(),
	},
} as ComponentMeta<typeof CallToAction>

const Template: ComponentStory<typeof CallToAction> = (args) => (
	<CallToAction {...args} />
)

export const Default = Template.bind({})
Default.args = {
	heading: words(3),
	buttonText: words(2),
	buttonHref: "#",
}
