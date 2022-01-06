import * as React from "react"
import LinkTo from "@storybook/addon-links/react"
import "./Card.css"

interface Props {
	href: string
	imgSrc: string
	heading: string
	text: string
	story?: string
}

export const Card = ({ href, imgSrc, heading, text, story }: Props) => {
	const Comp = story ? LinkTo : "a"

	return (
		//@ts-ignore
		<Comp kind={story} href={href} className="cursor-pointer link-item">
			<img src={imgSrc} alt="" />

			<span>
				<strong>{heading}</strong>
				{text}
			</span>
		</Comp>
	)
}
