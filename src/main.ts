import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { HiSolidMail, IoMail } from 'oh-vue-icons/icons'

addIcons(HiSolidMail, IoMail)

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.mount('#app')
