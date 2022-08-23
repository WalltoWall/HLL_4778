import * as React from "react"
import clsx from "clsx"
import { graphql } from "gatsby"

import { BoundedBox } from "../components/BoundedBox"
import { Image } from "../components/Image"
import { Link } from "../components/Link"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { SponsorFragment, SponsorsFragment } from "../gqlTypes.gen"

import * as styles from "./Sponsors.module.css"

export const sliceType = "PrismicPageDataBodySponsors"

const SponsorHeading = ({
	className,
	...props
}: React.ComponentPropsWithoutRef<"h5">) => {
	return (
		<h5
			className={clsx(
				className,
				"font-sans",
				"text-center",
				"text-18 sm:text-22 lg:text-28",
				"leading-1_3 lg:leading-1_15",
				"font-semibold",
				"max-w-[20ch]"
			)}
			{...props}
		/>
	)
}

interface SponsorContainerProps extends React.ComponentPropsWithoutRef<"div"> {
	heading: string
}

const SponsorContainer = ({
	className,
	children,
	heading,
	...props
}: SponsorContainerProps) => {
	return (
		<div
			className={clsx(
				className,
				"grid",
				"gap-y-6 sm:gap-y-10 lg:gap-y-12",
				"justify-items-center"
			)}
			{...props}
		>
			<SponsorHeading>{heading}</SponsorHeading>

			{children}
		</div>
	)
}

interface Sponsor {
	imageUrl?: string
	imageAlt?: string
	href?: string
	name?: string
}

interface RainbowsSponsorProps extends React.ComponentPropsWithoutRef<"div"> {
	sponsor: Sponsor
}

const RainbowsSponsor = ({ sponsor, ...props }: RainbowsSponsorProps) => {
	return (
		<SponsorContainer
			heading="Rainbows Over Waikiki Presenting Sponsor"
			className="lg:grid-cols-2 lg:items-center lg:gap-10"
			{...props}
		>
			<Link href={sponsor.href}>
				{sponsor && (
					<Image
						src={sponsor.imageUrl}
						alt={sponsor.imageAlt ?? sponsor.name}
						className="max-w-[250px] w-full lg:max-w-[400px]"
					/>
				)}
			</Link>
		</SponsorContainer>
	)
}

interface SponsorsListProps extends React.ComponentPropsWithoutRef<"div"> {
	heading: string
	sponsors: Sponsor[]
}

const LargeSponsors = ({ sponsors, heading, ...props }: SponsorsListProps) => {
	return (
		<SponsorContainer heading={heading} {...props}>
			<div
				className={clsx(
					"grid justify-items-center items-center justify-center",
					"w-full",
					"gap-12 sm:gap-16 lg:gap-28",
					styles.largeGrid
				)}
			>
				{sponsors.map((sponsor) => (
					<Link key={sponsor.name} href={sponsor.href}>
						<Image
							src={sponsor.imageUrl}
							alt={sponsor.imageAlt ?? sponsor.name}
						/>
					</Link>
				))}
			</div>
		</SponsorContainer>
	)
}

const MediumSponsors = ({ sponsors, heading, ...props }: SponsorsListProps) => {
	return (
		<SponsorContainer heading={heading} {...props}>
			<div
				className={clsx(
					"grid justify-items-center items-center justify-center",
					"w-full",
					"gap-10 sm:gap-16 lg:gap-28",
					styles.mediumGrid
				)}
			>
				{sponsors.map((sponsor) => (
					<Link key={sponsor.name} href={sponsor.href}>
						<Image
							src={sponsor.imageUrl}
							alt={sponsor.imageAlt ?? sponsor.name}
						/>
					</Link>
				))}
			</div>
		</SponsorContainer>
	)
}

const SmallSponsors = ({ sponsors, heading, ...props }: SponsorsListProps) => {
	return (
		<SponsorContainer heading={heading} {...props}>
			<div
				className={clsx(
					"grid justify-items-center items-center justify-center",
					"w-full",
					"gap-10 sm:gap-16 lg:gap-28",
					styles.smallGrid
				)}
			>
				{sponsors.map((sponsor, idx) => (
					<Link key={`silverSponsor-${idx}`} href={sponsor.href}>
						<Image
							src={sponsor.imageUrl}
							alt={sponsor.imageAlt ?? sponsor.name}
						/>
					</Link>
				))}
			</div>
		</SponsorContainer>
	)
}

