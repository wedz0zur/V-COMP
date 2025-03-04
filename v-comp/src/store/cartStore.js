import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(product) {
      const item = this.cart.find(item => item.id === product.id);
      if (item) {
        item.quantity++;  // Увеличиваем количество
      } else {
        this.cart.push({ ...product, quantity: 1 });  // Добавляем товар с количеством 1
      }
    },

    removeFromCart(product) {
      const item = this.cart.find(item => item.id === product.id);
      if (item) {
        // Уменьшаем количество только если оно больше 1
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          this.cart = this.cart.filter(item => item.id !== product.id);  // Удаляем товар из корзины
        }
      }
    },
  },
});
