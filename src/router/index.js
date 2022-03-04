import Vue from "vue";
import Router from "vue-router";

import Dashboard from "../pages/Dashboard.vue";
import About from "../pages/About";
import Page404 from "../pages/Page404"
import PaymentForm from "../components/PaymentForm"

Vue.use(Router);

const router = new Router({
   mode: "history",
   routes: [
      {
         path: '/',
         component: Dashboard,
         name: 'Dashboard'
      },
      {
         path: '/dashboard',
         component: Dashboard,
         name: 'Dashboard'
      },
      {
         path: '/dashboard/:page',
         component: Dashboard,
         name: 'Dashboard'
      },
      {
         path: '/about',
         component: About,
         name: 'About'
      },
      {
         path: '*',
         component: Page404
      },
      {
         path: '/add/payment/:category',
         component: PaymentForm,
         name: 'PaymentForm'
      },
      {
         path: '/add/payment/:category?value=:value',
         component: PaymentForm,
         name: 'PaymentForm'
      }
   ]
})

export default router