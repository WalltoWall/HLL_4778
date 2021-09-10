module.exports = {
	purge: ["./src/**/*.{ts,tsx}"],
	mode: "jit",
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontSize: {
			8: "8",
			10: "10",
			12: "12",
			13: "13",
			16: "16",
			18: "18",
			22: "22",
			28: "28",
			32: "32",
			42: "42",
			52: "52",
			62: "62",
		},
		lineHeight: {
			1: "1",
			"1_15": "1.15",
		},
		fontFamily: {
			sans: ["Work SansVariable", "system-ui"],
			sansExt: ["monotype-grotesque-extended", "system-ui"],
			serif: ["bely-display", "serif"],
		},

		colors: {
			white: "#fff",
			black: "#000",
			transparent: "#fff0",
			current: "currentColor",

			beige: { 92: "#F7F2E2" },
			red: {
				45: "#E70000",
				50: "#FF0000",
			},
			yellow: {
				50: "#FFAB00",
			},
			green: {
				27: "#6D8E00",
			},
			blue: {
				31: "#007CA0",
			},
			purple: {
				57: "#7452D4",
			},
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
				sansExt: {
					capHeight: 694,
					ascent: 981,
					descent: -252,
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
