<template>
  <header class="fixed-header">
    <div class="header_nav_prof">
      <div class="header-nav">
        <a href="#">Акции</a>
        <a href="#">Кредит</a>
        <a href="#">Оплата и доставка</a>
        <a href="#">Помощь</a>
        <a href="#">Скупка Б/У</a>
        <a href="#">Контакты</a>
      </div>
      <div class="profile-info" style="display: flex;">
        <span v-if="userName" class="user-name">{{ userName }}</span>
        <div style="color: white; width: 26px; height: 26px; background-color: #FFF; border-radius: 50px; display: flex; justify-content: space-between; align-items: center; ">
          <img
          class="profile"
          src="./Header_img/Shape.svg"
          alt="Profile"
          @click="handleProfileClick"
        />
        </div>
        
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
          <input
            type="search"
            v-model="this.store.input"
            id="form1"
            class="form-control"
          />
          <label class="form-label" for="form1">Поиск</label>
        </div>
        <button type="button" class="btn btn-primary" data-mdb-ripple-init>
          <i class="fas fa-search">
            <img src="./Header_img/vector.svg" alt="" />
          </i>
        </button>
      </div>
      <div class="header-last">
        <router-link :to="{ name: 'favourites' }">
          <div class="favourites">
            <span v-if="favouritesCount > 0" class="favourites-count">{{
              favouritesCount
            }}</span>
          </div>
        </router-link>
        <router-link :to="{ name: 'basket' }">
          <div class="basket">
            <span v-if="cartItemCount > 0" class="cart-count">{{
              cartItemCount
            }}</span>
          </div>
        </router-link>
      </div>
    </div>

    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">✖</button>
        <div class="modal-tabs">
          <button
            :class="{ active: modalType === 'login' }"
            @click="modalType = 'login'"
          >
            Вход
          </button>
          <button
            :class="{ active: modalType === 'register' }"
            @click="modalType = 'register'"
          >
            Регистрация
          </button>
        </div>
        <Login
          v-if="modalType === 'login'"
          @login-success="handleLoginSuccess"
          @switch-to-register="switchToRegister"
        />
        <Registration
          v-if="modalType === 'register'"
          @register-success="handleRegisterSuccess"
          @switch-to-login="switchToLogin"
        />
      </div>
    </div>
  </header>
</template>

<script>
import { useCartStore } from "@/store/cartStore.js";
import { useCatalogStore } from "@/store/store";
import { mapState } from "pinia";
import { Input, Ripple, initMDB } from "mdb-ui-kit";
import "mdb-ui-kit/css/mdb.min.css";
import "mdb-ui-kit/js/mdb.es.min.js";
import Login from "../registration/Login.vue";
import Registration from "../registration/Registration.vue";

export default {
  name: "header",
  components: { Login, Registration },
  data() {
    return {
      userName: null,
      store: useCatalogStore(),
      showModal: false,
      modalType: "login",
    };
  },
  computed: {
    ...mapState(useCartStore, ["favourites", "cart"]),
    ...mapState(useCatalogStore, [
      "filterProducts",
      "loading",
      "error",
      "input",
    ]),
    favouritesCount() {
      return this.favourites.length;
    },
    cartItemCount() {
      return this.cart.reduce((sum, item) => sum + item.quantity, 0);
    },
    isAuthenticated() {
      return localStorage.getItem("isLoggedIn") === "true";
    },
  },
  watch: {
    isAuthenticated(newVal) {
      if (newVal) {
        this.loadUserData();
      } else {
        this.userName = null;
      }
    },
  },
  mounted() {
    initMDB({ Input, Ripple });
    if (this.isAuthenticated) {
      this.loadUserData();
    }
  },
  methods: {
    loadUserData() {
      const userData = JSON.parse(localStorage.getItem("users"));
      if (userData && userData.userPhone) {
        this.userName = userData.userName;
      } else {
        this.userName = null;
      }
    },
    handleProfileClick() {
      if (this.isAuthenticated) {
        this.$router.push({ name: "personal" }); 
      } else {
        this.showModal = true;
        this.modalType = "login"; 
      }
    },
    closeModal() {
      this.showModal = false;
    },
    handleLoginSuccess() {
      this.loadUserData();
      this.closeModal();
    },
    handleRegisterSuccess() {
      this.loadUserData();
      this.closeModal();
    },
    switchToLogin() {
      this.modalType = "login";
    },
    switchToRegister() {
      this.modalType = "register";
    },
  },
};
</script>
<style scoped>
header {
  box-shadow: 2px 2px 4px rgba(16, 16, 15, 0.3);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  height: 780px;
  width: 600px;
  max-width: 90%;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.modal-tabs {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.modal-tabs button {
  padding: 10px 20px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
}

.modal-tabs button.active {
  border-bottom: 2px solid #007bff;
  font-weight: bold;
}


.cart-count {
  padding-top: 3px;
  position: relative;
  top: -5px;
  right: -30px;
  background-color: #06a56c;
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
  background-color: #ffcd1b;
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

.user-name {
  position: relative;
  top: 8px;
  right: 5px;
  font-weight: 500;
  font-size: 17px;
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
  margin-left: -2px;
  width: 30px;
  height: 30px;
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
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0%;
  color: #d9d9d9;
}

.aw {
  font-weight: 500;
  font-size: 15px;
  line-height: 16px;
  letter-spacing: 0%;
  color: #d9d9d9;
  display: block;
  margin-top: 12px;
}

.pw {
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
