import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useMergePrismicPreviewData } from "gatsby-plugin-prismic-previews"

import { PrimaryNavigationQuery } from "../gqlTypes.gen"

export function usePrismicPrimaryNavigation() {
	const staticData = useStaticQuery<PrimaryNavigationQuery>(graphql`
		query PrimaryNavigation {
			prismicNavigation(uid: { eq: "primary" }) {
				_previewable
				data {
					nav_items {
						label {
							text
						}
						link {
							url
						}
					}
				}
			}
		}
	`)
	const { data: result } = useMergePrismicPreviewData(staticData)

	return React.useMemo(() => {
		return {
			items:
				result.prismicNavigation?.data?.nav_items?.map((item) => ({
					label: item?.label?.text,
					href: item?.link?.url,
				})) ?? [],
		}
	}, [])
}
