import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "../components/HelloWorld";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "helloworld",
    component: HelloWorld,
  },
  {
    path: "/patient",
    name: "Patient",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Patient/PatientMain"),
  },
  {
    path: "/message",
    name: "Message",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Message/MessageMain"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
