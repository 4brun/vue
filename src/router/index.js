import Vue from "vue";
import Router from "vue-router";

import Dashboard from "../pages/Dashboard.vue";
import About from "../pages/About";
import Page404 from "../pages/Page404"
import PaymentAdd from "../components/PaymentAdd"
import Calculator from "../components/Calculator"

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
         path: '/calculator',
         component: Calculator,
         name: 'Calculator'
      },
      {
         path: '/Page404',
         component: Page404,
         name: '404'
      },
      {
         path: '*',
         component: Page404
      },
      {
         path: '/add/payment/:category',
         component: PaymentAdd,
         name: 'PaymentAdd'
      },
      {
         path: '/add/payment/:category?value=:value',
         component: PaymentAdd,
         name: 'PaymentAdd'
      }
   ]
})

export default router