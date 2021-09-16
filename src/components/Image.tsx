import * as React from "react"

export type ImageProps = React.ComponentPropsWithoutRef<"img">

export const Image = (props: ImageProps) => {
	return <img loading="lazy" decoding="async" {...props} />
}
