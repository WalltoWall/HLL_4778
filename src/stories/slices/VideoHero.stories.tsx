import * as React from "react"
import type { ComponentStory, ComponentMeta } from "@storybook/react"
import VideoHero from "../../pageSlices/VideoHero"
import { words, hidden, string, image, placeholderVideoURL } from "../utils"

export default {
	title: "Slices/Video Hero",
	component: VideoHero,
	argTypes: {
		text: string({
			name: "Text",
			description: "Large centered text over video",
		}),
		videoThumbnailURL: image({
			name: "VideoHero Thumbnail",
			description: "Image shown for the video before playback",
		}),
		videoURL: string({
			name: "VideoHero URL",
			description: "JWPlayer URL for the video",
			control: false,
		}),

		videoThumbnailAlt: hidden(),
		nextSharesBg: hidden(),
		nextOverhangs: hidden(),
		previousOverhangs: hidden(),
	},
} as ComponentMeta<typeof VideoHero>

const Template: ComponentStory<typeof VideoHero> = (args) => (
	<VideoHero {...args} />
)

export const Default = Template.bind({})
Default.args = {
	text: words(5),
	videoThumbnailURL:
		"https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
	videoThumbnailAlt: "",
	videoURL: placeholderVideoURL,
}
