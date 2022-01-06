import * as React from "react"
import type { ComponentStory, ComponentMeta } from "@storybook/react"
import GradientText from "../../pageSlices/GradientText"
import { hidden, string, words } from "../utils"

export default {
	title: "Slices/Gradient Text",
	component: GradientText,
	argTypes: {
		text: string({
			name: "Text",
			description: "Large centered text",
		}),
		__HACKY_SB_OVERRIDE__: hidden(),
	},
} as ComponentMeta<typeof GradientText>

const Template: ComponentStory<typeof GradientText> = (args) => (
	<GradientText __HACKY_SB_OVERRIDE__={true} {...args} />
)

export const Default = Template.bind({})
Default.args = {
	text: words(20),
}
