import Head from "next/head"

const DEFAULT_META = {
	ogImage: "",
	twitterImage: "",
}

interface SEOProps {
	metaTitle?: string
	metaDescription?: string
	pageTitle: string
	siteName: string
	siteDescription: string
}

export const SEO = ({
	metaDescription,
	pageTitle,
	metaTitle,
	siteName,
	siteDescription,
}: SEOProps) => {
	const description = metaDescription ?? siteDescription
	const title = metaTitle ?? pageTitle

	return (
		<Head>
			<title>
				{title} | {siteName}
			</title>
			<meta name="description" content={description} />

			{/* Open Graph */}
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={siteName} />
			<meta property="og:description" content={description} />
			<meta property="og:title" content={title} />
			<meta name="image" property="og:image" content={DEFAULT_META.ogImage} />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@th_clarence" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={DEFAULT_META.twitterImage} />
		</Head>
	)
}
