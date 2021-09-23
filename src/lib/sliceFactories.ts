// We aren't particularly interested in strict types here with generics,
// but moreso that we have valid return / argument signatures.
/* eslint-disable @typescript-eslint/no-explicit-any */

import type { MapToComponentsProps } from "react-map-to-components"
import type { MapDataToContextCtx, MapDataToPropsCtx } from "../templates/page"

interface SliceModule {
	default: (props: any) => JSX.Element
	sliceType: string
	mapDataToProps?: <TData>(ctx: MapDataToPropsCtx<TData, any>) => any
	mapDataToContext?: <TData>(ctx: MapDataToContextCtx<TData>) => any
}
export type SliceMap = Record<string, SliceModule>

type ReshapedSliceComponent = SliceModule["default"] & {
	mapDataToProps?: SliceModule["mapDataToProps"]
	mapDataToContext?: SliceModule["mapDataToProps"]
}

export function mapFactory(sliceMap: SliceMap): MapToComponentsProps["map"] {
	let result: Record<string, React.ComponentType> = {}

	for (const key in sliceMap) {
		const module = sliceMap[key]

		const Component = module.default as ReshapedSliceComponent
		Component.mapDataToProps = module.mapDataToProps
		Component.mapDataToContext = module.mapDataToContext

		result[module.sliceType] = Component
	}

	return result
}

export function mapDataToPropsFactory(
	sliceMap: SliceMap
): MapToComponentsProps["mapDataToProps"] {
	let result: MapToComponentsProps["mapDataToProps"] = {}

	for (const key in sliceMap) {
		const module = sliceMap[key]

		result[module.sliceType] = module.mapDataToProps
	}

	return result
}

export function mapDataToContextFactory(
	sliceMap: SliceMap
): MapToComponentsProps["mapDataToContext"] {
	let result: MapToComponentsProps["mapDataToContext"] = {}

	for (const key in sliceMap) {
		const module = sliceMap[key]

		result[module.sliceType] = module.mapDataToContext
	}

	return result
}
