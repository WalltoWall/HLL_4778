import * as React from "react"

export const GlobeIcon = (props: React.ComponentPropsWithoutRef<"svg">) => {
	return (
		<svg viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg" {...props}>
			<g fill="none" fillRule="evenodd">
				<path d="m.25.75h32v32h-32z" />
				<g stroke="currentColor" strokeWidth={2}>
					<circle cx="16.25" cy="16.75" r="12" />
					<path
						d="m4.933349 12.75h22.633119"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="m4.933821 20.75h22.632989"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<ellipse cx="16.25" cy="16.75" rx="5" ry="11.677868" />
				</g>
			</g>
		</svg>
	)
}
