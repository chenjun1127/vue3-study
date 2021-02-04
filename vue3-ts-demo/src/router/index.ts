import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/first",
    name: "First",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "first" */ "../views/First.vue")
  },
  {
    path: "/second",
    name: "Second",
    component: () =>
      import(/* webpackChunkName: "second" */ "../views/Second.vue")
  },
  {
    path: "/third",
    name: "Third",
    component: () =>
      import(/* webpackChunkName: "third" */ "../views/Third.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
