import * as React from "react"
import clsx from "clsx"
import { graphql } from "gatsby"

import type { MapDataToPropsCtx } from "../templates/page"
import type { SponsorsFragment } from "../gqlTypes.gen"

import { BoundedBox } from "../components/BoundedBox"
import { usePrismicSponsors } from "../hooks/usePrismicSponsors"

export const sliceType = "PrismicPageDataBodySponsors"

const Sponsors = ({
	subheading,
	heading,
}: ReturnType<typeof mapDataToProps>) => {
	const sponsors = usePrismicSponsors()

	return (
		<BoundedBox tag="section">
			<div className="flex flex-col items-center space-y-4 text-center">
				{subheading && (
					<h4
						className={clsx(
							"font-sansExt",
							"uppercase text-12 tracking-caps font-bold"
						)}
					>
						{subheading}
					</h4>
				)}
				{heading && (
					<h2
						className={clsx(
							"font-serif",
							"text-42 md:text-52 lg:text-62",
							"leading-1_15"
						)}
					>
						{heading}
					</h2>
				)}
			</div>
		</BoundedBox>
	)
}

export function mapDataToProps({ data }: MapDataToPropsCtx<SponsorsFragment>) {
	return {
		heading: data.primary?.heading?.text,
		subheading: data.primary?.subheading?.text,
	}
}

export const gqlFragment = graphql`
	fragment Sponsors on PrismicPageDataBodySponsors {
		primary {
			heading {
				text
			}
			subheading {
				text
			}
		}
	}
`

export default Sponsors
