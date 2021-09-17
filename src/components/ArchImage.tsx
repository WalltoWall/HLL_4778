import * as React from "react"
import clsx from "clsx"

import { Image, ImageProps } from "./Image"

const variants = {
	normal: "aspect-w-8 aspect-h-7",
	tall: "aspect-w-8 aspect-h-9",
}

interface ArchImageProps extends React.ComponentPropsWithoutRef<"div"> {
	imageProps?: ImageProps
	src?: string
	alt?: string
	variant?: keyof typeof variants
	aspectRatioClassName?: string
}

export const ArchImage = ({
	className,
	imageProps,
	src,
	alt,
	variant = "normal",
	aspectRatioClassName,
	...props
}: ArchImageProps) => {
	const variantStyles = variants[variant]

	return (
		<div
			className={clsx(
				aspectRatioClassName ? aspectRatioClassName : variantStyles,
				className
			)}
			{...props}
		>
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
