import * as React from "react"
import clsx from "clsx"

import { Image, ImageProps } from "./Image"

interface ArchImageProps extends React.ComponentPropsWithoutRef<"div"> {
	imageProps?: ImageProps
	src?: string
	alt?: string
}

export const ArchImage = ({
	className,
	imageProps,
	src,
	alt,
	...props
}: ArchImageProps) => {
	return (
		<div className={clsx("aspect-w-8 aspect-h-7", className)} {...props}>
			<Image
				{...imageProps}
				className={clsx(
					"object-cover object-center",
					"w-full h-full",
					"rounded-tl-full rounded-tr-full",
					imageProps?.className
				)}
				src={src}
				alt={alt}
			/>
		</div>
	)
}
