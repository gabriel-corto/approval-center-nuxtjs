export default defineNuxtConfig({
	compatibilityDate: "2025-05-15",
	devtools: { enabled: true },
	srcDir: "src",
	components: true,
	css: ["@/css/main.css"],
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/ui"],
	googleFonts: {
		families: {
			Inter: [400, 500, 600, 700],
		},
		display: "swap",
		preconnect: true,
	},
})
