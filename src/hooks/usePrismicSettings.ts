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
					site_disclaimer {
						text
					}
					site_description {
						text
					}
					site_copyright {
						text
					}
				}
			}
		}
	`)

	return {
		siteName: result.prismicSettings?.data?.site_name?.text,
		siteDescription: result.prismicSettings?.data?.site_description?.text,
		siteCopyright: result.prismicSettings?.data?.site_copyright?.text,
	}
}
