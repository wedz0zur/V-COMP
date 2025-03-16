<template>
  <section>
    <div class="not-found">
      <p class="not-found_p1">404</p>
      <p class="not-found_p2">
        К сожалению, запрашиваемая вами страница не найдена.
      </p>
      <p class="not-found_p3">
        Неправильно набран адрес или такой страницы на сайте больше не
        существует.
      </p>
      <button><RouterLink to="home">ПЕРЕЙТИ НА ГЛАВНУЮ</RouterLink></button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  width: 100%;
  height: 462px;
  padding-top: 32px;
  padding-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.not-found {
  width: 484px;
  height: 276px;
}

.not-found_p1 {
  font-family: Lato;
  font-weight: 700;
  font-size: 140px;
  line-height: 140px;
  letter-spacing: 0%;
  text-align: center;
  width: 244px;
  height: 114px;
  color: #01579b;
  margin-left: 120px;
}

.not-found_p2 {
  width: 484px;
  height: 24px;
  font-family: Lato;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0%;
  margin-top: 24px;
  color: #333333;
}

.not-found_p3 {
  font-family: Lato;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  width: 401px;
  height: 40px;
  color: #333333;
  margin-top: 16px;
  margin-left: 41px;
}

button {
  width: 173px;
  height: 42px;
  gap: 8px;
  border-radius: 4px;
  background-color: #01579b;
  border: 0;
  margin-top: 16px;
  margin-left: 155px;
}

button a {
  font-family: Lato;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0%;
  color: #f4f8fb;
}
</style>
