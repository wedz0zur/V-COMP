import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue'
import Home from './components/Home.vue';
import Registration from './components/registration/Registration.vue'
import Login from './components/registration/Login.vue';

const router = createRouter({
    routes: [
      {
        path: "/",
        redirect: "/home", 
      },
      {
        path: "/home",
        name: "home",
        component: Home,
      },
      {
        path: "/registration",
        name: "registration",
        component: Registration,
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
    },
    ],
    history: createWebHistory(),
  });
  const app = createApp(App);
  app.use(router);
  app.mount("#app");
  