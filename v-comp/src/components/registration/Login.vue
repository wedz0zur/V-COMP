<template>
  <div class="login-container">
    <div class="login-form">
      <h1>Вход</h1>
      <div class="input-group">
        <input
          type="text"
          v-model="phone"
          placeholder="Ваш номер телефона"
          required
        />
      </div>
      <p v-if="phoneError" class="error">{{ phoneError }}</p>
      <div class="input-group">
        <input type="password" v-model="password" placeholder="Пароль" required />
      </div>
      <p v-if="passwordError" class="error">{{ passwordError }}</p>
      <button type="submit" @click="validateForm">ВОЙТИ</button>
      <p class="register-link">
        Нет аккаунта?
        <a href="#" @click.prevent="$emit('switch-to-register')">Зарегистрироваться</a>
      </p>
    </div>
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
        if (user.userPhone === this.phone && user.userPassword === this.password) {
          localStorage.setItem('isLoggedIn', 'true'); 
          this.$emit('login-success');
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

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 672px;
  background-color: #f5f5f5;
  padding: 20px;
}

.login-form {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
}

.login-form h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333333;
}

.input-group {
  margin-bottom: 15px;
}

.input-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.input-group input:focus {
  border-color: #007bff;
  outline: none;
}

.login-form button {
  background-color: #01579b;
  color: #ffffff;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  margin-bottom: 20px;
}

.login-form button:hover {
  background-color: #01579b;
}

.login-form .register-link {
  font-size: 14px;
  color: #666666;
}

.login-form .register-link a {
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.login-form .register-link a:hover {
  color: #0056b3;
  text-decoration: underline;
}

.login-form .error {
  color: #ff4444;
  font-size: 14px;
  margin-bottom: 10px;
}


@media (max-width: 480px) {
  .login-form {
    padding: 20px;
  }

  .login-form h1 {
    font-size: 22px;
  }

  .input-group input {
    padding: 10px;
    font-size: 14px;
  }

  .login-form button {
    padding: 10px 15px;
    font-size: 14px;
  }
}
</style>