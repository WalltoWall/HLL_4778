import * as React from "react"
import type { ComponentStory, ComponentMeta } from "@storybook/react"
import TextAndVideo from "../../pageSlices/TextAndVideo"
import {
	colorVariants,
	hidden,
	string,
	words,
	html,
	sentences,
	image,
	placeholderVideoURL,
} from "../utils"

export default {
	title: "Slices/Text and Video",
	component: TextAndVideo,
	argTypes: {
		textHTML: string({
			name: "Text",
			description: "Rich text with formatting shown in slice",
		}),
		videoThumbnailURL: image({
			name: "Video Thumbnail",
			description: "Image shown for the video before playback",
		}),
		thumbnailSide: string({
			name: "Thumbnail Side",
			description: "Side of the slice the video will show on",
			options: ["left", "right"],
			defaultValue: "left",
		}),
		videoURL: string({
			name: "Video URL",
			description: "JWPlayer URL for the video",
			control: false,
		}),
		color: colorVariants(),

		videoThumbnailAlt: hidden(),
		nextSharesBg: hidden(),
		nextOverhangs: hidden(),
		previousOverhangs: hidden(),
	},
} as ComponentMeta<typeof TextAndVideo>

const Template: ComponentStory<typeof TextAndVideo> = (args) => (
	<TextAndVideo {...args} />
)

export const Default = Template.bind({})
Default.args = {
	textHTML: html`
		<h2>${words(8)}</h2>
		<p>${sentences(3)}</p>
	`,
	color: "yellow",
	videoThumbnailURL:
		"https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
	videoThumbnailAlt: "",
	videoURL: placeholderVideoURL,
}
