import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import type { AllSponsorsQuery } from "../gqlTypes.gen"

export type SponsorType =
	| "Visionary"
	| "Gold"
	| "Silver"
	| "Bronze"
	| "Partner"
	| "Rainbows Over Waikiki"

interface Sponsor {
	imageUrl?: string
	imageAlt?: string
	name?: string
	type?: SponsorType
}

export function usePrismicSponsors() {
	const result = useStaticQuery<AllSponsorsQuery>(graphql`
		query AllSponsors {
			allPrismicSponsor {
				nodes {
					_previewable
					data {
						image {
							url
							alt
						}
						name {
							text
						}
						type
					}
				}
			}
		}
	`)

	return React.useMemo(() => {
		const rainbowsOverWaikiki: Sponsor[] = []
		const visionary: Sponsor[] = []
		const gold: Sponsor[] = []
		const silver: Sponsor[] = []
		const bronze: Sponsor[] = []
		const partner: Sponsor[] = []

		result.allPrismicSponsor.nodes.forEach((node) => {
			const type = node.data?.type as SponsorType
			const sponsor: Sponsor = {
				name: node.data?.name?.text,
				type,
				imageUrl: node.data?.image?.url,
				imageAlt: node.data?.image?.alt,
			}

			switch (type) {
				case "Rainbows Over Waikiki":
					return rainbowsOverWaikiki.push(sponsor)

				case "Visionary":
					return visionary.push(sponsor)

				case "Gold":
					return gold.push(sponsor)

				case "Silver":
					return silver.push(sponsor)

				case "Bronze":
					return bronze.push(sponsor)

				case "Partner":
				default:
					return partner.push(sponsor)
			}
		})

		return {
			rainbowsOverWaikiki,
			visionary,
			gold,
			silver,
			bronze,
			partner,
		}
	}, [])
}
