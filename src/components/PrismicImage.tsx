import Image, { ImageLoader } from "next/image"
import type { ImageProps } from "next/image"

function normalizeSrc(src: string): string {
	return src[0] === "/" ? src.slice(1) : src
}

const imgixLoader: ImageLoader = ({ src, width, quality }) => {
	const url = new URL(normalizeSrc(src))
	const params = url.searchParams

	params.set("auto", params.get("auto") || "format")
	params.set("fit", params.get("fit") || "max")
	params.set("w", params.get("w") || width.toString())

	if (quality) {
		params.set("q", quality.toString())
	}

	return url.href
}

export const PrismicImage = (props: ImageProps) => {
	// eslint-disable-next-line jsx-a11y/alt-text
	return <Image loader={imgixLoader} {...props} />
}
