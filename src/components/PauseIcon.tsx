import * as React from "react"

export const PauseIcon = (props: React.ComponentPropsWithoutRef<"svg">) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
				d="M176 96h16v320h-16zM320 96h16v320h-16z"
			/>
		</svg>
	)
}
