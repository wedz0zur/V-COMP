<template>
  <header class="fixed-header">
    <div class="header_nav_prof">
      <div class="header-nav">
        <div style="padding: 30px; margin-left: -80px">
          <transition name="slide">
            <section v-if="menu" class="burger-menu">
              <div class="logo">
                <router-link :to="{ name: 'home' }"><img class="footer_img" src="../footer/footer_img/footer-img.svg"
                    alt="" /></router-link>
                <button @click="menu = false" class="close-button">✖</button>
              </div>
              <div class="menu-header">
                <router-link to="/login">Войти</router-link>
                <span style="margin-top: 5px">|</span>
                <router-link style="margin-top: 3px" to="/registration">Регистрация</router-link>
              </div>

              <div class="menu-content">
                <h3 style="
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 16px;
                  ">
                  Информация
                  <span @click="toggleSubmenu('list1')" class="arrow">{{
                    list1 ? "🡩" : "🡫"
                  }}</span>
                </h3>
                <div v-if="list1" class="submenu">
                  <a class="aw" href="#">Акции</a>
                  <a class="aw" href="#">Кредит</a>
                  <a class="aw" href="#">Оплата и доставка</a>
                  <a class="aw" href="#">Гарантия</a>
                  <a class="aw" href="#">Частые вопросы</a>
                  <a class="aw" href="#">Новости</a>
                  <a class="aw" href="#">Блог</a>
                  <a class="aw" href="#">О нас</a>
                  <a class="aw" href="#">Политика конфиденциальности</a>
                  <a class="aw" href="#">Контакты</a>
                </div>

                <h3 style="
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 16px;
                  ">
                  Наши сервисы
                  <span @click="toggleSubmenu('list2')" class="arrow">{{
                    list2 ? "🡩" : "🡫"
                  }}</span>
                </h3>
                <div v-if="list2" class="submenu">
                  <a class="aw" href="#">Сервисный центр v-comp</a>
                  <a class="aw" href="#">Магазин Б/У товара</a>
                  <a class="aw" href="#">Скупка Б/У</a>
                  <a class="aw" href="#">Ремонт ПК и оргтехники</a>
                  <a class="aw" href="#">Компьютерная помощь</a>
                  <a class="aw" href="#">Сотрудничество</a>
                  <a class="aw" href="#">Главная</a>
                </div>
                <h3 style="margin-bottom: 16px">Контакты</h3>
                <p class="pw">(067) 11-12-485 - Отдел продаж</p>
                <p class="pw">(066) 484-39-22 - Отдел продаж</p>
                <p class="pw">Днепр, Европейская, 8 (бывшая Миронова 8)</p>
                <p class="pw">Понедельник-Пятница 9:00-19:00</p>
                <p class="pw">Суббота-Воскресенье: с 9:00-16:00</p>
              </div>
              <h3>Следите за нами</h3>
              <div class="icons">
                <div class="icon1"></div>
                <div class="icon2"></div>
                <div class="icon3"></div>
                <div class="icon4"></div>
              </div>
            </section>
          </transition>
        </div>
        <div class="burger" @click="menu = !menu">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <a href="#">Акции</a>
        <a href="#">Кредит</a>
        <a href="#">Оплата и доставка</a>
        <a href="#">Помощь</a>
        <a href="#">Скупка Б/У</a>
        <a href="#">Контакты</a>
      </div>
      <div class="profile-info">
        <span v-if="userName" class="user-phone">{{ userName }}</span>
        <router-link :to="{ name: 'personal' }">
          <img class="profile" src="./Header_img/Shape.svg" alt="" />
        </router-link>

      </div>
    </div>
    <div class="header_search">
      <router-link :to="{ name: 'home' }">
        <img class="v-comp-svg" src="./Header_img/Logo.svg" alt="" />
      </router-link>
      <router-link :to="{ name: 'catalog' }">
        <button class="catalog-green">
          КАТАЛОГ ТОВАРОВ
          <img src="./Header_img/Frame 7779.svg" class="catalog-gr" alt="" />
        </button>
      </router-link>

      <div class="input-group">
        <div class="form-outline" data-mdb-input-init>
          <input type="search" v-model="this.store.input" id="form1" class="form-control" />
          <label class="form-label" for="form1">Поиск</label>
        </div>
        <button type="button" class="btn btn-primary" data-mdb-ripple-init>
          <i class="fas fa-search"><img src="./Header_img/vector.svg" alt="" /></i>
        </button>
      </div>
      <div class="header-last">
        <router-link :to="{ name: 'favourites' }">
          <div class="favourites">
            <span v-if="favouritesCount > 0" class="favourites-count">{{ favouritesCount }}</span>
          </div>
        </router-link>
        <router-link :to="{ name: 'basket' }">
          <div class="basket">
            <span v-if="cartItemCount > 0" class="cart-count">{{ cartItemCount }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { useCartStore } from '@/store/cartStore.js';
import { useCatalogStore } from '@/store/store';
import { mapState } from 'pinia';
import { Input, Ripple, initMDB } from "mdb-ui-kit";
import "mdb-ui-kit/css/mdb.min.css";
import "mdb-ui-kit/js/mdb.es.min.js";

export default {
  name: "header",
  data() {
    return {
      userName: null,
      menu: false,
      list1: false,
      list2: false,
      store: useCatalogStore(),
    };
  },
  computed: {
    ...mapState(useCartStore, ['favourites', 'cart']),
    ...mapState(useCatalogStore, ["filterProducts", "loading", "error", "input"]),

    favouritesCount() {
      return this.favourites.length;
    },
    cartItemCount() {
      return this.cart.reduce((sum, item) => sum + item.quantity, 0);
    },
  },
  mounted() {
    initMDB({ Input, Ripple });
    this.loadUserData();
  },
  methods: {
    loadUserData() {
      const userData = JSON.parse(localStorage.getItem("users"));
      if (userData && userData.phone) {
        this.userName = userData.name;
      }
    },
    toggleSubmenu(list) {
      if (list === "list1") {
        this.list1 = !this.list1;
      } else if (list === "list2") {
        this.list2 = !this.list2;
      }
    },
  },
};
</script>


<style scoped>
header {
  box-shadow: 2px 2px 4px rgba(16, 16, 15, 0.3);

}

.cart-count {
  padding-top: 3px;
  position: relative;
  top: -5px;
  right: -30px;
  background-color: #06A56C;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}

.favourites-count {
  padding-top: 3px;
  position: relative;
  top: -5px;
  right: -30px;
  background-color: #FFCD1B;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}


.user-phone {
  font-family: "IBM Plex Mono", monospace;
  font-weight: 500;
  font-size: 15px;
  line-height: 12px;
  letter-spacing: 0%;
  color: #f4f8fb;
}

.header_nav_prof {
  height: 40px;
  padding: 0 10% 0 10%;
  background-color: #060f42;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-nav {
  width: 570px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-nav a {
  font-family: "IBM Plex Mono", monospace;
  font-weight: 500;
  font-size: 16px;
  line-height: 12px;
  color: #f4f8fb;
  text-decoration: none;
}

.burger {
  width: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.burger div {
  width: 20px;
  height: 2px;
  background-color: white;
}

.profile {
  width: 24;
  height: 24;
  cursor: pointer;
}

.header_search {
  height: 97px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10% 0 10%;
}

.catalog-gr {
  width: 20px;
  height: 20px;
}

.catalog-green {
  width: 173px;
  height: 42px;
  gap: 8px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 4px;
  background-color: #06a56c;
  font-family: "IBM Plex Mono", monospace;
  font-weight: 700;
  font-size: 14px;
  line-height: 12px;
  letter-spacing: 0%;
  color: #f4f8fb;
  cursor: pointer;
}

.input-group {
  width: 760px;
}

.favourites {
  width: 40px;
  height: 40px;
  background-image: url(./Header_img/heart-svgrepo-com.svg);
  background-position: center;
  background-size: cover;
}

.basket {
  width: 40px;
  height: 40px;
  background-image: url(./Header_img/basket-svgrepo-com.svg);
  background-position: center;
  background-size: cover;
  cursor: pointer;
}

.header-last {
  width: 150px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

h3 {
  font-family: "IBM Plex Mono", monospace;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0%;
  color: #d9d9d9;
}

.aw {
  font-family: "IBM Plex Mono", monospace;
  font-weight: 500;
  font-size: 15px;
  line-height: 16px;
  letter-spacing: 0%;
  color: #d9d9d9;
  display: block;
  margin-top: 12px;
}

.pw {
  font-family: "IBM Plex Mono", monospace;
  font-weight: 500;
  font-size: 15px;
  line-height: 16px;
  letter-spacing: 0%;
  color: #d9d9d9;
  margin-top: 10px;
}

.burger-button {
  font-size: 24px;
  cursor: pointer;
  background: none;
  border: none;
}

.burger-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 424px;
  height: 100%;
  background-color: #060f42;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  color: white;
}

.menu-header {
  display: flex;
  align-items: center;
  height: 24px;
  width: 165px;
  justify-content: space-between;
  color: white;
  margin-bottom: 16px;
}

.menu-header a {
  font-family: "IBM Plex Mono", monospace;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0%;
  color: #d9d9d9;
}

.close-button {
  position: absolute;
  top: 40px;
  right: 25px;
  background: none;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
}

.menu-content {
  margin-top: 20px;
}

.arrow {
  cursor: pointer;
  font-size: 18px;
}

.submenu {
  padding-left: 20px;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.icons {
  width: 170px;
  height: 32px;
  gap: 8px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.icon1 {
  width: 31px;
  height: 32px;
  border-radius: 50%;
  background-image: url(../footer/footer_img/Instagram.svg);
  background-position: center;
  background-size: cover;
  cursor: pointer;
}

.icon2 {
  width: 31px;
  height: 32px;
  border-radius: 50%;
  background-image: url(../footer/footer_img/facebook.svg);
  background-position: center;
  background-size: cover;
  cursor: pointer;
}

.icon3 {
  width: 31px;
  height: 32px;
  border-radius: 50%;
  background-image: url(../footer/footer_img/telegram.svg);
  background-position: center;
  background-size: cover;
  cursor: pointer;
}

.icon4 {
  width: 31px;
  height: 32px;
  border-radius: 50%;
  background-image: url(../footer/footer_img/viber.svg);
  background-position: center;
  cursor: pointer;
  background-size: cover;
}

.footer_img {
  width: 160px;
  height: 40px;
  object-fit: cover;
}

.logo {
  width: 364px;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  margin-top: -10px;
  margin-bottom: 20px;
}
</style>