<template>
  <div class="registration-container">
    <div class="registration-form">
      <h1>Регистрация</h1>
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
        <input
          type="password"
          v-model="password"
          placeholder="Пароль"
          required
        />
      </div>
      <p v-if="passwordError" class="error">{{ passwordError }}</p>
      <p class="agreement">
        Регистрируясь, вы соглашаетесь с
        <a href="#">пользовательским соглашением</a>
      </p>
      <button type="submit" @click="validateForm">ЗАРЕГИСТРИРОВАТЬСЯ</button>
      <p class="login-link">
        Уже есть аккаунт? <router-link to="/login">Войти</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: '',
      password: '',
      phoneError: '',
      passwordError: ''
    };
  },
  methods: {
    validateForm() {
      this.phoneError = '';
      this.passwordError = '';

      if (!this.phone) {
        this.phoneError = 'Номер телефона обязателен.';
      }

      if (!this.password) {
        this.passwordError = 'Пароль обязателен.';
      } else if (this.password.length < 6) {
        this.passwordError = 'Пароль должен быть не менее 6 символов.';
      }

      if (!this.phoneError && !this.passwordError) {
        this.registerUser();
      }
    },
    registerUser() {
      console.log('Регистрация прошла успешно');
      const newUser = {
        phone: this.phone,
        password: this.password
      };
      const usersJson = JSON.stringify(newUser);
      localStorage.setItem('users', usersJson);
      this.$router.push('/home');
    }
  }
};
</script>

<style scoped>
.registration-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
}

.registration-form {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
}

.registration-form h1 {
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

.registration-form button {
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

.registration-form button:hover {
  background-color: #01579b;
}

.registration-form .agreement {
  font-size: 14px;
  color: #666666;
  margin-bottom: 20px;
}

.registration-form .agreement a {
  color: #01579b;
  text-decoration: none;
}

.registration-form .agreement a:hover {
  text-decoration: underline;
}

.registration-form .login-link {
  font-size: 14px;
  color: #666666;
}

.registration-form .login-link a {
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.registration-form .login-link a:hover {
  color: #0056b3;
  text-decoration: underline;
}

.registration-form .error {
  color: #ff4444;
  font-size: 14px;
  margin-bottom: 10px;
}

@media (max-width: 480px) {
  .registration-form {
    padding: 20px;
  }

  .registration-form h1 {
    font-size: 22px;
  }

  .input-group input {
    padding: 10px;
    font-size: 14px;
  }

  .registration-form button {
    padding: 10px 15px;
    font-size: 14px;
  }
}
</style>
