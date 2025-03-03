import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from 'pinia'; 
import App from './App.vue';
import Home from './components/Home.vue';
import Registration from './components/registration/Registration.vue';
import Login from './components/registration/Login.vue';
import Test from './components/Test.vue';
import Catalog from './components/catalog/Catalog.vue';
import Basket from './components/basket/Basket.vue';
import Modal from './components/catalog/Modal.vue';

const router = createRouter({
  routes: [
    {
      path: "/",
      redirect: "/home", 
    },
    {
      path: "/test",
      name: "test", 
      component: Test,
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
      name: 'login',
      component: Login
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
    {
      path: "/basket",
      name: "basket",
      component: Basket,
    },
    {
      path: "/modal",
      name: "modal",
      component: Modal,
    },
  ],
  history: createWebHistory(),
});

const app = createApp(App);
const pinia = createPinia(); 

app.use(pinia); 
app.use(router);
app.mount("#app");
