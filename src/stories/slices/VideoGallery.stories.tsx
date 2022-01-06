import * as React from "react"
import type { ComponentStory, ComponentMeta } from "@storybook/react"
import VideoGallery from "../../pageSlices/VideoGallery"
import {
	colorVariants,
	hidden,
	html,
	list,
	sentences,
	string,
	words,
} from "../utils"

export default {
	title: "Slices/Video Gallery",
	component: VideoGallery,
	argTypes: {
		textHTML: string({
			name: "Text",
			description: "Rich text shown at the top of the slice",
		}),
		videos: list({
			name: "Video Submission Type",
			description: "Submission type to pull the list of videos from",
		}),
		color: colorVariants(),

		endDate: hidden(),
		mute: hidden(),
		votable: hidden(),
		nextSharesBg: hidden(),
		nextOverhangs: hidden(),
		previousOverhangs: hidden(),
	},
} as ComponentMeta<typeof VideoGallery>

const Template: ComponentStory<typeof VideoGallery> = (args) => (
	<VideoGallery mute votable={false} {...args} />
)

const videoImages = [
	"https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80",
	"https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
	"https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
	"https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
	"https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
]

const videos = videoImages.map((img) => ({
	name: words(3),
	descriptionHTML: html`<p>${sentences(1)}</p>`,
	subtitle: words(6),
	videoThumbnailURL: img,
	videoThumbnailAlt: "",
	videoURL: "",
	uid: words(1),
	href: "#",
	submissionType: "__STORYBOOK__",
}))

export const Default = Template.bind({})
Default.args = {
	textHTML: html`
		<h2>${words(3)}</h2>
		<p>${sentences(2)}</p>
	`,
	color: "green",
	videos,
}
