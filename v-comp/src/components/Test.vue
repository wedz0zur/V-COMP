<template>
  <!-- <button @click="menu = !menu" class="burger-button">🍔</button> -->
  <div style="padding: 30px">
    <transition name="slide">
      <section v-if="menu" class="burger-menu">
        <div class="logo">
          <router-link :to="{ name: 'home' }"
            ><img
              class="footer_img"
              src="./footer/footer_img/footer-img.svg"
              alt=""
          /></router-link>
          <button @click="menu = false" class="close-button">✖</button>
        </div>
        <div class="menu-header">
          <router-link to="/login">Войти</router-link>
          <span style="margin-top: 15px">|</span>
          <router-link to="/registration">Регистрация</router-link>
        </div>

        <div class="menu-content">
          <h3 style="display: flex; justify-content: space-between; margin-bottom: 16px;">
            Информация
            <span @click="toggleSubmenu('list1')" class="arrow">{{
              list1 ? "🡩" : "🡫"
            }}</span>
          </h3>
          <div v-if="list1" class="submenu">
            <a class="a" href="#">Акции</a>
            <a class="a" href="#">Кредит</a>
            <a class="a" href="#">Оплата и доставка</a>
            <a class="a" href="#">Гарантия</a>
            <a class="a" href="#">Частые вопросы</a>
            <a class="a" href="#">Новости</a>
            <a class="a" href="#">Блог</a>
            <a class="a" href="#">О нас</a>
            <a class="a" href="#">Политика конфиденциальности</a>
            <a class="a" href="#">Контакты</a>
          </div>

          <h3 style="display: flex; justify-content: space-between; margin-bottom: 16px;">
            Наши сервисы
            <span @click="toggleSubmenu('list2')" class="arrow">{{
              list2 ? "🡩" : "🡫"
            }}</span>
          </h3>
          <div v-if="list2" class="submenu">
            <a class="a" href="#">Сервисный центр v-comp</a>
            <a class="a" href="#">Магазин Б/У товара</a>
            <a class="a" href="#">Скупка Б/У</a>
            <a class="a" href="#">Ремонт ПК и оргтехники</a>
            <a class="a" href="#">Компьютерная помощь</a>
            <a class="a" href="#">Сотрудничество</a>
            <a class="a" href="#">Главная</a>
          </div>

          <h3 style="margin-bottom: 16px;">Контакты</h3>
          <p class="p">(067) 11-12-485 - Отдел продаж</p>
          <p class="p">(066) 484-39-22 - Отдел продаж</p>
          <p class="p">Днепр, Европейская, 8 (бывшая Миронова 8)</p>
          <p class="p">Понедельник-Пятница 9:00-19:00</p>
          <p class="p">Суббота-Воскресенье: с 9:00-16:00</p>
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
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      list1: false,
      list2: false,
    };
  },
  methods: {
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
@import url("https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&family=Heebo:wght@100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Varela+Round&display=swap");

h3 {
  font-family: Lato;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0%;
  color: #d9d9d9;
}

.a {
  font-family: Lato;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0%;
  color: #d9d9d9;
  display: block;
  margin-top: 12px;
}

.p {
  font-family: Lato;
  font-weight: 500;
  font-size: 14px;
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
  font-family: Lato;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0%;
  color: #d9d9d9;
}

.close-button {
  position: absolute;
  top: 60px;
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
  background-image: url(./footer/footer_img/Instagram.svg);
  background-position: center;
  background-size: cover;
  cursor: pointer;
}

.icon2 {
  width: 31px;
  height: 32px;
  border-radius: 50%;
  background-image: url(./footer/footer_img/facebook.svg);
  background-position: center;
  background-size: cover;
  cursor: pointer;
}

.icon3 {
  width: 31px;
  height: 32px;
  border-radius: 50%;
  background-image: url(./footer/footer_img/telegram.svg);
  background-position: center;
  background-size: cover;
  cursor: pointer;
}

.icon4 {
  width: 31px;
  height: 32px;
  border-radius: 50%;
  background-image: url(./footer/footer_img/viber.svg);
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
