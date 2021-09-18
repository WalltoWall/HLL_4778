import { graphql, useStaticQuery } from "gatsby"
import { PrimaryNavigationQuery } from "../gqlTypes.gen"

export function usePrismicPrimaryNavigation() {
	const result = useStaticQuery<PrimaryNavigationQuery>(graphql`
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

	return {
		items:
			result.prismicNavigation?.data?.nav_items?.map((item) => ({
				label: item?.label?.text,
				href: item?.link?.url,
			})) ?? [],
	}
}
