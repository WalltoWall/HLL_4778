import * as React from "react"
import clsx from "clsx"

import { VisuallyHidden } from "./VisuallyHidden"
import { UnstyledButton } from "./UnstyledButton"
import { ArrowIcon } from "./ArrowIcon"

interface ArrowButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	label: string
}

export const ArrowButton = ({
	className,
	label,
	...props
}: ArrowButtonProps) => {
	return (
		<UnstyledButton
			className={clsx(
				"w-13 h-13 lg:w-16 lg:h-16",
				"hover:text-purple-57 focus:text-purple-57",
				"transition",
				className
			)}
			withRing={false}
			{...props}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			<ArrowIcon className="w-full h-full" />
		</UnstyledButton>
	)
}
