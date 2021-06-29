import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    redirect: "/home/patient",
    children: [
      {
        path: "/home/patient",
        name: "Patient",
        component: () => import("../views/Patient/PatientMain"),
      },
      {
        path: "/home/overview",
        name: "Overview",
        component: () => import("../views/Overview/OverviewMain"),
      },
      {
        path: "/home/message",
        name: "Message",
        component: () => import("../views/Message/MessageMain"),
      },
    ],
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  { path: "/", redirect: "/login" },
];

const router = new VueRouter({
  routes,
});

export default router;
