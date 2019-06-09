// Importing Dependencies
import Vue from 'vue';
import Router from 'vue-router';
// Importing Components
import ShowBlog from './components/ShowBlog';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'show blog',
      component: ShowBlog
    },
    {
      path: '/add-blog',
      name: 'add blog',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/AddBlog.vue')
    },
    {
      path: '/blog/:id',
      name: 'blog page',
      component: () => import('./components/SingleBlog.vue')
    }
  ]
})
