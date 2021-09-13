import { Gradient } from "../components/Gradient"
import { asText } from "@prismicio/helpers"
import type * as pt from "@prismicio/types"
import type { MapDataToPropsCtx } from "../pages/[uid]"

export const sliceType = "gradient_text"

export type GradientTextSlice = pt.Slice<
	typeof sliceType,
	{
		text: pt.RichTextField
	}
>

// TODO: Use scroll position to disable animation
const GradientText = ({ text }: ReturnType<typeof mapDataToProps>) => {
	return (
		<section className="relative px-8 text-center py-55">
			<Gradient className="absolute inset-0" />

			<h2 className="relative font-serif text-24 leading-1_2 text-beige-92">
				{text}
			</h2>
		</section>
	)
}

export function mapDataToProps({ data }: MapDataToPropsCtx<GradientTextSlice>) {
	return {
		text: asText(data.primary.text),
	}
}

export default GradientText
