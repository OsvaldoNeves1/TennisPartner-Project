import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

import Home from './views/Home';
import Encontrarjogadores from './views/Encontrarjogadores';
import Contato from './views/Contato';
import NotFound from './views/NotFound';

Vue.use(VueRouter)

import './scss/main.scss';

Vue.config.productionTip = false

const router = new VueRouter ({
  mode : 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/encontrarjogadores', component: Encontrarjogadores },
    { path: '/contato', component: Contato },
    { path: '*', component: NotFound,  },
  ],
})



new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
