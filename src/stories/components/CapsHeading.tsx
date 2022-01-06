import * as React from "react"

interface Props {
	children: string
	style?: React.CSSProperties
}

export const CapsHeading = ({ children, style }: Props) => {
	return (
		<div
			style={{
				fontWeight: 900,
				fontSize: 13,
				color: "#999",
				letterSpacing: "6px",
				lineHeight: "24px",
				textTransform: "uppercase",
				fontFamily: "system-ui",
				...style,
			}}
		>
			{children}
		</div>
	)
}
