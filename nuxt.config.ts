// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxt/ui",
    "nuxt-highcharts",
    "nuxt-echarts",
    "@nuxt/fonts",
  ],
  echarts: {
    ssr: true,
    renderer: ["canvas", "svg"],
    charts: ["BarChart", "MapChart"],
    components: [
      "DatasetComponent",
      "GridComponent",
      "TooltipComponent",
      "ToolboxComponent",
      "GeoComponent",
      "VisualMapComponent",
    ],
  },
});