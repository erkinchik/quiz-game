const routes = [
  {
    path: "/",
    component: () => import("layouts/GamePage.vue"),
    children: [
      {
        path: "",
        component: () => import("../pages/questionsPage"),
      },
      {
        path: "/stat",
        component: () => import("pages/StatisticsPage.vue"),
      },
    ],
  },

  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
