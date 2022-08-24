import * as React from "react"
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

	const resolvedTitle = `${title} | ${settings.siteName}`

	return (
		<>
			<title>{resolvedTitle}</title>

			<meta name="description" content={description} />

			{/* Open Graph */}
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={settings.siteName} />
			<meta property="og:description" content={description} />
			<meta property="og:title" content={title} />
			<meta
				name="image"
				property="og:image"
				content={settings.openGraphImageUrl}
			/>

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content={settings.twitterUsername} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={settings.twitterCardImageUrl} />
		</>
	)
}
