import * as React from "react"
import type { ComponentStory, ComponentMeta } from "@storybook/react"
import Video from "../../pageSlices/Video"
import { hidden, string, image, placeholderVideoURL } from "../utils"

export default {
	title: "Slices/Video",
	component: Video,
	argTypes: {
		videoThumbnailURL: image({
			name: "Video Thumbnail",
			description: "Image shown for the video before playback",
		}),
		videoURL: string({
			name: "Video URL",
			description: "JWPlayer URL for the video",
			control: false,
		}),

		videoThumbnailAlt: hidden(),
		nextSharesBg: hidden(),
		nextOverhangs: hidden(),
		previousOverhangs: hidden(),
	},
} as ComponentMeta<typeof Video>

const Template: ComponentStory<typeof Video> = (args) => <Video {...args} />

export const Default = Template.bind({})
Default.args = {
	videoThumbnailURL:
		"https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
	videoThumbnailAlt: "",
	videoURL: placeholderVideoURL,
}
