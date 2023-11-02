import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';
const routes = [
  {
    path: "/list",
    component: List,
  },{
    path: "/",
    component: Home,
  },
  {
    path: "/detail/:id", //:작명으로 파라미터 넣을 수 있음
    component: Detail,
  },{
    path: "/:abcd(.*)", // 404페이지
    component: Home,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 