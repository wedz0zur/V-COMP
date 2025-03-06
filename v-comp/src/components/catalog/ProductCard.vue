<template>
  <div class="product-card">
    <div style="height: 320px">
      <div
        class="heart"
        @click="toggleFavourite"
        :class="isFavourite ? 'active' : 'noActive'"
      ></div>
      <img class="product-img" :src="product.image" alt="" />
      <h2 class="product-name">{{ product.name }}</h2>
    </div>

    <div>
      <div
      style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          "
      >
      <h2 class="product-rating">{{ product.rating }} ⭐</h2>
      <div class="info-container">
        <button class="info-btn" @click=openModal>Информация о товаре</button>
        <ProductInfo v-if="modal" :product="product" :modal="modal" @close="modal=false" />
        </div>
      </div>
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <p class="product-price">{{ product.price }}₽</p>

        <div style="display: flex" v-if="isInCart">
          <button class="counter-btn" @click="removeFromCart(product)">
            -
          </button>
          <span class="counter">{{ quantity }}</span>
          <button class="counter-btn" @click="addToCart(product)">+</button>
        </div>

        <button v-else class="product-btn" @click="addToCart(product)">
          Купить
        </button>
      </div>
    </div>
  </div>

</template>

<script>
import { useCartStore } from "../../store/cartStore.js";
import { mapActions, mapState } from "pinia";
import ProductInfo from "./ProductInfo.vue";

export default {
  data(){
    return{
      modal: false,
      modalClass: 'tooltip',
    }
  },
  components: {
    ProductInfo,
  },
  props: {
    product: Object,
  },
  computed: {
    ...mapState(useCartStore, ["cart", "favourites"]),
    isInCart() {
      return this.cart.some((item) => item.id === this.product.id);
    },
    quantity() {
      const item = this.cart.find((item) => item.id === this.product.id);
      return item ? item.quantity : 0;
    },
    isFavourite() {
      return this.favourites.some((item) => item.id === this.product.id);
    },
  },
  methods: {
    openModal(){
      this.modal = true
    },
    ...mapActions(useCartStore, [
      "addToCart",
      "removeFromCart",
      "addToFavourites",
      "removeFromFavourites",
    ]),
    toggleFavourite() {
      if (this.isFavourite) {
        this.removeFromFavourites(this.product);
      } else {
        this.addToFavourites(this.product);
      }
    },
  },
};
</script>


<style scoped>
.info-container {
  position: relative;
  display: inline-block;
}

.info-btn {
  font-family: Lato;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0%;

  background-color: #55a0f0;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
}

.info-btn:hover {
  background-color: #0056b3;
}

.tooltip {
  visibility: visible;
  opacity: 1;
}
.product-card {
  position: relative;
  width: 242px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 7px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: box-shadow 0.3s ease;
}

.product-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.product-img {
  width: 218px;
  height: 214px;
  object-fit: contain;
}

.product-name {
  font-family: Lato;
  font-weight: 500;
  font-size: 17px;
  line-height: 16px;
  letter-spacing: 0%;
  color: #333333;
  margin-top: 12px;
}

.product-price {
  font-family: Lato;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0%;
  color: #e93232;
  margin-top: 5px;
}

.product-btn {
  width: 73px;
  height: 32px;
  gap: 8px;
  border-radius: 4px;
  padding-top: 4px;
  padding-right: 12px;
  padding-bottom: 4px;
  padding-left: 12px;
  background-color: #06a56c;
  font-family: Lato;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0%;
  color: #f4f8fb;
  border: 0;
}

.heart {
  width: 20px;
  height: 17px;
  cursor: pointer;
  background-position: center;
  background-size: cover;
  position: relative;
  left: 200px;
  bottom: 5px;
}

.noActive {
  background-image: url(./catalog-img/heart-grey.png);
}

.active {
  background-image: url(./catalog-img/heart-blue.png);
}

.product-rating {
  font-family: Lato;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
}

.counter-btn {
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  background-color: #06a56c;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.counter-btn:hover {
  background-color: #048d5c;
}

.counter-btn:active {
  transform: scale(0.9);
}

.counter {
  font-size: 18px;
  font-weight: bold;
  margin: 0 10px;
  min-width: 24px;
  text-align: center;
}

.btns {
  display: flex;
}
</style>
