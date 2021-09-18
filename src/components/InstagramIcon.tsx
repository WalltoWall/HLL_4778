import * as React from "react"

export const InstagramIcon = (props: React.ComponentPropsWithoutRef<"svg">) => {
	return (
		<svg viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg" {...props}>
			<g fill="none" fillRule="evenodd">
				<path d="m.25.25h32v32h-32z" />
				<circle
					cx={16.25}
					cy={16.25}
					r={5}
					stroke="currentColor"
					strokeWidth={2}
				/>
				<rect
					height={23}
					rx={6}
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					width={23}
					x={4.75}
					y={4.75}
				/>
				<circle
					cx={22.75}
					cy={9.749998}
					fill="currentColor"
					fillRule="nonzero"
					r={1.5}
				/>
			</g>
		</svg>
	)
}
