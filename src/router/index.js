import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/writeblog",
    name: "writeblog",
    component: () => import("../views/WriteBlog.vue"),

    children: [
      {
        path: "myblog",
        component: () => import("../views/WMyBlog.vue"),
      },
      {
        path: "mycollect",
        component: () => import("../views/WMyCollect.vue"),
      },
    ],
  },
  {
    path: "/photo",
    name: "photo",
    component: () => import("../views/Photo.vue"),
  },
  {
    path: "/blogdetail",
    name: "blogdetail",
    component: () => import("../views/BlogDetail.vue"),
  },
  {
    path: "*",
    name: "404",
    component: () => import("../views/NotFound.vue"),
  },
  {
    path: "/index",
    name: "index",
    component: () => import("../views/Index.vue"),
  },
  {
    path: "/adminlogin",
    name: "adminlogin",
    component: () => import("../views/AdminLogin.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
