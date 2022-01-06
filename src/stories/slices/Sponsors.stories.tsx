import * as React from "react"
import type { ComponentStory, ComponentMeta } from "@storybook/react"
import Sponsors from "../../pageSlices/Sponsors"
import { hidden, string, words } from "../utils"

export default {
	title: "Slices/Sponsors",
	component: Sponsors,
	argTypes: {
		subheading: string({
			name: "Subheading",
			description: "Caps text shown at the top of the slice",
		}),
		heading: string({
			name: "Heading",
			description: "Large text shown at the top of the slice",
		}),
		rainbowSponsor: string({
			name: "Sponsor List",
			description: "Sponsor List document type to display",
			control: false,
		}),

		visionarySponsors: hidden(),
		goldSponsors: hidden(),
		silverSponsors: hidden(),
		bronzeSponsors: hidden(),
		partnerSponsors: hidden(),
	},
} as ComponentMeta<typeof Sponsors>

const Template: ComponentStory<typeof Sponsors> = (args) => (
	<Sponsors {...args} />
)

function sponsor(imageUrl: string) {
	return {
		imageUrl,
		href: "#",
		name: "",
	}
}

export const Default = Template.bind({})
Default.args = {
	subheading: words(3),
	heading: words(1),
	rainbowSponsor: sponsor(
		"https://images.prismic.io/honolulu-pride/458098c8-b837-4715-becb-593ad47dac2b_Hawaiian%20Airlines%20Official%20Airline%20Honolulu%20Pride.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50"
	),
	visionarySponsors: [
		sponsor(
			"https://images.prismic.io/honolulu-pride/296654d3-7e23-4904-95c2-b666bd7b1a62_Bank%20of%20Hawaii.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50"
		),
		sponsor(
			"https://images.prismic.io/honolulu-pride/07c15c52-aff9-4b57-a707-6d6d6dbd03d0_Wall-to-Wall-Studios-Honolulu-Pride.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50"
		),
	],
	goldSponsors: [
		sponsor(
			"https://images.prismic.io/honolulu-pride/422bbe1f-2079-42f7-ad0c-a471bd52c4d0_Honolulu-Pride-Alonhilani-640x480.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50"
		),
		sponsor(
			"https://images.prismic.io/honolulu-pride/56469578-c977-4521-ab08-0dfdba93c0aa_Honolulu-Pride-Kaimana-640x480.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50"
		),
	],
	silverSponsors: [
		sponsor(
			"https://images.prismic.io/honolulu-pride/06087768-ddbb-4560-adb5-d986bb8743bb_Subaru-Hawaii-Honolulu-Pride-2021.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50"
		),
		sponsor(
			"https://images.prismic.io/honolulu-pride/4595d0ae-14fe-46a9-aa1a-0a047ed0cab8_ENTERPRISEtruckRENTALlogo_300.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50"
		),
	],
	bronzeSponsors: [
		sponsor(
			"https://images.prismic.io/honolulu-pride/29ee778c-98ad-433b-b287-2c03117ff60b_Kaiser-Permamente-Honolulu-Pride.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50"
		),
		sponsor(
			"https://images.prismic.io/honolulu-pride/c55d4f9c-0bae-4382-b1fd-662cc53699cb_HMSA-Honolulu-Pride-2021.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50"
		),
	],
	partnerSponsors: [
		sponsor(
			"https://images.prismic.io/honolulu-pride/d5a5c881-409f-4d87-83ae-71a58dade803_Honolulu-Pride-HHHRC.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50"
		),
		sponsor(
			"https://images.prismic.io/honolulu-pride/234a22cb-149a-4080-a25d-e87284f9dffd_Honolulu-Pride-UH-LGBTQ-Center.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50"
		),
	],
}
