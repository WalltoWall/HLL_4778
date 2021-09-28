import * as React from "react"

export const ArrowIcon = (props: React.ComponentPropsWithoutRef<"svg">) => {
	return (
		<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" {...props}>
			<g fill="none" fillRule="evenodd">
				<path d="m0 0h50v50h-50z" />
				<g
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={4}
				>
					<circle cx="25" cy="25" r="19" />
					<path d="m26 32 7-7-7-7" />
					<path d="m17 25h16" />
				</g>
			</g>
		</svg>
	)
}
