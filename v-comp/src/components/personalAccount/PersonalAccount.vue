<template>
    <section>
      <div class="left">
        <p class="left-p">История заказов</p>
        <hr style="margin-top: -18px;">
        <p style="margin-top: -18px;" class="left-p">Избранное</p>
        <hr style="margin-top: -18px;">
        <p style="margin-top: -18px;" class="left-p">Просмотренные товары</p>
        <hr style="margin-top: -18px;">
        <p style="margin-top: -18px;" class="left-p">Мои отзывы</p>
        <hr style="margin-top: -18px;">
        <p style="margin-top: -18px;" class="left-p">Личные данные</p>
        <hr style="margin-top: -18px;">
      </div>
      <div class="right">
        <h1>Личные данные</h1>
        <div class="user-info">
          <div style="display: flex; justify-content: space-between;">
            <p class="user-info-1">Имя Фамилия</p>
            <p v-if="userName || userLastName" class="user-info-2">{{ userName }} {{ ' ' }} {{ userLastName }}</p>
            <p v-else class="user-info-2">Не указано</p>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <p class="user-info-1">Телефон</p>
            <p v-if="userPhone" class="user-info-2">{{ userPhone }}</p>
            <p v-else class="user-info-2">Не указано</p>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <p class="user-info-1">Email</p>
            <p v-if="userEmail" class="user-info-2">{{ userEmail }}</p>
            <p v-else class="user-info-2">Не указано</p>
          </div>
          
          <button class="logout-btn" @click="showLogoutModal = true">Выйти из аккаунта</button>
        </div>
      </div>
  
      
      <div v-if="showLogoutModal" class="modal-overlay" @click="showLogoutModal = false">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="showLogoutModal = false">✖</button>
          <h2>Вы точно хотите выйти?</h2>
          <div class="modal-actions">
            <button class="confirm-btn" @click="logout">Да, выйти</button>
            <button class="cancel-btn" @click="showLogoutModal = false">Отмена</button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userPhone: null,
        userName: null,
        userLastName: null,
        userEmail: null,
        showLogoutModal: false,
      };
    },
    mounted() {
      this.loadUserData();
    },
    methods: {
      loadUserData() {
        const userData = JSON.parse(localStorage.getItem("users"));
        if (userData && userData.userPhone) {
          this.userPhone = userData.userPhone;
          this.userName = userData.userName;
          this.userLastName = userData.userLastName;
          this.userEmail = userData.userEmail;
        }
      },
      logout() {
        localStorage.setItem('isLoggedIn', 'false'); 
        this.showLogoutModal = false;
        this.$router.push({ name: "home" });
      },
    },
  };
  </script>

<style scoped>
section {
  width: 50%;
  height: 571px;
  margin-left: 10%;
  margin-bottom: 24px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}

.left {
  width: 371px;
  height: 285px;
}

.right {
  width: 530px;
  height: 571px;
  gap: 24px;
}

.left-p {
  width: 371px;
  height: 56px;
  padding: 12px;
  padding-top: 18px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0%;
  color: #060F42;
  cursor: pointer;
}

.left-p:hover {
  background-color: #F4F8FB;
}

.user-info {
  width: 500px;
  height: 176px;
}

.user-info-2 {
  font-size: 16px;
  color: #333;
}

.logout-btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff4444;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.logout-btn:hover {
  background-color: #cc0000;
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
  width: 400px;
  max-width: 90%;
  position: relative;
  text-align: center;
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

.modal-content h2 {
  font-size: 20px;
  margin-bottom: 20px;
}

.modal-actions {
  display: flex;
  justify-content: space-around;
}

.confirm-btn {
  padding: 10px 20px;
  background-color: #ff4444;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.confirm-btn:hover {
  background-color: #cc0000;
}

.cancel-btn {
  padding: 10px 20px;
  background-color: #ccc;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.cancel-btn:hover {
  background-color: #bbb;
}
</style>
