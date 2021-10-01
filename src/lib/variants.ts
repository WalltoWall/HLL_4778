import clsx from "clsx"

type Variant = Record<string, string>

type DefaultVariants<TVariants extends Record<string, Variant>> = {
	[K in keyof TVariants]?: keyof TVariants[K]
}

type ActiveVariants<
	TVariants extends Record<string, Variant>,
	TDefaultVariants extends DefaultVariants<TVariants>
> = {
	[K in keyof Omit<TVariants, keyof TDefaultVariants>]: keyof TVariants[K]
} & {
	[K in keyof TVariants]?: keyof TVariants[K]
}

interface FactoryOptions<
	TVariants extends Record<string, Variant>,
	TDefaultVariants extends DefaultVariants<TVariants>
> {
	base: string
	variants: TVariants
	defaultVariants: TDefaultVariants
}

export function variantFnFactory<
	TVariants extends Record<string, Variant>,
	TDefaultVariants extends DefaultVariants<TVariants>
>({
	base,
	variants,
	defaultVariants,
}: FactoryOptions<TVariants, TDefaultVariants>) {
	return (
		activeVariants?: ActiveVariants<TVariants, TDefaultVariants>
	): string => {
		if (!activeVariants) return base

		let acc = ""

		for (const key in activeVariants) {
			const value = activeVariants[key] as string | undefined
			if (!value) continue

			const defaultVariantKey = defaultVariants?.[key] as string
			const defaultVariantClassName = variants[key][defaultVariantKey]

			const variantClassName = variants[key][value]

			acc += " " + variantClassName ?? defaultVariantClassName
		}

		acc = acc.trim()

		return clsx(acc, base)
	}
}

export type GetVariants<TVariantsFn extends (...args: any) => string> =
	NonNullable<Parameters<TVariantsFn>[0]>
