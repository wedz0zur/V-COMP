<template>
  <section class="game-zone">
    <div class="gameZone-h">
      <div class="gameZone-line-1"></div>
      <p class="gameZone-p1">GAME ZONE</p>
      <div class="gameZone-line-2"></div>
    </div>
    <div class="top-sales">
      <div class="sale" v-for="item in sales" :key="item.name">
        <img class="sale-img" :src="item.image" alt="" />
        <p class="sale-info">{{ item.name }}</p>
        <p class="sale-reviews">Отзывов: {{ item.reviews }}</p>
        <div style="display: flex; align-items: center">
          <p class="sale-price">
            {{ item.price }}<span class="sale-price-mini">₽</span>
          </p>
          <router-link :to="{ name: 'catalog' }"><button class="sale-buy">Перейти в каталог</button></router-link> 
        </div>
      </div>
      <a href="#" class="main-products">Смотреть все товары ></a>
    </div>
    <h2 style="font-family: Lato; color: #fff">Категории для геймеров</h2>
    <div class="categories">
      <div class="categ-container">
        <div class="categ-circle"></div>
        <p class="categ-p">Клавиатуры</p>
      </div>
      <div class="categ-container">
        <div class="categ-circle categ-circle-2"></div>
        <p class="categ-p">Мыши</p>
      </div>
      <div class="categ-container">
        <div class="categ-circle categ-circle-3"></div>
        <p class="categ-p">Аксессуары</p>
      </div>
      <div class="categ-container">
        <div class="categ-circle categ-circle-4"></div>
        <p class="categ-p">Игровые ноутбуки</p>
      </div>
      <div class="categ-container">
        <div class="categ-circle categ-circle-6"></div>
        <p class="categ-p">Мониторы</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GameZone",
  data() {
    return {
      sales: [
        {
          name: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
          image: "src/components/Main/Main_img/sale-3.svg",
          reviews: 0,
          price: 7800,
        },
        {
          name: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
          image: "src/components/Main/Main_img/sale-7.svg",
          reviews: 4,
          price: 7400,
        },
        {
          name: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
          image: "src/components/Main/Main_img/sale-5.svg",
          reviews: 6,
          price: 7000,
        },
        {
          name: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
          image: "src/components/Main/Main_img/sale-6.svg",
          reviews: 2,
          price: 6200,
        },
        {
          name: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
          image: "src/components/Main/Main_img/sale-2.svg",
          reviews: 1,
          price: 5600,
        },
        {
          name: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
          image: "src/components/Main/Main_img/sale-1.svg",
          reviews: 7,
          price: 13500,
        },
        {
          name: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
          image: "src/components/Main/Main_img/sale-4.svg",
          reviews: 5,
          price: 3400,
        },
      ],
    };
  },
};
</script>

<style scoped>
.game-zone {
  height: 923px;
  gap: 10px;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #22275E;
  margin-top: 20px;
  padding-left: 10%;
  padding-right: 10%;
}

.gameZone-h {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.gameZone-line-1 {
  width: 112px;
  height: 2px;
  background-color: #fff;
}

.gameZone-p1 {
  font-family: Lato;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0%;
  text-align: center;
  color: #fff;
}
.gameZone-line-2 {
  width: 70%;
  height: 2px;
  background-color: #fff;
}
.sale {
  width: 210px;
  height: 360px;
  border-radius: 4px;
  margin-top: 10px;
  background-color: #fff;
}

.sale-img {
  width: 200px;
  height: 200px;
  margin-left: 4px;
  margin-top: 12px;
  pointer-events: none
}

.sale-info {
  font-family: Lato;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0%;
  margin-left: 12px;
  margin-top: 12px;
}

.sale-reviews {
  font-family: Roboto;
  font-weight: 400;
  font-size: 11px;
  line-height: 12.89px;
  color: #999999;
  margin-left: 12px;
}

.sale-price {
  font-family: Lato;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: center;
  color: #060f42;
  margin-left: 22px;
  margin-top: 10px;
}
.sale-price-mini {
  font-size: 15px;
}

.sale-buy {
  width: 103px;
  height: 32px;
  gap: 8px;
  padding-top: 4px;
  padding-right: 12px;
  padding-bottom: 4px;
  padding-left: 12px;
  border-radius: 4px;
  background-color: #06a56c;
  font-family: Lato;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0%;
  color: #f4f8fb;
  border: 0;
  margin-left: 22px;
}
.main-products {
  text-decoration: none;
  color: #ffffff;
  font-family: Lato;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 2%;
  margin-left: 89%;
  margin-top: 10px;
}
.top-sales {
  height: 390px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30px;
}

.categ-p {
  font-family: Lato;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: center;
  color: #fff;
  margin-top: 10px;
}

.categ-circle {
  width: 240px;
  height: 199px;
  cursor: pointer;
  background-image: url(./Main_img/categ-1.svg);
  background-position: center;
  background-size: cover;
}

.categ-circle:hover {
  width: 260px;
  height: 220px;
  transition: 1s;
  margin-left: -10px;
}
.categ-container {
  width: 240px;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.categories {
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
}
.categ-circle-2{
    background-image: url(./Main_img/categ-2.svg);
}
.categ-circle-3{
    background-image: url(./Main_img/categ-3.svg);
}
.categ-circle-4{
    background-image: url(./Main_img/categ-4.svg);
}

.categ-circle-6{
    background-position: center;
    background-size: cover;
    background-image: url(./Main_img/categ-6.svg);
}
</style>
