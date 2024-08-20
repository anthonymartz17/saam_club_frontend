/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				dark: "#161718",
				lightdark: "#373a40",
				light: "#FFFFFF",
				accent: "#FC4100",
			},
		},
	},
	plugins: [],
};
