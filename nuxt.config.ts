import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: ["@nuxtjs/tailwindcss", "nuxt-graphql-client"],

  runtimeConfig: {
    public: {
      "graphql-client": {
        clients: {
          default: {
            host: "https://graphql.datocms.com",
            token: {
              name: "DATOCMS-Read-Only-Token",
              value: process.env.DATO_API_TOKEN,
              type: 'Bearer',
            },
            retainToken: true,
          },
        },
      },
    },
  },
});
