import * as React from "react"

export const ThumbIcon = (props: React.ComponentPropsWithoutRef<"svg">) => {
	return (
		<svg
			fill="none"
			viewBox="0 0 26 25"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			>
				<path
					clipRule="evenodd"
					d="m2 11h6v13h-6c-.55228 0-1-.4477-1-1v-11c0-.5523.44772-1 1-1z"
					fillRule="evenodd"
				/>
				<path d="m7 11 4.804-10c1.0193 0 1.9968.42143 2.7175 1.17157.7208.75015 1.1257 1.76756 1.1257 2.82843v3h7.4312c.5512 0 1.0758.24633 1.4406.6764.3647.43006.5345 1.00244.4661 1.5717l-1.4411 12c-.1202 1.0008-.9377 1.7519-1.9068 1.7519h-14.6372" />
			</g>
		</svg>
	)
}
