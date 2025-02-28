<template>
    <div class="login-form">
      <h1>Вход</h1>
      <input
        type="text"
        v-model="phone"
        placeholder="Ваш номер телефона"
        required
      />
      <p v-if="phoneError" class="error">{{ phoneError }}</p>
      <input type="password" v-model="password" placeholder="Пароль" required />
      <p v-if="passwordError" class="error">{{ passwordError }}</p>
      <button type="submit" @click="validateForm">ВОЙТИ</button>
      <p class="register-link">
        Нет аккаунта?
        <router-link to="/registration">Зарегистрироваться</router-link>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        phone: "",
        password: "",
        phoneError: "",
        passwordError: "",
      };
    },
    methods: {
      validateForm() {
        this.phoneError = "";
        this.passwordError = "";
  
        if (!this.phone) {
          this.phoneError = "Номер телефона обязателен.";
        }
  
        if (!this.password) {
          this.passwordError = "Пароль обязателен.";
        }
  
        if (!this.phoneError && !this.passwordError) {
          this.loginUser();
        }
      },
  
      loginUser() {
        const storedUser = localStorage.getItem("users");
  
        if (storedUser) {
          const user = JSON.parse(storedUser);
          if (user.phone === this.phone && user.password === this.password) {
            alert("Вход выполнен успешно!");
            this.$router.push("/home"); 
          } else {
            this.passwordError = "Неверный номер телефона или пароль.";
          }
        } else {
          this.phoneError = "Пользователь с таким номером телефона не найден.";
        }
      },
    },
  };
  </script>

<style>
.login-form {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
}

.login-form h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333333;
}

.login-form input[type="text"],
.login-form input[type="password"] {
  width: 100%;
  padding: 15px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 10px;
  transition: border-color 0.3s ease;
}

.login-form input[type="text"]:focus,
.login-form input[type="password"]:focus {
  border-color: #01579b;
  outline: none;
}

.login-form .forgot-password {
  font-size: 14px;
  color: #666666;
  margin-bottom: 20px;
}

.login-form button {
  background-color: #01579b;
  color: #ffffff;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  margin-bottom: 20px;
}

.login-form button:hover {
  background-color: #0056b3;
}

.login-form button:active {
  background-color: #004080;
}

.login-form .social-login {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.login-form .social-login button {
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-form .social-login button:hover {
  background-color: #f4f4f9;
}

.login-form .register-link {
  font-size: 14px;
  color: #666666;
}

.login-form .register-link a {
  color: #007bff;
  text-decoration: none;
}

.login-form .register-link a:hover {
  text-decoration: underline;
}

.login-form .error {
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.login-form {
  animation: fadeIn 0.5s ease-out;
}
</style>
