module.exports = {
	purge: ["./src/**/*.{ts,tsx}"],
	mode: "jit",
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontSize: {
			16: "16",
		},
		lineHeight: {
			1: "1",
		},
		fontFamily: {
			sans: ["Work SansVariable", "system-ui"],
			serif: ["bely-display", "serif"],
		},

		colors: {
			white: "#fff",
			black: "#000",
			transparent: "#fff0",
			current: "currentColor",
		},

		capsize: {
			fontMetrics: {
				sans: {
					capHeight: 660,
					ascent: 930,
					descent: -243,
					lineGap: 0,
					unitsPerEm: 1000,
				},
				serif: {
					capHeight: 725,
					ascent: 950,
					descent: -250,
					lineGap: 0,
					unitsPerEm: 1000,
				},
			},
		},

		extend: {},
	},
	variants: { extend: {} },
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
		require("@themosaad/tailwindcss-capsize"),
	],
}
