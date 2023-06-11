/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				galacticBlue: '#755CDE',
				summerYellow: '#F6A560',
				lightPink: '#F39E9E',
				lightRed: '#EB7565',
				cyan: '#61C4B7',
				magenta: '#552049',
				offBlack: '#030303',
				mediumBrown: '#7A746E',
				lightCream: '#FFF7F0',
			},
		},
	},
	plugins: [],
}
