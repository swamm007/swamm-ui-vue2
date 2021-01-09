import Vue from 'vue'
import App from './app'
import SWAMM from '../lib/swamm-ui.umd'
console.log(SWAMM)

Vue.use(SWAMM)
new Vue({
    render: h => h(App)
}).$mount('#app')