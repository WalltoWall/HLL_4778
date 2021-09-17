import * as React from "react"

export const FacebookIcon = (props: React.ComponentPropsWithoutRef<"svg">) => {
	return (
		<svg viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg" {...props}>
			<g fill="none" fillRule="evenodd" transform="translate(.25 .25)">
				<path d="m0 0h32v32h-32z" />
				<g
					stroke="#f7f2e2"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
				>
					<circle cx={16} cy={16} r={12} />
					<path d="m21 11.0001175h-2c-1.6568542 0-3 1.3431458-3 3v14" />
					<path d="m12 18.000118h8" />
				</g>
			</g>
		</svg>
	)
}
