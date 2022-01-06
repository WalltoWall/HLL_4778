// Type definitions for @gatsbyjs/reach-router 1.3
// Project: https://github.com/reach/router
// Definitions by: A.Mokhtar <https://github.com/xMokAx>
//                 Awwit <https://github.com/awwit>
//                 wroughtec <https://github.com/wroughtec>
//                 O.Jackman <https://github.com/chilledoj>
//                 Eyas <https://github.com/Eyas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare module "@gatsbyjs/reach-router" {
	export interface HLocation<S = unknown> {
		pathname: string
		search: string
		state: S
		hash: string
		key?: string | undefined
	}

	export type WindowLocation<S = unknown> = Window["location"] & HLocation<S>

	export interface LocationProviderProps {
		history?: History | undefined
		children?: React.ReactNode | LocationProviderRenderFn | undefined
	}

	export class LocationProvider extends React.Component<LocationProviderProps> {}

	export function useLocation(): WindowLocation
}
