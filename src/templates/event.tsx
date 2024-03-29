import * as React from "react"
import { MapToComponents } from "react-map-to-components"
import { graphql, PageProps, HeadProps } from "gatsby"
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"

import { SEO } from "../components/SEO"
import { Layout } from "../components/Layout"

import type { EventTemplateQuery } from "../gqlTypes.gen"

import * as TwoColumnText from "../eventSlices/TwoColumnText"
import * as Introduction from "../eventSlices/Introduction"
import * as Anchor from "../eventSlices/Anchor"
import * as CallToAction from "../eventSlices/CallToAction"
import * as CallToActionCard from "../eventSlices/CallToActionCard"
import * as ImageCallToAction from "../eventSlices/ImageCallToAction"
import * as NewsletterForm from "../eventSlices/NewsletterForm"
import * as VideoHero from "../eventSlices/VideoHero"
import * as RichText from "../eventSlices/RichText"
import * as Video from "../eventSlices/Video"
import * as FeaturedPeople from "../eventSlices/FeaturedPeople"
import * as VideoGallery from "../eventSlices/VideoGallery"
import * as TextAndVideo from "../eventSlices/TextAndVideo"
import * as PrideCalendar from "../eventSlices/PrideCalendar"

import {
	mapDataToContextFactory,
	mapDataToPropsFactory,
	mapFactory,
	SliceMap,
	fallbackSlice,
	getSliceKey,
	getSliceType,
} from "../lib/mapToComponents"

const sliceMap: SliceMap = {
	TwoColumnText,
	Introduction,
	Anchor,
	CallToAction,
	CallToActionCard,
	ImageCallToAction,
	NewsletterForm,
	VideoHero,
	RichText,
	Video,
	FeaturedPeople,
	VideoGallery,
	TextAndVideo,
	PrideCalendar,
}

const map = mapFactory(sliceMap)
const mapDataToProps = mapDataToPropsFactory(sliceMap)
const mapDataToContext = mapDataToContextFactory(sliceMap)

const EventTemplate = ({ data }: PageProps<EventTemplateQuery>) => {
	const event = data.prismicEvent
	const sliceList = event?.data?.body ?? []
	const lastSlice = sliceList[sliceList.length - 1]

	return (
		<Layout
			lastOverhangs={
				lastSlice?.__typename === "PrismicEventDataBodyNewsletterForm"
			}
		>
			<MapToComponents
				getKey={getSliceKey}
				getType={getSliceType}
				map={map}
				mapDataToProps={mapDataToProps}
				mapDataToContext={mapDataToContext}
				list={sliceList}
				default={fallbackSlice}
			/>
		</Layout>
	)
}

export const Head = ({ data }: HeadProps<EventTemplateQuery>) => {
	const event = data.prismicEvent

	return <SEO pageTitle={event?.data?.title?.text ?? "Honolulu Pride"} />
}

export const eventTemplateQuery = graphql`
	query EventTemplate($uid: String!) {
		prismicEvent(uid: { eq: $uid }) {
			_previewable
			data {
				title {
					text
				}

				body {
					__typename
					...EventAnchor
					...EventTwoColumnText
					...EventIntroduction
					...EventCallToAction
					...EventCallToActionCard
					...EventImageCallToAction
					...EventNewsletterForm
					...EventVideoHero
					...EventRichText
					...EventVideo
					...EventFeaturedPeople
					...EventVideoGallery
					...EventTextAndVideo
					...EventPrideCalendar
				}
			}
			uid
			url
		}
	}
`

export default withPrismicPreview(EventTemplate)
