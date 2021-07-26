const routes = [
  {
    path: "/",
    component: () => import("pages/GamePage.vue"),
  },
  {
    path: "/stat",
    component: () => import("pages/StatisticsPage.vue"),
  },

  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
