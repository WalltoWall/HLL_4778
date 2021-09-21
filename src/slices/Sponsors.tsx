import * as React from "react"
import clsx from "clsx"
import { graphql } from "gatsby"

import type { MapDataToPropsCtx } from "../templates/page"
import type { SponsorsFragment } from "../gqlTypes.gen"

import { BoundedBox } from "../components/BoundedBox"
import { usePrismicSponsors } from "../hooks/usePrismicSponsors"
import { Image } from "../components/Image"
import { Link } from "../components/Link"

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

const RainbowsSponsor = (props: React.ComponentPropsWithoutRef<"div">) => {
	const sponsors = usePrismicSponsors()
	const [rainbowSponsor] = sponsors.rainbowsOverWaikiki

	return (
		<SponsorContainer
			heading="Rainbows Over Waikiki Presenting Sponsor"
			className="lg:grid-cols-2 lg:items-center lg:gap-10"
			{...props}
		>
			<Link href={rainbowSponsor.href}>
				{rainbowSponsor && (
					<Image
						src={rainbowSponsor.imageUrl}
						alt={rainbowSponsor.imageAlt ?? rainbowSponsor.name}
						className="max-w-[250px] w-full lg:max-w-[400px]"
					/>
				)}
			</Link>
		</SponsorContainer>
	)
}

const VisionarySponsors = (props: React.ComponentPropsWithoutRef<"div">) => {
	const { visionary } = usePrismicSponsors()

	return (
		<SponsorContainer heading="Visionary" {...props}>
			<div
				className={clsx(
					"grid grid-cols-2 justify-items-center items-center",
					"w-full",
					"gap-10 lg:gap-20"
				)}
			>
				{visionary.map((sponsor, idx) => (
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

const GoldSponsors = (props: React.ComponentPropsWithoutRef<"div">) => {
	const { gold } = usePrismicSponsors()

	return (
		<SponsorContainer heading="Gold" {...props}>
			<div
				className={clsx(
					"grid grid-cols-2 justify-items-center items-center",
					"w-full",
					"gap-10 lg:gap-20"
				)}
			>
				{gold.map((sponsor, idx) => (
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

const SilverSponsors = (props: React.ComponentPropsWithoutRef<"div">) => {
	const { silver } = usePrismicSponsors()

	const columns = silver.length >= 3 ? "grid-cols-3" : "grid-cols-2"

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
				{silver.map((sponsor, idx) => (
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

const BronzeSponsors = (props: React.ComponentPropsWithoutRef<"div">) => {
	const { bronze } = usePrismicSponsors()

	const columns = bronze.length >= 3 ? "grid-cols-3" : "grid-cols-2"

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
				{bronze.map((sponsor, idx) => (
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

const PartnerSponsors = (props: React.ComponentPropsWithoutRef<"div">) => {
	const { partner } = usePrismicSponsors()

	const columns = partner.length >= 3 ? "grid-cols-3" : "grid-cols-2"

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
				{partner.map((sponsor, idx) => (
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
}: ReturnType<typeof mapDataToProps>) => {
	return (
		<BoundedBox tag="section">
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
				<RainbowsSponsor />
				<VisionarySponsors />
				<GoldSponsors />
				<SilverSponsors />
				<BronzeSponsors />
				<PartnerSponsors />
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
