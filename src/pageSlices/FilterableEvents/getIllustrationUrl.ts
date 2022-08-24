export type IllustrationType =
	| "flag"
	| "shaka"
	| "wave"
	| "slippers"
	| "mirror"
	| "butterfly"

import flagSvgUrl from "../../assets/flag.svg"
import shakaSvgUrl from "../../assets/shaka.svg"
import slippersSvgUrl from "../../assets/slippers.svg"
import waveSvgUrl from "../../assets/wave.svg"
import butterflyUrl from "../../assets/butterfly.webp"
import mirrorUrl from "../../assets/mirror.webp"

const illustrationMap: Record<IllustrationType, string> = {
	flag: flagSvgUrl,
	shaka: shakaSvgUrl,
	slippers: slippersSvgUrl,
	wave: waveSvgUrl,
	mirror: mirrorUrl,
	butterfly: butterflyUrl,
}

export function getIllustrationUrl(type: IllustrationType) {
	return illustrationMap[type]
}
