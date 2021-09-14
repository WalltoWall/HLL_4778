import clsx from "clsx"

const Line = () => <div className="bg-beige-92 w-[30px] h-[3px] rounded-full" />

export const MenuButton = ({
	className,
	children,
	...props
}: React.ComponentPropsWithoutRef<"button">) => {
	return (
		<button
			className={clsx("grid gap-y-[10px]", "focus:ring", className)}
			{...props}
		>
			<Line />
			<Line />
			{children}
		</button>
	)
}
