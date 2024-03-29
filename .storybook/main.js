module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		{
			name: "@storybook/addon-postcss",
			options: {
				postcssLoaderOptions: {
					implementation: require("postcss"),
				},
			},
		},
		"storybook-css-modules-preset",
		"storybook-addon-gatsby",
	],
	framework: "@storybook/react",
	core: {
		builder: "webpack5",
	},
}
