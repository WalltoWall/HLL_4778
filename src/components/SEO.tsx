import * as React from "react"
import { Title, Link, Meta } from "react-head"
import { usePrismicSettings } from "../hooks/usePrismicSettings"

interface SEOProps {
	metaTitle?: string
	metaDescription?: string
	pageTitle?: string
}

export const SEO = ({ metaDescription, pageTitle, metaTitle }: SEOProps) => {
	const settings = usePrismicSettings()
	const description = metaDescription ?? settings.siteDescription
	const title = metaTitle ?? pageTitle

	return (
		<>
			<Title>
				{title} | {settings.siteName}
			</Title>

			{/* Fonts */}
			<Link rel="stylesheet" href="https://use.typekit.net/bry3kbj.css" />

			<Meta name="description" content={description} />

			{/* Open Graph */}
			<Meta property="og:type" content="website" />
			<Meta property="og:site_name" content={settings.siteName} />
			<Meta property="og:description" content={description} />
			<Meta property="og:title" content={title} />
			<Meta
				name="image"
				property="og:image"
				content={settings.openGraphImageUrl}
			/>

			{/* Twitter */}
			<Meta name="twitter:card" content="summary_large_image" />
			<Meta name="twitter:site" content={settings.twitterUsername} />
			<Meta name="twitter:title" content={title} />
			<Meta name="twitter:description" content={description} />
			<Meta name="twitter:image" content={settings.twitterCardImageUrl} />
		</>
	)
}
