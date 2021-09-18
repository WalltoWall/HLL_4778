import * as React from "react"
import { graphql } from "gatsby"
import clsx from "clsx"
import { useKeenSlider } from "keen-slider/react"
import {
	ArrowCircleLeftIcon,
	ArrowCircleRightIcon,
} from "@heroicons/react/outline"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { CarouselFragment } from "../gqlTypes.gen"

import { ArchImage } from "../components/ArchImage"
import { ButtonLink } from "../components/Button"
import { VisuallyHidden } from "../components/VisuallyHidden"
import { variants as boundedBoxVariants } from "../components/BoundedBox"

import "keen-slider/keen-slider.min.css"

export const sliceType = "PrismicPageDataBodyCarousel"

const CarouselButton = ({
	className,
	children,
	...props
}: React.ComponentPropsWithoutRef<"button">) => {
	return (
		<button
			className={clsx(
				"w-12 md:w-14 lg:w-16",
				"text-beige-92 focus:ring focus:outline-none rounded-full",
				className
			)}
			{...props}
		>
			{children}
		</button>
	)
}

const Carousel = ({
	subheading,
	heading,
	buttonHref,
	buttonText,
	images = [],
}: ReturnType<typeof mapDataToProps>) => {
	const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
		spacing: 20,
		loop: true,
		centered: true,
		slidesPerView: 1.35,
		breakpoints: {
			"(min-width: 1024px)": {
				spacing: 30,
			},
			"(min-width: 1280px)": {
				slidesPerView: 1.5,
			},
			"(min-width: 1536px)": {
				spacing: 48,
				slidesPerView: 1.75,
			},
		},
	})

	return (
		<section
			className={clsx(
				boundedBoxVariants.base,
				"bg-purple-57 text-beige-92",
				"space-y-9 md:space-y-11 lg:space-y-14",
				"flex flex-col"
			)}
		>
			<div
				className={clsx(
					"flex flex-col items-center text-center",
					"space-y-4 md:space-y-6"
				)}
			>
				{subheading && (
					<h4
						className={clsx(
							"font-sansExt tracking-caps leading-1_5 uppercase",
							"text-12 md:text-16 lg:text-22"
						)}
					>
						{subheading}
					</h4>
				)}

				{heading && (
					<h2
						className={clsx(
							"font-serif leading-1",
							"text-42 md:text-52 lg:text-62"
						)}
					>
						{heading}
					</h2>
				)}
			</div>

			<div ref={sliderRef} className="relative keen-slider">
				{images.map((img, idx) => (
					<ArchImage
						key={`carousel-${idx}`}
						className="keen-slider__slide"
						src={img.src}
						alt={img.alt ?? ""}
						aspectRatioClassName={clsx(
							"aspect-w-8 aspect-h-7",
							"lg:aspect-w-8 lg:aspect-h-5",
							"2xl:aspect-w-2 2xl:aspect-h-1"
						)}
					/>
				))}

				<CarouselButton
					className={clsx(
						"absolute",
						"left-1 sm:left-4 lg:left-8",
						"top-[50%] translate-y-[-50%]"
					)}
					onClick={() => slider.prev()}
				>
					<VisuallyHidden>Previous Slide</VisuallyHidden>
					<ArrowCircleLeftIcon />
				</CarouselButton>

				<CarouselButton
					className={clsx(
						"absolute",
						"right-1 sm:right-4 lg:right-8",
						"top-[50%] translate-y-[-50%]"
					)}
					onClick={() => slider.next()}
				>
					<VisuallyHidden>Next Slide</VisuallyHidden>
					<ArrowCircleRightIcon />
				</CarouselButton>
			</div>

			{buttonHref && buttonText && (
				<ButtonLink href={buttonHref} variant="filled" className="self-center">
					{buttonText}
				</ButtonLink>
			)}
		</section>
	)
}

export function mapDataToProps({ data }: MapDataToPropsCtx<CarouselFragment>) {
	return {
		subheading: data.primary?.subheading?.text,
		heading: data.primary?.heading?.text,
		buttonHref: data.primary?.button_link?.url,
		buttonText: data.primary?.button_text,
		images:
			data.items?.map((item) => ({
				src: item?.image?.url,
				alt: item?.image?.alt,
			})) ?? [],
	}
}

export function mapDataToContext(_ctx: MapDataToContextCtx<CarouselFragment>) {
	return {
		backgroundColor: "blue",
	}
}

export const gqlFragment = graphql`
	fragment Carousel on PrismicPageDataBodyCarousel {
		primary {
			subheading {
				text
			}
			heading {
				text
			}
			button_link {
				url
			}
			button_text
		}
		items {
			image {
				alt
				url
			}
		}
	}
`

export default Carousel
