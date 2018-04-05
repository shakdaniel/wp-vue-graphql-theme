import Vue from 'vue'
import Router from 'vue-router'
import Page from '../components/Page'
Vue.use(Router)
export default new Router({
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Page
    },
    {
      name: 'Projects',
      path: '/projects',
      component: Page
    },
    {
      name: 'About',
      path: '/about',
      component: Page
    },
    {
      name: 'Blog',
      path: '/blog',
      component: Page
    },
    {
      name: 'Post',
      path: '/blog/:post',
      component: Page
    },
    {
      name: 'Contact',
      path: '/contact',
      component: Page
    }
  ],
  mode: 'history'
})
