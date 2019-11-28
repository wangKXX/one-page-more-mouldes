
export default  [{
  path: '/order',
  name: "order",
  redirect: '/order/index',
  component: () => import("../views/index.vue"),
  children: [
    {
      path: 'index',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: 'about',
      name: 'about',
      component: () => import('../views/About.vue')
    }
  ]
}]
