// Imports
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// * --- Custom Directives --- * \\
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

// * --- Custom Filer --- * \\
// Cut the values length to 100 characters at max
Vue.filter('snippet', value => {
  return `${value.slice(0, 100)}...`;
});

// Vue App
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
