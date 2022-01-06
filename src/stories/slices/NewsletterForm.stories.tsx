import * as React from "react"
import type { ComponentStory, ComponentMeta } from "@storybook/react"
import NewsletterForm from "../../pageSlices/NewsletterForm"
import { colorVariants, hidden, string, words } from "../utils"

export default {
	title: "Slices/Newsletter Form",
	component: NewsletterForm,
	argTypes: {
		heading: string({
			name: "Heading",
			description: "Large text shown at top of block",
		}),
		placeholderText: string({
			name: "Placeholder Text",
			description: "Placeholder text shown in input",
			required: false,
		}),
		color: colorVariants(),
		className: hidden(),
		withTransform: hidden(),
		__PREVENT_SUBMISSIONS_SB__: hidden(),
	},
} as ComponentMeta<typeof NewsletterForm>

const Template: ComponentStory<typeof NewsletterForm> = (args) => (
	<NewsletterForm
		__PREVENT_SUBMISSIONS_SB__={true}
		withTransform={false}
		className="!py-0 !h-auto"
		{...args}
	/>
)

export const Default = Template.bind({})
Default.args = {
	heading: words(3),
	placeholderText: words(2),
	color: "blue",
}
