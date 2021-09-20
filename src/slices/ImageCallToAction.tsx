import * as React from "react"
import clsx from "clsx"
import { graphql } from "gatsby"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { ImageCallToActionFragment } from "../gqlTypes.gen"

import { BoundedBox } from "../components/BoundedBox"
import { ButtonLink } from "../components/Button"
import { ArchImage } from "../components/ArchImage"
import { HTMLContent } from "../components/HTMLContent"

export const sliceType = "PrismicPageDataBodyImageCallToAction"

const ImageCallToAction = ({
	imageUrl,
	imageAlt,
	heading,
	textHTML,
	buttonHref,
	buttonText,
}: ReturnType<typeof mapDataToProps>) => {
	return (
		<BoundedBox
			tag="section"
			className="bg-green-27 text-beige-92"
			width="base"
		>
			<div
				className={clsx(
					"grid",
					"gap-y-7 md:gap-y-0",
					"md:grid-cols-2 md:items-center",
					"md:gap-x-12 lg:gap-x-25"
				)}
			>
				{imageUrl && (
					<div
						className={clsx(
							"w-full max-w-sm mx-auto",
							"mb-2 md:mb-0",
							"lg:max-w-none lg:mx-0"
						)}
					>
						<ArchImage src={imageUrl} alt={imageAlt ?? ""} variant="tall" />
					</div>
				)}

				<div className="space-y-8">
					<div className="text-center space-y-7 md:text-left lg:space-y-9">
						{heading && (
							<h2
								className={clsx(
									"font-serif leading-1_15",
									"text-32 md:text-42 lg:text-52"
								)}
							>
								{heading}
							</h2>
						)}

						{textHTML && (
							<HTMLContent
								html={textHTML}
								className={clsx(
									"max-w-[45ch] mx-auto w-full",
									"md:mr-auto md:ml-0"
								)}
							/>
						)}
					</div>

					{buttonHref && buttonText && (
						<ButtonLink href={buttonHref} variant="filled">
							{buttonText}
						</ButtonLink>
					)}
				</div>
			</div>
		</BoundedBox>
	)
}

export function mapDataToProps({
	data,
}: MapDataToPropsCtx<ImageCallToActionFragment>) {
	return {
		imageUrl: data.primary?.image?.url,
		imageAlt: data.primary?.image?.alt,
		heading: data.primary?.heading?.text,
		textHTML: data.primary?.text?.html,
		buttonHref: data.primary?.button_link?.url,
		buttonText: data.primary?.button_text,
	}
}

export function mapDataToContext(
	_ctx: MapDataToContextCtx<ImageCallToActionFragment>
) {
	return {
		backgroundColor: "green",
	}
}

export const gqlFragment = graphql`
	fragment ImageCallToAction on PrismicPageDataBodyImageCallToAction {
		primary {
			image {
				url
				alt
			}
			heading {
				text
			}
			text {
				html
			}
			button_link {
				url
			}
			button_text
		}
	}
`

export default ImageCallToAction
