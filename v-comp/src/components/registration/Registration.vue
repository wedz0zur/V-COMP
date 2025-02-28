<template>
    <div class="registration-form">
      <h1>Регистрация</h1>
      <input
        type="text"
        v-model="phone"
        placeholder="Ваш номер телефона"
        required
      />
      <p v-if="phoneError" class="error">{{ phoneError }}</p>
      <input type="password" v-model="password" placeholder="Пароль" required />
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
        console.log("Регистрация прошла успешно");
        const newUser = {
          phone: this.phone,
          password: this.password,
        };
        const usersJson = JSON.stringify(newUser);
        localStorage.setItem("users", usersJson);
        this.$router.push('/home');
      }
    }
  };
  </script>

<style>
.registration-form {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
}

.registration-form h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333333;
}

.registration-form input[type="text"],
.registration-form input[type="password"] {
  width: 100%;
  padding: 15px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 10px;
  transition: border-color 0.3s ease;
}

.registration-form input[type="text"]:focus,
.registration-form input[type="password"]:focus {
  border-color: #01579b;
  outline: none;
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

.registration-form button {
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

.registration-form button:hover {
  background-color: #0056b3;
}

.registration-form button:active {
  background-color: #004080;
}

.registration-form .social-login {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.registration-form .social-login button {
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.registration-form .social-login button:hover {
  background-color: #f4f4f9;
}

.registration-form .login-link {
  font-size: 14px;
  color: #666666;
}

.registration-form .login-link a {
  color: #007bff;
  text-decoration: none;
}

.registration-form .login-link a:hover {
  text-decoration: underline;
}

.registration-form .error {
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

.registration-form {
  animation: fadeIn 0.5s ease-out;
}
</style>
