import * as React from "react"
import clsx from "clsx"
import { graphql } from "gatsby"

import { BoundedBox } from "../components/BoundedBox"
import { Image } from "../components/Image"
import { Link } from "../components/Link"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { SponsorFragment, SponsorsFragment } from "../gqlTypes.gen"

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
				"text-18 md:text-22 lg:text-28",
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
				"gap-y-6 lg:gap-y-12",
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
	sponsors: Sponsor[]
}

const VisionarySponsors = ({ sponsors, ...props }: SponsorsListProps) => {
	return (
		<SponsorContainer heading="Visionary" {...props}>
			<div
				className={clsx(
					"grid grid-cols-2 justify-items-center items-center",
					"w-full",
					"gap-10 lg:gap-20"
				)}
			>
				{sponsors.map((sponsor, idx) => (
					<Link key={`visionarySponsor-${idx}`} href={sponsor.href}>
						<Image
							src={sponsor.imageUrl}
							alt={sponsor.imageAlt ?? sponsor.name}
							className={clsx(
								"mx-auto",
								"max-w-[150px] sm:max-w-[220px] lg:max-w-[350px]"
							)}
						/>
					</Link>
				))}
			</div>
		</SponsorContainer>
	)
}

const GoldSponsors = ({ sponsors, ...props }: SponsorsListProps) => {
	return (
		<SponsorContainer heading="Gold" {...props}>
			<div
				className={clsx(
					"grid grid-cols-2 justify-items-center items-center",
					"w-full",
					"gap-10 lg:gap-20"
				)}
			>
				{sponsors.map((sponsor, idx) => (
					<Link key={`goldSponsor-${idx}`} href={sponsor.href}>
						<Image
							src={sponsor.imageUrl}
							alt={sponsor.imageAlt ?? sponsor.name}
							className={clsx(
								"mx-auto",
								"max-w-[135px] sm:max-w-[205px] lg:max-w-[300px]"
							)}
						/>
					</Link>
				))}
			</div>
		</SponsorContainer>
	)
}

const SilverSponsors = ({ sponsors, ...props }: SponsorsListProps) => {
	const columns = sponsors.length >= 3 ? "grid-cols-3" : "grid-cols-2"

	return (
		<SponsorContainer heading="Silver" {...props}>
			<div
				className={clsx(
					"grid justify-items-center items-center",
					columns,
					"w-full",
					"gap-10 lg:gap-20"
				)}
			>
				{sponsors.map((sponsor, idx) => (
					<Link key={`silverSponsor-${idx}`} href={sponsor.href}>
						<Image
							src={sponsor.imageUrl}
							alt={sponsor.imageAlt ?? sponsor.name}
							className={clsx(
								"mx-auto",
								"max-w-[110px] sm:max-w-[190px] lg:max-w-[275px]"
							)}
						/>
					</Link>
				))}
			</div>
		</SponsorContainer>
	)
}

const BronzeSponsors = ({ sponsors, ...props }: SponsorsListProps) => {
	const columns = sponsors.length >= 3 ? "grid-cols-3" : "grid-cols-2"

	return (
		<SponsorContainer heading="Bronze" {...props}>
			<div
				className={clsx(
					"grid justify-items-center items-center",
					columns,
					"w-full",
					"gap-10 lg:gap-20"
				)}
			>
				{sponsors.map((sponsor, idx) => (
					<Link key={`bronzeSponsor-${idx}`} href={sponsor.href}>
						<Image
							src={sponsor.imageUrl}
							alt={sponsor.imageAlt ?? sponsor.name}
							className={clsx(
								"mx-auto",
								"max-w-[100px] sm:max-w-[180px] lg:max-w-[250px]"
							)}
						/>
					</Link>
				))}
			</div>
		</SponsorContainer>
	)
}

const PartnerSponsors = ({ sponsors, ...props }: SponsorsListProps) => {
	const columns = sponsors.length >= 3 ? "grid-cols-3" : "grid-cols-2"

	return (
		<SponsorContainer heading="Partners" {...props}>
			<div
				className={clsx(
					"grid justify-items-center items-center",
					columns,
					"w-full",
					"gap-10 lg:gap-20"
				)}
			>
				{sponsors.map((sponsor, idx) => (
					<Link key={`partnerSponsor-${idx}`} href={sponsor.href}>
						<Image
							src={sponsor.imageUrl}
							alt={sponsor.imageAlt ?? sponsor.name}
							className={clsx(
								"mx-auto",
								"max-w-[100px] sm:max-w-[170px] lg:max-w-[225px]"
							)}
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
				<VisionarySponsors sponsors={visionarySponsors} />
				<GoldSponsors sponsors={goldSponsors} />
				<SilverSponsors sponsors={silverSponsors} />
				<BronzeSponsors sponsors={bronzeSponsors} />
				<PartnerSponsors sponsors={partnerSponsors} />
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
