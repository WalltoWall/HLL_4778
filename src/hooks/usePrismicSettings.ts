import * as React from "react"
import { undefIfEmpty } from "@walltowall/helpers"
import { useMergePrismicPreviewData } from "gatsby-plugin-prismic-previews"

import { graphql, useStaticQuery } from "gatsby"
import { SettingsQuery } from "../gqlTypes.gen"

export function usePrismicSettings() {
	const staticData = useStaticQuery<SettingsQuery>(graphql`
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
					footer_logo_url

					enabled
					text {
						html
					}
				}
			}
		}
	`)
	const { data: result } = useMergePrismicPreviewData(staticData)

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
			footerLogoUrl: data?.footer_logo_url,

			notificationBarEnabled: data?.enabled ?? false,
			notificationHTML: undefIfEmpty(data?.text?.html),
		}
	}, [])
}
