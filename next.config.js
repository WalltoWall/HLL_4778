/* eslint-disable tsdoc/syntax */
/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require("next-compose-plugins")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
})

/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
	webpack(config, { dev }) {
		if (!dev) {
			const aliases = config.resolve.alias || (config.resolve.alias = {})
			aliases.react = "preact/compat"
			aliases["react-dom"] = "preact/compat"
			aliases["react-ssr-prepass"] = "preact-ssr-prepass"
		}

		return config
	},

	typescript: {
		ignoreBuildErrors: true,
		ignoreDevErrors: true,
	},
}

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig)
