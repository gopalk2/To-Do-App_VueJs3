import Vue from 'vue' //1.importing 2file, Vue-Object/variable, vue.js-framework
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

new Vue({ //2.Initialize vue component
  render: h => h(App),
}).$mount('#app') //[id app]  //3.mount-link, html code(index.html) and vuejs code 
