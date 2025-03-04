<template>
  <div class="basket">
    <h2 class="basket-title">Корзина</h2>

    <div v-if="cart.length > 0">
      <div v-for="item in cart" :key="item.id" class="basket-item">
        <img :src="item.image" alt="Товар" class="basket-item-img" />

        <div class="basket-item-info">
          <h3>{{ item.name }}</h3>
          <p class="price">{{ item.price }}₽</p>
        </div>

        <div class="counter-container">
          <button class="counter-btn" @click="removeFromCart(item)">-</button>
          <span class="counter">{{ item.quantity }}</span>
          <button class="counter-btn" @click="addToCart(item)">+</button>
        </div>

        <button class="delete-btn" @click="removeAllFromCart(item)">✖</button>
      </div>

      <div class="basket-footer">
        <h3>Итого: {{ totalPrice }}₽</h3>
        <button class="checkout-btn" @click="checkout">Оформить заказ</button>
      </div>
    </div>

    <div v-else class="empty-basket">
      <p>Корзина пуста 😔</p>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/store/cartStore.js';
import { mapActions, mapState } from 'pinia';

export default {
  computed: {
    ...mapState(useCartStore, ['cart']),
    totalPrice() {
      return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
  },
  methods: {
  ...mapActions(useCartStore, ['addToCart', 'removeFromCart', 'removeAllFromCart', 'clearCart']),
  checkout() {
    alert('Заказ оформлен! 🎉');
    this.clearCart(); 
  }
}

};
</script>

<style scoped>
.basket {
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.basket-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.basket-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}

.basket-item-img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.basket-item-info h3 {
  font-size: 16px;
  margin: 0;
}

.price {
  color: #E93232;
  font-weight: bold;
}

.counter-container {
  display: flex;
  align-items: center;
}

.counter-btn {
  width: 30px;
  height: 30px;
  background-color: #06A56C;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.counter {
  padding: 0 10px;
  font-size: 16px;
  font-weight: bold;
}

.delete-btn {
  background: none;
  border: none;
  color: red;
  font-size: 20px;
  cursor: pointer;
}

.basket-footer {
  text-align: center;
  margin-top: 20px;
}

.checkout-btn {
  background-color: #06A56C;
  color: white;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.empty-basket {
  text-align: center;
  font-size: 18px;
  color: #777;
}
</style>
