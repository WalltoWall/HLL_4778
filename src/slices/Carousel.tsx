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

import { sansExt, serifLarge } from "../typography"
import { ButtonLink } from "../components/Button"

import "keen-slider/keen-slider.min.css"
import { VisuallyHidden } from "../components/VisuallyHidden"

export const sliceType = "PrismicPageDataBodyCarousel"

const CarouselButton = ({
	className,
	children,
	...props
}: React.ComponentPropsWithoutRef<"button">) => {
	return (
		<button
			className={clsx("w-12 text-beige-92 focus:ring rounded-full", className)}
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
	})

	return (
		<section
			className={clsx(
				"py-16 bg-purple-57 text-beige-92",
				"space-y-9",
				"flex flex-col"
			)}
		>
			<div
				className={clsx("flex flex-col items-center text-center", "space-y-4")}
			>
				{subheading && <h4 className={clsx(sansExt)}>{subheading}</h4>}
				{heading && <h2 className={serifLarge}>{heading}</h2>}
			</div>

			<div ref={sliderRef} className="relative keen-slider">
				{images.map((img, idx) => (
					<ArchImage
						key={`carousel-${idx}`}
						className="keen-slider__slide"
						src={img.src}
						alt={img.alt ?? ""}
					/>
				))}

				<CarouselButton
					className="absolute left-1 top-[50%] translate-y-[-50%]"
					onClick={() => slider.prev()}
				>
					<VisuallyHidden>Previous Slide</VisuallyHidden>
					<ArrowCircleLeftIcon />
				</CarouselButton>

				<CarouselButton
					className="absolute right-1 top-[50%] translate-y-[-50%]"
					onClick={() => slider.next()}
				>
					<VisuallyHidden>Next Slide</VisuallyHidden>
					<ArrowCircleRightIcon />
				</CarouselButton>
			</div>

			{buttonHref && buttonText && (
				<ButtonLink href={buttonHref} variant="yellow" className="self-center">
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
