import * as React from "react"
import { MapToComponents } from "react-map-to-components"
import { graphql, PageProps } from "gatsby"

import { SEO } from "../components/SEO"
import { Layout } from "../components/Layout"

import type {} from "../gqlTypes.gen"

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
}

const map = mapFactory(sliceMap)
const mapDataToProps = mapDataToPropsFactory(sliceMap)
const mapDataToContext = mapDataToContextFactory(sliceMap)

const PageTemplate = ({ data }: PageProps<any>) => {
	const event = data.prismicEvent

	const sliceList = event?.data?.body ?? []
	const lastSlice = sliceList[sliceList.length - 1]

	return (
		<Layout
			lastOverhangs={
				lastSlice?.__typename === "PrismicEventDataBodyNewsletterForm"
			}
		>
			<SEO pageTitle={event?.data?.title?.text ?? "Honolulu Pride"} />

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
				}
			}
			uid
			url
		}
	}
`

export default PageTemplate
