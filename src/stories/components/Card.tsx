import * as React from "react"
import "./Card.css"

interface Props {
	href: string
	imgSrc: string
	imgAlt: string
	heading: string
	text: string
}

export const Card = ({ href, imgAlt, imgSrc, heading, text }: Props) => {
	return (
		<a href={href} className="link-item">
			<img src={imgSrc} alt={imgAlt} />

			<span>
				<strong>{heading}</strong>
				{text}
			</span>
		</a>
	)
}
