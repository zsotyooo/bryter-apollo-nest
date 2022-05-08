import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/applications",
      name: "applications",
      component: () =>
        import("@/features/application/views/ApplicationsView.vue"),
    },
  ],
});

export default router;
