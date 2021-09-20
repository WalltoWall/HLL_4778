import * as React from "react"
import clsx from "clsx"
import { graphql } from "gatsby"
import { postNetlifyForm, createFormData } from "@walltowall/helpers"

import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"
import type { NewsletterFormFragment } from "../gqlTypes.gen"
import { BoundedBox } from "../components/BoundedBox"
import { SendIcon } from "../components/SendIcon"

type FormState = "unsubmitted" | "submitting" | "submitted" | "error"

interface FormSchema {
	email: HTMLInputElement
}

export const sliceType = "PrismicPageDataBodyNewsletterForm"

function getVariant(state: FormState) {
	switch (state) {
		case "unsubmitted":
			return { bg: "bg-blue-31", text: undefined }

		case "submitting":
			return {
				bg: "bg-gray-13",
				text: "Sending your email, hang tight!",
			}

		case "submitted":
			return { bg: "bg-green-27", text: "Thank you for subscribing!" }

		case "error":
			return {
				bg: "bg-red-45",
				text: "Oops! Something went wrong. Try again?",
			}

		default:
			return { bg: "bg-blue-31", text: undefined }
	}
}

const NewsletterForm = ({
	heading,
	placeholderText,
	withOverhang = false,
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

	const variant = getVariant(submissionState)

	return (
		<BoundedBox
			tag="section"
			className="bg-beige-92"
			nextSharesBg={withOverhang}
		>
			<div
				className={clsx(
					variant.bg,
					"px-4 md:px-9 lg:px-14",
					"py-5 md:py-12 lg:py-18",
					"space-y-18 md:space-y-32 lg:space-y-45",
					"transition duration-250",
					withOverhang && "-mb-21 md:-mb-39 lg:-mb-54"
				)}
			>
				{heading && (
					<h2
						className={clsx(
							"font-serif",
							"text-white",
							"text-32 md:text-42 lg:text-62",
							"leading-1"
						)}
					>
						{variant.text ?? heading}
					</h2>
				)}

				<form
					className={clsx(
						submissionState === "submitting" && "cursor-not-allowed opacity-75",
						"transition",
						"relative text-beige-92",
						"max-w-[90ch]"
					)}
					onSubmit={submitToNetlify}
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
							"border-beige-92",
							"rounded-full",
							"font-sans",
							"leading-1",
							"pl-3 md:pl-4 lg:pl-6",
							"pr-11 md:pr-12 lg:pr-13",
							"py-2 md:py-3 lg:py-5",
							"w-full",
							"placeholder-beige-92/60",
							"focus:outline-none focus:ring focus:border-beige-92"
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
			</div>
		</BoundedBox>
	)
}

export function mapDataToProps({
	data,
	context,
}: MapDataToPropsCtx<
	NewsletterFormFragment,
	ReturnType<typeof mapDataToContext>
>) {
	return {
		heading: data.primary?.heading?.text,
		placeholderText: data.primary?.placeholder_text,
		withOverhang: context?.nextIsFooter,
	}
}

export function mapDataToContext({
	nextType,
}: MapDataToContextCtx<NewsletterFormFragment>) {
	return {
		backgroundColor: "beige",
		nextIsFooter: nextType === undefined,
	}
}

export const gqlFragment = graphql`
	fragment NewsletterForm on PrismicPageDataBodyNewsletterForm {
		primary {
			heading {
				text
			}
			placeholder_text
		}
	}
`

export default NewsletterForm
