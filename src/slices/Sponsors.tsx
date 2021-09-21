import * as React from "react"
import clsx from "clsx"
import { graphql } from "gatsby"

import type { MapDataToPropsCtx } from "../templates/page"
import type { SponsorsFragment } from "../gqlTypes.gen"

import { BoundedBox } from "../components/BoundedBox"
import { usePrismicSponsors } from "../hooks/usePrismicSponsors"
import { Image } from "../components/Image"

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
				"text-18",
				"leading-1_3 font-semibold",
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
			className={clsx(className, "flex flex-col space-y-6 items-center")}
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
			{...props}
		>
			{rainbowSponsor && (
				<Image
					src={rainbowSponsor.imageUrl}
					alt={rainbowSponsor.imageAlt ?? rainbowSponsor.name}
					className="max-w-[250px] w-full"
				/>
			)}
		</SponsorContainer>
	)
}

const VisionarySponsors = (props: React.ComponentPropsWithoutRef<"div">) => {
	const { visionary } = usePrismicSponsors()

	return (
		<SponsorContainer heading="Visionary" {...props}>
			<ul className="space-y-10">
				{visionary.map((sponsor, idx) => (
					<li key={`visionarySponsor-${idx}`} className="max-w-[225px] w-full">
						<Image
							src={sponsor.imageUrl}
							alt={sponsor.imageAlt ?? sponsor.name}
						/>
					</li>
				))}
			</ul>
		</SponsorContainer>
	)
}

const GoldSponsors = (props: React.ComponentPropsWithoutRef<"div">) => {
	const { gold } = usePrismicSponsors()

	return (
		<SponsorContainer heading="Gold" {...props}>
			<ul className="flex flex-wrap items-center justify-center gap-10">
				{gold.map((sponsor, idx) => (
					<li key={`goldSponsor-${idx}`} className="w-[calc(50%-40px)]">
						<Image
							src={sponsor.imageUrl}
							alt={sponsor.imageAlt ?? sponsor.name}
						/>
					</li>
				))}
			</ul>
		</SponsorContainer>
	)
}

const SilverSponsors = (props: React.ComponentPropsWithoutRef<"div">) => {
	const { silver } = usePrismicSponsors()

	return (
		<SponsorContainer heading="Silver" {...props}>
			<ul className="flex flex-wrap items-center justify-center gap-10">
				{silver.map((sponsor, idx) => (
					<li key={`silverSponsor-${idx}`} className="w-[calc(33%-40px)]">
						<Image
							src={sponsor.imageUrl}
							alt={sponsor.imageAlt ?? sponsor.name}
						/>
					</li>
				))}
			</ul>
		</SponsorContainer>
	)
}

const BronzeSponsors = (props: React.ComponentPropsWithoutRef<"div">) => {
	const { bronze } = usePrismicSponsors()

	return (
		<SponsorContainer heading="Bronze" {...props}>
			<ul className="flex flex-wrap items-center justify-center gap-10">
				{bronze.map((sponsor, idx) => (
					<li key={`bronzeSponsor-${idx}`} className="w-[calc(33%-40px)]">
						<Image
							src={sponsor.imageUrl}
							alt={sponsor.imageAlt ?? sponsor.name}
						/>
					</li>
				))}
			</ul>
		</SponsorContainer>
	)
}

const PartnerSponsors = (props: React.ComponentPropsWithoutRef<"div">) => {
	const { partner } = usePrismicSponsors()

	return (
		<SponsorContainer heading="Partners" {...props}>
			<ul className="flex flex-wrap items-center justify-center gap-10">
				{partner.map((sponsor, idx) => (
					<li key={`partnerSponsor-${idx}`} className="w-[calc(33%-40px)]">
						<Image
							src={sponsor.imageUrl}
							alt={sponsor.imageAlt ?? sponsor.name}
						/>
					</li>
				))}
			</ul>
		</SponsorContainer>
	)
}

const Sponsors = ({
	subheading,
	heading,
}: ReturnType<typeof mapDataToProps>) => {
	return (
		<BoundedBox tag="section">
			<div className="flex flex-col items-center space-y-4 text-center mb-14">
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

			<div className="space-y-16">
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
