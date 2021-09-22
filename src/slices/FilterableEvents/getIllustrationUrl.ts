export type IllustrationType = "flag" | "shaka" | "wave" | "slippers"

import flagSvgUrl from "../../assets/flag.svg"
import shakaSvgUrl from "../../assets/shaka.svg"
import slippersSvgUrl from "../../assets/slippers.svg"
import waveSvgUrl from "../../assets/wave.svg"

const illustrationMap: Record<IllustrationType, string> = {
	flag: flagSvgUrl,
	shaka: shakaSvgUrl,
	slippers: slippersSvgUrl,
	wave: waveSvgUrl,
}

export function getIllustrationUrl(type: IllustrationType) {
	return illustrationMap[type]
}
