// Imports
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// Custom Directives

// Random Color Directive
Vue.directive('color', {
  bind(el, binding, vnode) {
    el.style.color = `#${Math.random().toString().slice(2, 8)}`; // Randomize color of element
  }
});

// Theme Directive
Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value === 'wide') {
      el.style.maxWidth = '1200px';
    } else if (binding.value === 'narrow') {
      el.style.maxWidth = '560px';
    }

    if (binding.arg === 'column') {
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
});

// Vue App
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
