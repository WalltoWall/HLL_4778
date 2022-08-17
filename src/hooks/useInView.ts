import * as React from "react"

export interface UseInViewOptions {
	threshold?: number
	ref: React.RefObject<Element>
}

export function useInView({ threshold = 0, ref }: UseInViewOptions): boolean {
	const [inView, setInView] = React.useState(false)
	const rObserver = React.useRef<IntersectionObserver>()

	React.useEffect(() => {
		if (!ref.current) return

		const callback: IntersectionObserverCallback = (entries) => {
			const entry = entries.find((e) => e.target == ref.current)
			if (!entry) return

			setInView(entry.isIntersecting)
		}

		rObserver.current ??= new IntersectionObserver(callback, { threshold })
		rObserver.current.observe(ref.current)

		return () => {
			rObserver.current?.disconnect()
		}
	}, [threshold])

	return inView
}
