import * as React from "react"
import "./Pill.css"

interface Props {
	text: string
	children: React.ReactNode
}

export const Pill = ({ text, children }: Props) => {
	return (
		<div className="tip-wrapper">
			<span className="tip">{text}</span>
			{children}
		</div>
	)
}
