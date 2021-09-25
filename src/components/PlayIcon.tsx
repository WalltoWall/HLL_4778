import * as React from "react"

export const PlayIcon = (props: React.ComponentPropsWithoutRef<"svg">) => {
	return (
		<svg viewBox="0 0 83 98" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="m109.157364 58.7287301-69.2988775-42.1662138c-1.1884912-.7231597-2.6765788-.7509046-3.8914299-.0725544s-1.9670566 1.9570328-1.9670566 3.3438243v84.3324278c0 1.386791.7522055 2.665474 1.9670566 3.343824s2.7029387.650605 3.8914299-.072554l69.2988775-42.1662141c1.144569-.6964357 1.842636-1.9357287 1.842636-3.2712699s-.698067-2.5748342-1.842636-3.2712699z"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={6}
				transform="translate(-31 -13)"
			/>
		</svg>
	)
}
