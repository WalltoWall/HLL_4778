interface Props {
	children: string
}

export const VisuallyHidden = ({ children }: Props) => {
	return <span className="sr-only">{children}</span>
}