const Sponsors = ({
	subheading,
	heading,
	bronzeSponsors = [],
	goldSponsors = [],
	partnerSponsors = [],
	rainbowSponsor,
	silverSponsors = [],
	platinumSponsors = [],
	mediaSponsors = [],
	visionarySponsors = [],
}: ReturnType<typeof mapDataToProps>) => {
	return (
		<BoundedBox tag="section" width="base">
			<div className="flex flex-col items-center mb-16 space-y-4 text-center lg:mb-30">
				{subheading && (
					<h4
						className={clsx(
							"font-sansExt",
							"uppercase",
							"text-12 md:text-16 lg:text-22",
							"tracking-caps font-bold"
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

			<div className="space-y-16 lg:space-y-30">
				<RainbowsSponsor sponsor={rainbowSponsor} />
				<LargeSponsors sponsors={visionarySponsors} heading="Visionary" />
				<LargeSponsors sponsors={mediaSponsors} heading="Media" />
				<MediumSponsors sponsors={platinumSponsors} heading="Platinum" />
				<MediumSponsors sponsors={goldSponsors} heading="Gold" />
				<SmallSponsors sponsors={silverSponsors} heading="Silver" />
				<SmallSponsors sponsors={bronzeSponsors} heading="Bronze" />
				<SmallSponsors sponsors={partnerSponsors} heading="Community" />
			</div>
		</BoundedBox>
	)
}

function mapDocumentToSponsor(document?: SponsorFragment): Sponsor {
	return {
		href: document?.data?.link?.url,
		imageAlt: document?.data?.image?.alt,
		imageUrl: document?.data?.image?.url,
		name: document?.data?.name?.text,
	}
}

export function mapDataToProps({ data }: MapDataToPropsCtx<SponsorsFragment>) {
	const sponsorsList = data.primary?.sponsor_list?.document?.data

	return {
		heading: data.primary?.heading?.text,
		subheading: data.primary?.subheading?.text,
		rainbowSponsor: mapDocumentToSponsor(
			sponsorsList?.rainbows_over_waikiki_sponsor?.document
		),
		visionarySponsors: sponsorsList?.visionary_sponsors?.map((s) =>
			mapDocumentToSponsor(s?.sponsor?.document)
		),
		mediaSponsors: sponsorsList?.media_sponsors?.map((s) =>
			mapDocumentToSponsor(s?.sponsor?.document)
		),
		platinumSponsors: sponsorsList?.platinum_sponsors?.map((s) =>
			mapDocumentToSponsor(s?.sponsor?.document)
		),
		goldSponsors: sponsorsList?.gold_sponsors?.map((s) =>
			mapDocumentToSponsor(s?.sponsor?.document)
		),
		silverSponsors: sponsorsList?.silver_sponsors?.map((s) =>
			mapDocumentToSponsor(s?.sponsor?.document)
		),
		bronzeSponsors: sponsorsList?.bronze_sponsors?.map((s) =>
			mapDocumentToSponsor(s?.sponsor?.document)
		),
		partnerSponsors: sponsorsList?.partner_sponsors?.map((s) =>
			mapDocumentToSponsor(s?.sponsor?.document)
		),
	}
}

export function mapDataToContext(_ctx: MapDataToContextCtx<SponsorFragment>) {
	return {}
}

export const gqlFragment = graphql`
	fragment Sponsor on PrismicSponsor {
		data {
			image {
				alt
				url
			}
			link {
				url
			}
			name {
				text
			}
		}
	}

	fragment Sponsors on PrismicPageDataBodySponsors {
		primary {
			heading {
				text
			}
			subheading {
				text
			}
			sponsor_list {
				document {
					... on PrismicSponsorsList {
						id
						data {
							rainbows_over_waikiki_sponsor {
								document {
									...Sponsor
								}
							}
							visionary_sponsors {
								sponsor {
									document {
										...Sponsor
									}
								}
							}
							media_sponsors {
								sponsor {
									document {
										...Sponsor
									}
								}
							}
							platinum_sponsors {
								sponsor {
									document {
										...Sponsor
									}
								}
							}
							gold_sponsors {
								sponsor {
									document {
										...Sponsor
									}
								}
							}
							silver_sponsors {
								sponsor {
									document {
										...Sponsor
									}
								}
							}
							bronze_sponsors {
								sponsor {
									document {
										...Sponsor
									}
								}
							}
							partner_sponsors {
								sponsor {
									document {
										...Sponsor
									}
								}
							}
						}
					}
				}
			}
		}
	}
`

export default Sponsors
