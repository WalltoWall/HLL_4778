import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SettingsQuery } from "../gqlTypes.gen"

export function usePrismicSettings() {
	const result = useStaticQuery<SettingsQuery>(graphql`
		query Settings {
			prismicSettings {
				_previewable
				data {
					site_name {
						text
					}
					site_description {
						text
					}
					site_copyright {
						text
						html
					}

					facebook_url
					instagram_url
					youtube_url

					twitter_url
					twitter_username

					twitter_card_image {
						url
					}
					open_graph_image {
						url
					}
				}
			}
		}
	`)

	return React.useMemo(() => {
		const data = result.prismicSettings?.data

		return {
			siteName: data?.site_name?.text,
			siteDescription: data?.site_description?.text,
			siteCopyrightHTML: data?.site_copyright?.html?.replace(
				"{YEAR}",
				new Date().getFullYear().toString()
			),
			facebookURL: data?.facebook_url,
			instagramURL: data?.instagram_url,
			youtubeURL: data?.youtube_url,
			twitterURL: data?.twitter_url,
			twitterCardImageUrl: data?.twitter_card_image?.url,
			twitterUsername: data?.twitter_username,
			openGraphImageUrl: data?.open_graph_image?.url,
		}
	}, [])
}
