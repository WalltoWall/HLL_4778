import * as React from "react"
import clsx from "clsx"
import { graphql } from "gatsby"
import { postNetlifyForm, createFormData } from "@walltowall/helpers"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { NewsletterFormFragment } from "../gqlTypes.gen"
import { BoundedBox } from "../components/BoundedBox"
import { SendIcon } from "../components/SendIcon"
import { Card } from "../components/Card"
import {
	ColorVariant,
	getColorVariant,
	getColorVariantStyles,
} from "../lib/colorVariant"

type FormState = "unsubmitted" | "submitting" | "submitted" | "error"

interface FormSchema {
	email: HTMLInputElement
}

export const sliceType = "PrismicPageDataBodyNewsletterForm"

interface FormStateVariant {
	color?: ColorVariant
	text?: string
}

function getFormStateVariant(state: FormState): FormStateVariant {
	switch (state) {
		case "unsubmitted":
			return { color: undefined, text: undefined }

		case "submitting":
			return {
				color: "gray",
				text: "Subscribing...",
			}

		case "submitted":
			return { color: "green", text: "Mahalo!" }

		case "error":
			return {
				color: "red",
				text: "Oops! Something went wrong.",
			}

		default:
			return { color: undefined, text: undefined }
	}
}

const NewsletterForm = ({
	heading,
	placeholderText,
	color,
}: ReturnType<typeof mapDataToProps>) => {
	const [submissionState, setSubmissionState] =
		React.useState<FormState>("unsubmitted")

	async function submitToNetlify(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()

		setSubmissionState("submitting")

		const target = event.target as FormSchema & EventTarget

		try {
			const wasSuccessful = await postNetlifyForm({
				formName: "newsletter-signup",
				data: createFormData({ email: target.email.value }),
			})

			if (wasSuccessful) setSubmissionState("submitted")
			else setSubmissionState("error")
		} catch {
			setSubmissionState("error")
		}
	}

	const formStateVariant = getFormStateVariant(submissionState)
	const variantStyles = getColorVariantStyles(formStateVariant.color ?? color)

	return (
		<BoundedBox tag="section" className="h-0">
			<Card
				className={clsx(
					variantStyles.bg,
					"space-y-18 md:space-y-32 lg:space-y-45",
					"transition duration-250",
					"translate-y-[-50%]"
				)}
			>
				{heading && (
					<h2
						className={clsx(
							"font-serif",
							"text-42 md:text-52 lg:text-62",
							"leading-1",
							variantStyles.textColor
						)}
					>
						{formStateVariant.text ?? heading}
					</h2>
				)}

				<form
					className={clsx(
						submissionState === "submitting" && "cursor-not-allowed opacity-75",
						"transition",
						"relative",
						variantStyles.textColor,
						"max-w-[90ch]"
					)}
					onSubmit={submitToNetlify}
					data-netlify={true}
				>
					<input
						placeholder={placeholderText}
						type="email"
						name="email"
						disabled={submissionState === "submitting"}
						className={clsx(
							"bg-transparent",
							"text-14 md:text-18 lg:text-24",
							"border md:border-2 lg:border-[3px]",
							"rounded-full",
							"font-sans",
							"leading-1",
							"pl-3 md:pl-4 lg:pl-6",
							"pr-11 md:pr-12 lg:pr-13",
							"py-2 md:py-3 lg:py-5",
							"w-full",
							"focus:outline-none focus:ring focus:border-transparent",
							variantStyles.borderColor,
							variantStyles.placeholderColor
						)}
					/>

					<SendIcon
						className={clsx(
							"absolute",
							"right-3 lg:right-5",
							"top-[50%] translate-y-[-50%]",
							"h-[18px] md:h-7 lg:h-10"
						)}
					/>
				</form>
			</Card>
		</BoundedBox>
	)
}

export function mapDataToProps({
	data,
}: MapDataToPropsCtx<
	NewsletterFormFragment,
	ReturnType<typeof mapDataToContext>
>) {
	return {
		heading: data.primary?.heading?.text,
		placeholderText: data.primary?.placeholder_text,
		color: getColorVariant(data.primary?.color),
	}
}

export function mapDataToContext({
	nextType,
}: MapDataToContextCtx<NewsletterFormFragment>) {
	return {
		backgroundColor: Symbol("never"),
		overhangsPrevious: true,
		overhangsNext: !nextType,
	}
}

export const gqlFragment = graphql`
	fragment NewsletterForm on PrismicPageDataBodyNewsletterForm {
		primary {
			heading {
				text
			}
			placeholder_text
			color
		}
	}
`

export default NewsletterForm
