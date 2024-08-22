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
			boxShadow: {
				light:"rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
			},
		},
	},
	plugins: [],
};
