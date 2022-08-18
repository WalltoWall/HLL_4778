/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")

require("dotenv").config()

const siteMetadata = {
	title: "Honolulu Pride",
	description: "Lorem Ipsum",
	siteUrl: "https://www.example.org",
}

/** @type {import("gatsby").GatsbyConfig} */
module.exports = {
	siteMetadata,
	flags: {
		FAST_DEV: true,
		DEV_SSR: true,
	},
	plugins: [
		"gatsby-plugin-postcss",
		"gatsby-plugin-sitemap",
		"gatsby-plugin-image",
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
				releaseID: "Yv144hAAACIAGKsB",
			},
		},
		{
			resolve: "gatsby-plugin-prismic-previews",
			options: {
				repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
				accessToken: process.env.GATSBY_PRISMIC_ACCESS_TOKEN,
			},
		},
		process.env.TYPEKIT_PROJECT_ID && {
			resolve: "gatsby-plugin-web-font-loader",
			options: {
				typekit: {
					id: process.env.TYPEKIT_PROJECT_ID,
				},
			},
		},
		process.env.GOOGLE_MEASUREMENT_ID && {
			resolve: "gatsby-plugin-google-gtag",
			options: {
				trackingIds: [process.env.GOOGLE_MEASUREMENT_ID],
				exclude: ["/preview/**", "/admin/**", "/docs/**"],
			},
		},
		"gatsby-plugin-netlify",
	].filter(Boolean),
}
