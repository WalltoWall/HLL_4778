module.exports = {
	purge: ["./src/**/*.{ts,tsx}"],
	mode: "jit",
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontSize: {
			8: "8px",
			10: "10px",
			11: "11px",
			12: "12px",
			13: "13px",
			14: "14px",
			15: "15px",
			16: "16px",
			18: "18px",
			22: "22px",
			24: "24px",
			28: "28px",
			32: "32px",
			36: "36px",
			42: "42px",
			52: "52px",
			62: "62px",
		},
		lineHeight: {
			1: "1",
			"1_15": "1.15",
			"1_2": "1.2",
			"1_3": "1.3",
			"1_5": "1.5",
		},
		fontFamily: {
			sans: ["Work SansVariable", "system-ui"],
			sansExt: ["monotype-grotesque-extended", "system-ui"],
			serif: ["bely-display", "serif"],
		},
		letterSpacing: {
			caps: ".14em",
		},

		spacing: Array.from({ length: 100 }, (_, idx) => idx).reduce(
			(acc, curr) => {
				acc[curr] = `${curr * 4}px`

				return acc
			},
			{}
		),

		colors: {
			white: "#fff",
			black: "#000",
			transparent: "#fff0",
			current: "currentColor",

			gray: { 13: "#241F20", 23: "#3f3738" },
			beige: { 92: "#F7F2E2" },
			red: {
				45: "#CC0000",
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
				57: "#6E3CBE",
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
