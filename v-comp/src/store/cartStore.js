import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    favourites: JSON.parse(localStorage.getItem('favourites')) || [], 
  }),
  actions: {
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    saveFavourites() {
      localStorage.setItem('favourites', JSON.stringify(this.favourites));
    },

    addToCart(product) {
      const item = this.cart.find(item => item.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
      this.saveCart();
    },

    addToFavourites(product) {
      if (!this.favourites.some(item => item.id === product.id)) {
        this.favourites.push(product);
        this.saveFavourites();
      }
    },

    removeFromCart(product) {
      const item = this.cart.find(item => item.id === product.id);
      if (item) {
        item.quantity--;
        if (item.quantity <= 0) {
          this.cart = this.cart.filter(item => item.id !== product.id);
        }
      }
      this.saveCart();
    },

    removeAllFromCart(product) {
      this.cart = this.cart.filter(item => item.id !== product.id);
      this.saveCart();
    },

    removeFromFavourites(product) {
      this.favourites = this.favourites.filter(item => item.id !== product.id);
      this.saveFavourites();
    },

    clearCart() {
      this.cart = [];
      this.saveCart();
    }
  },
});
