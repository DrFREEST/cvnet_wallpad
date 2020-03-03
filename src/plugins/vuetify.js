// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
// import Vuetify from 'vuetify/lib'

import colors from 'vuetify/lib/util/colors'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
	theme: {
    // light: true,
		themes:{
			light:{
				primary: '#1976D2',
				secondary: '#424242',
				accent: '#82B1FF',
				error: '#FF5252',
				info: '#2196F3',
				success: '#4CAF50',
				warning: '#FFC107',
			}
		}
  },
}

export default new Vuetify(opts)
