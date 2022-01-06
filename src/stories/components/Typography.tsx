import * as React from "react"

import { HTMLContent } from "../../components/HTMLContent"
import { html, paragraphs, sentences, words } from "../utils"

const Label: React.FC = ({ children }) => {
	return (
		<p
			className="antialiased font-medium text-14 text-docsGray-500"
			style={{
				fontFamily: "system-ui",
				textRendering: "optimizeLegibility",
			}}
		>
			{children}
		</p>
	)
}

const Sample: React.FC = ({ children }) => {
	return <div className="space-y-4">{children}</div>
}

export const Typography = () => {
	return (
		<div className="mt-8 space-y-12">
			<Sample>
				<Label>Heading 2</Label>
				<HTMLContent html={html`<h2>${sentences(1)}</h2>`} />
			</Sample>

			<Sample>
				<Label>Heading 4</Label>
				<HTMLContent html={html`<h4>${sentences(1)}</h4>`} />
			</Sample>

			<Sample>
				<Label>Heading 5</Label>
				<HTMLContent html={html`<h5>${words(5)}</h5>`} />
			</Sample>

			<Sample>
				<Label>Paragraph</Label>
				<HTMLContent html={html`<p>${paragraphs(1)}</p>`} />
			</Sample>

			<Sample>
				<Label>Bold Paragraph</Label>
				<HTMLContent html={html`<p><strong>${words(6)}</strong></p>`} />
			</Sample>

			<Sample>
				<Label>Inline Link</Label>
				<HTMLContent
					html={html`
						<p>${paragraphs(1)}</p>
						<p><a href="#">${words(6)}</a></p>
					`}
				/>
			</Sample>
		</div>
	)
}
