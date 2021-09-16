import * as React from "react"

export const Image = (props: React.ComponentPropsWithoutRef<"img">) => {
	return <img loading="lazy" decoding="async" {...props} />
}
