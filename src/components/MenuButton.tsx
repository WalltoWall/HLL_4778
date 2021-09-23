import * as React from "react"
import clsx from "clsx"
import { m, useAnimation } from "framer-motion"

const Line = ({
	className,
	...props
}: React.ComponentPropsWithoutRef<typeof m.div>) => (
	<m.div
		className={clsx("bg-beige-92 w-[30px] h-[3px] rounded-full", className)}
		{...props}
	/>
)

interface Props extends React.ComponentPropsWithoutRef<"button"> {
	isOpen: boolean
}

export const MenuButton = React.forwardRef<HTMLButtonElement, Props>(
	({ className, children, isOpen, ...props }, ref) => {
		const topLineControls = useAnimation()
		const bottomLineControls = useAnimation()

		React.useEffect(() => {
			async function asyncEffect() {
				if (isOpen) {
					await Promise.all([
						topLineControls.start({ y: 6 }),
						bottomLineControls.start({ y: -6 }),
					])
					await Promise.all([
						topLineControls.start({ rotate: -45 }),
						bottomLineControls.start({ rotate: 45 }),
					])
				} else {
					await Promise.all([
						topLineControls.start({ rotate: 0 }),
						bottomLineControls.start({ rotate: 0 }),
					])
					await Promise.all([
						topLineControls.start({ y: 0 }),
						bottomLineControls.start({ y: 0 }),
					])
				}
			}

			asyncEffect()
		}, [isOpen])

		return (
			<button
				ref={ref}
				className={clsx("grid gap-y-[10px]", "focus:ring", className)}
				{...props}
			>
				<Line animate={topLineControls} />
				<Line animate={bottomLineControls} />

				{children}
			</button>
		)
	}
)

MenuButton.displayName = "MenuButton"
