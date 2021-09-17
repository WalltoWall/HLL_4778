import * as React from "react"
import clsx from "clsx"
import { graphql } from "gatsby"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { ImageCallToActionFragment } from "../gqlTypes.gen"

import { BoundedBox } from "../components/BoundedBox"
import { ButtonLink, ButtonVariant } from "../components/Button"
import { ArchImage } from "../components/ArchImage"
import { HTMLContent } from "../components/HTMLContent"

export const sliceType = "PrismicPageDataBodyImageCallToAction"

const ImageCallToAction = ({
	imageUrl,
	imageAlt,
	heading,
	textHTML,
	buttons = [],
}: ReturnType<typeof mapDataToProps>) => {
	return (
		<BoundedBox tag="section" className="bg-green-27 text-beige-92">
			<div
				className={clsx(
					"grid",
					"gap-y-7 md:gap-y-0",
					"md:grid-cols-2 md:items-center",
					"md:gap-x-8 lg:gap-x-12"
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
					<div className="text-center space-y-7 md:text-left lg:space-y-10">
						{heading && (
							<h2
								className={clsx(
									"font-serif text-32 leading-1_15",
									"md:text-36",
									"lg:text-52"
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

					<div
						className={clsx(
							"flex",
							"items-center md:items-start",
							"space-y-4 lg:space-y-0",
							"flex-col lg:flex-row",
							"lg:space-x-8"
						)}
					>
						{buttons.map((btn, idx) => (
							<ButtonLink
								key={`imageCtaBtn-${idx}`}
								href={btn.href}
								variant={btn.style}
							>
								{btn.text}
							</ButtonLink>
						))}
					</div>
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
		buttons: data.items?.map((item) => ({
			href: item?.button_link?.url,
			text: item?.button_text,
			style: item?.style?.toLowerCase() as ButtonVariant,
		})),
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
		}
		items {
			button_link {
				url
			}
			button_text
			style
		}
	}
`

export default ImageCallToAction
