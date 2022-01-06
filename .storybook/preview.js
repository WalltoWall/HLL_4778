import "@fontsource/work-sans/variable.css"
import "./preview.css"
import "../src/styles/global.css"
import "tailwindcss/tailwind.css"
import { LocationProvider } from "@gatsbyjs/reach-router"
import { IdProvider } from "@radix-ui/react-id"
import { MediaQueryProvider } from "../src/hooks/useMediaQuery"
import { LazyMotion, domMax } from "framer-motion"
import { MobileMenuProvider } from "../src/components/Header/MobileMenuProvider"

const rootSortOrder = [
	"Documentation",
	"Slices",
	"Document Types",
	"Style Guide",
]

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	options: {
		showRoots: true,
		storySort: (a, b) => {
			const byRoot =
				rootSortOrder.findIndex((root) => root === a[1].kind.split("/")[0]) -
				rootSortOrder.findIndex((root) => root === b[1].kind.split("/")[0])

			if (byRoot !== 0) return byRoot

			if (a[1].parameters.docsOnly && !b[1].parameters.docsOnly) return -1
			if (!a[1].parameters.docsOnly && b[1].parameters.docsOnly) return 1

			return a[1].kind === b[1].kind
				? 0
				: a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
		},
	},
}

export const decorators = [
	(Story) => (
		<IdProvider>
			<LazyMotion strict features={domMax}>
				<LocationProvider>
					<MediaQueryProvider>
						<MobileMenuProvider>
							<Story />
						</MobileMenuProvider>
					</MediaQueryProvider>
				</LocationProvider>
			</LazyMotion>
		</IdProvider>
	),
]
