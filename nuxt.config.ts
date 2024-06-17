// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules:["nuxt-icon", "@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxtjs/supabase"],
  css:["~/assets/css/style.css"],
  supabase: {
    // Options
    redirect:false
  }
})