import * as React from "react"
import clsx from "clsx"
import { AnimatePresence, m } from "framer-motion"

import { Link, LinkProps } from "../Link"

const desktopUnderlineVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
}

interface Props extends LinkProps {
	isFocused?: boolean
}

export const DesktopMenuLink = ({
	className,
	children,
	isFocused = false,
	...props
}: Props) => {
	return (
		<Link className={clsx(className, "block relative")} {...props}>
			<AnimatePresence>
				{isFocused && (
					<m.div
						key="underline"
						layoutId="underline"
						variants={desktopUnderlineVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
						className="absolute inset-x-0 bottom-[-6px] h-[2px] bg-beige-92 rounded"
					/>
				)}
			</AnimatePresence>

			<div className="uppercase text-16 leading-1_15 tracking-caps font-sansExt">
				{children}
			</div>
		</Link>
	)
}
