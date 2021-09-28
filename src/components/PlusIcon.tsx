import clsx from "clsx"
import * as React from "react"

interface PlusIconProps extends React.ComponentPropsWithoutRef<"svg"> {
	isOpen?: boolean
}

export const PlusIcon = ({ isOpen, ...props }: PlusIconProps) => {
	return (
		<svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" {...props}>
			<g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth={2}>
				<circle cx="11" cy="11" r="10" />
				<g strokeLinecap="round" strokeLinejoin="round">
					<path d="m7 11h8" />
					<path d="m11 7v8" className={clsx(isOpen && "opacity-0")} />
				</g>
			</g>
		</svg>
	)
}
