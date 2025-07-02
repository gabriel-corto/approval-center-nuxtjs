export default defineNuxtConfig({
	compatibilityDate: "2025-05-15",
	devtools: { enabled: true },
	srcDir: "src",
	components: true,
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
	googleFonts: {
		families: {
			Inter: [400, 500, 600, 700],
		},
		display: "swap",
		preconnect: true,
	},
})
