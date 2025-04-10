<template>
    <section class="section-1">
      <div class="section-1-lists">
        <div class="section-1-list">
          <span>Комплектующие ПК</span>
          <img class="section-1-list-img" src="./Main_img/arrow.svg" alt="" />
        </div>
        <div class="section-1-list">
          <span>Мониторы</span>
          <img class="section-1-list-img" src="./Main_img/arrow.svg" alt="" />
        </div>
        <div class="section-1-list">
          <span>Компьютеры</span>
          <img class="section-1-list-img" src="./Main_img/arrow.svg" alt="" />
        </div>
        <div class="section-1-list">
          <span>Ноутбуки</span>
          <img class="section-1-list-img" src="./Main_img/arrow.svg" alt="" />
        </div>
        <div class="section-1-list">
          <span>Игровые консоли</span>
          <img class="section-1-list-img" src="./Main_img/arrow.svg" alt="" />
        </div>
        <div class="section-1-list">
          <span>Комплектующие к ноутбукам</span>
          <img class="section-1-list-img" src="./Main_img/arrow.svg" alt="" />
        </div>
        <div class="section-1-list">
          <span>Планшеты</span>
          <img class="section-1-list-img" src="./Main_img/arrow.svg" alt="" />
        </div>
        <div class="section-1-list">
          <span>Принтеры и МФУ</span>
          <img class="section-1-list-img" src="./Main_img/arrow.svg" alt="" />
        </div>
        <div class="section-1-list">
          <span>Акустические колонки</span>
          <img class="section-1-list-img" src="./Main_img/arrow.svg" alt="" />
        </div>
        <div class="section-1-list">
          <span>Сетевое оборудование</span>
          <img class="section-1-list-img" src="./Main_img/arrow.svg" alt="" />
        </div>
        <div class="section-1-list">
          <span>Мониторы</span>
          <img class="section-1-list-img" src="./Main_img/arrow.svg" alt="" />
        </div>
      </div>
      <div class="section-1-info">
        <div class="section-1-info-img"></div>
        <div class="section-1-infs">
          <div class="section-1-inf section-1-inf1">
            <img class="section-1-inf-img" src="./Main_img/inf-1.svg" alt="" />
            <p class="section-1-inf-p">Бесплатная сборка</p>
          </div>
          <div class="section-1-inf">
            <img class="section-1-inf-img" src="./Main_img/inf-2.svg" alt="" />
            <p class="section-1-inf-p">Рассрочка 4 мес./0% без переплат</p>
          </div>
          <div class="section-1-inf">
            <img class="section-1-inf-img" src="./Main_img/inf-3.svg" alt="" />
            <p class="section-1-inf-p">Бесплатная доставка</p>
          </div>
          <div class="section-1-inf">
            <img class="section-1-inf-img" src="./Main_img/inf-4.svg" alt="" />
            <p class="section-1-inf-p">Официальная гарантия</p>
          </div>
          <div class="section-1-inf">
            <img class="section-1-inf-img" src="./Main_img/inf-5.svg" alt="" />
            <p class="section-1-inf-p">Лучшая цена</p>
          </div>
          <div class="section-1-inf">
            <img class="section-1-inf-img" src="./Main_img/inf-6.svg" alt="" />
            <p class="section-1-inf-p">11 лет на рынке</p>
          </div>
          <div class="section-1-inf">
            <img class="section-1-inf-img" src="./Main_img/inf-7.svg" alt="" />
            <p class="section-1-inf-p">Профессиональная консультация</p>
          </div>
        </div>
      </div>
    </section>
    <h2 style="margin-top: 46px; margin-bottom: 24px; margin-left: 10%;">Топ продаж</h2>
</template>

<script>
export default{
    name: "SectionTop",
}

</script>

<style scoped>

.section-1 {
  width: 370px;
  height: 556px;
  display: flex;
  justify-content: space-between;
  padding-left: 10%; 
  padding-right: 10%;
}

.section-1-list {
  width: 370px;
  height: 48px;
  display: flex;
  align-items: center;
 
  font-weight: 500;
  font-size: 19px;
  line-height: 20px;
  letter-spacing: 0%;
  color: #060f42;
  border-bottom: 1px solid rgba(0, 0, 0, 0.069);
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.section-1-list:hover{
  background-color: #F4F8FB;
  transition: 0.5ms;
}

.section-1-list-img {
  width: 16px;
  height: 22px;
}

.section-1-info-img {
  width: 1145px;
  height: 400px;
  background-image: url(./Main_img/Hero_home_page.svg);
  background-size: cover;
  background-position: center;
  margin-left: 20px;
  pointer-events: none
}

.section-1-infs {
  display: flex;
  justify-content: space-between;
  text-align: center;
}

.section-1-inf-img {
  width: 50px;
  height: 50px;
}

.section-1-inf-p {
 
  font-weight: 700;
  font-size: 14px;
  line-height: 12px;
  letter-spacing: 0%;
  text-align: center;
  color: #060f42;
}

.section-1-inf {
  width: 110px;
  height: 110px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 46px;
}

.section-1-inf1 {
  margin-left: 20px;
}

.section-1-inf-p {
  margin-top: 6px;
}
</style>