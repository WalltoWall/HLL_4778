import { asText } from "@prismicio/helpers"
import type * as pt from "@prismicio/types"
import type { MapDataToPropsCtx } from "../pages/[uid]"
import clsx from "clsx"
import { serifLarge } from "./typography"
import { PrismicImage } from "../components/PrismicImage"

export const sliceType = "video_hero"

export type GradientTextSlice = pt.Slice<
	typeof sliceType,
	{
		text: pt.RichTextField
		video_thumbnail: pt.ImageField
		video: pt.EmbedField
	}
>

const VideoHero = ({
	text,
	videoThumbnailAlt,
	videoThumbnailUrl,
}: ReturnType<typeof mapDataToProps>) => {
	return (
		<section className="relative z-10 px-8 text-center py-60">
			{videoThumbnailUrl && (
				<PrismicImage
					layout="fill"
					objectFit="cover"
					objectPosition="center"
					src={videoThumbnailUrl}
					alt={videoThumbnailAlt ?? ""}
					className="absolute inset-0 pointer-events-none bg-blue-31"
				/>
			)}

			{text && (
				<h1
					className={clsx(
						serifLarge,
						"relative text-beige-92 max-w-[10ch] mx-auto"
					)}
				>
					{text}
				</h1>
			)}

			<div className="absolute inset-x-0 flex flex-col items-center space-y-3 -bottom-9">
				<p className="font-sans font-light text-beige-92 text-12 leading-1_15">
					Explore
				</p>

				<div aria-hidden className="bg-beige-92 w-[1px] h-18" />
			</div>
		</section>
	)
}

export function mapDataToProps({ data }: MapDataToPropsCtx<GradientTextSlice>) {
	return {
		text: asText(data.primary.text),
		videoThumbnailUrl: data.primary.video_thumbnail.url,
		videoThumbnailAlt: data.primary.video_thumbnail.alt,
	}
}

export default VideoHero
