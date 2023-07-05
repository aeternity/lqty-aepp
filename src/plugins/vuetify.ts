/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

import { VDataTable } from 'vuetify/labs/VDataTable'


// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    VDataTable
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          primary: '#1161fe',
          secondary: '#ff2b5e',
        },
      },
      dark: {
        colors: {
          primary: '#1161fe',
          secondary: '#ff2b5e',
        },
      },
    },
  },
})
