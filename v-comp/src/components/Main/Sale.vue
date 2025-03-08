<template>
  <section>
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
  </section>
</template>

<script>
export default {
  name: "Sale",
  data() {
    return {
      sales: [
        {
          name: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
          image: "src/components/Main/Main_img/sale-1.svg",
          reviews: 0,
          price: 7800,
        },
        {
          name: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
          image: "src/components/Main/Main_img/sale-2.svg",
          reviews: 4,
          price: 7400,
        },
        {
          name: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
          image: "src/components/Main/Main_img/sale-3.svg",
          reviews: 6,
          price: 7000,
        },
        {
          name: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
          image: "src/components/Main/Main_img/sale-4.svg",
          reviews: 2,
          price: 6200,
        },
        {
          name: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
          image: "src/components/Main/Main_img/sale-5.svg",
          reviews: 1,
          price: 5600,
        },
        {
          name: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
          image: "src/components/Main/Main_img/sale-6.svg",
          reviews: 7,
          price: 13500,
        },
        {
          name: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
          image: "src/components/Main/Main_img/sale-7.svg",
          reviews: 5,
          price: 3400,
        },
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
section{
  padding-left: 10%; 
  padding-right: 10%;
}

.top-sales {
  height: 780px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.sale {
  width: 210px;
  height: 360px;
  border-radius: 4px;
  margin-top: 10px;
  box-shadow: 1px 0px 20px 4px rgba(0, 0, 0, 0.1);
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
  color: #01579b;
  font-family: Lato;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 2%;
  margin-left: 89%;
  margin-top: 10px;
}
</style>
