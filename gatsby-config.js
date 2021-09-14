/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")

require("dotenv").config()

const siteMetadata = {
	title: "Honolulu Pride",
	titleShort: "HLL",
	description: "Lorem Ipsum",
	siteUrl: "https://www.example.org",
}

/**
 * @type {import("gatsby").GatsbyConfig}
 */
module.exports = {
	flags: {
		FAST_DEV: true,
		DEV_SSR: true,
	},
	siteMetadata,
	plugins: [
		process.env.ANALYZE && "gatsby-plugin-webpack-bundle-analyser-v2",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet-async",
		"gatsby-plugin-catch-links",
		"gatsby-plugin-sitemap",
		// process.env.GOOGLE_ANALYTICS_TRACKING_ID && {
		// 	resolve: "gatsby-plugin-google-gtag",
		// 	options: {
		// 		trackingIds: [process.env.GOOGLE_ANALYTICS_TRACKING_ID],
		// 		exclude: ["/preview/**", "/admin/**", "/docs/**"],
		// 	},
		// },
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: siteMetadata.title,
				short_name: siteMetadata.titleShort,
				start_url: "/",
				background_color: "#000000",
				theme_color: "#ffffff",
				display: "minimal-ui",
				icon: path.resolve(__dirname, "src/assets/manifest-icon.png"),
			},
		},
		{
			resolve: "gatsby-source-prismic",
			options: {
				repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
				accessToken: process.env.GATSBY_PRISMIC_ACCESS_TOKEN,
				schemas: require("./src/schemas"),
				linkResolver: require("./src/prismic").linkResolver,
			},
		},
		{
			resolve: "gatsby-plugin-prismic-previews",
			options: {
				repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
				accessToken: process.env.GATSBY_PRISMIC_ACCESS_TOKEN,
			},
		},
	].filter(Boolean),
}
