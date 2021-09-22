import * as React from "react"

export type ImageProps = React.ComponentPropsWithoutRef<"img">

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
	(props: ImageProps, ref) => {
		return <img loading="lazy" decoding="async" ref={ref} {...props} />
	}
)

Image.displayName = "Image"
