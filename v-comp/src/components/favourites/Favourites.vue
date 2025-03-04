<template>
    <div class="favourites-page">
      <h1>Избранные товары</h1>
      <div class="favourites-list">
        <div v-if="favourites.length === 0" class="no-favourites">
          Нет избранных товаров.
        </div>
        <div v-else>
          <div v-for="product in favourites" :key="product.id" class="product-card">
            <img :src="product.image" alt="product.name" class="product-img" />
            <h2 class="product-name">{{ product.name }}</h2>
            <p class="product-price">{{ product.price }}₽</p>
            <button @click="removeFromFavourites(product)" class="remove-btn">Удалить из избранного</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '../../store/cartStore.js';
  import { mapState, mapActions } from 'pinia';
  
  export default {
    computed: {
      ...mapState(useCartStore, ['favourites']),
    },
    methods: {
      ...mapActions(useCartStore, ['removeFromFavourites']),
    },
  };
  </script>
  
  <style scoped>
  .favourites-page {
    padding: 20px;
  }
  
  .favourites-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  
  .product-card {
    background-color: #f8f8f8;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .product-name {
    font-size: 18px;
    margin: 10px 0;
  }
  
  .product-price {
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  .remove-btn {
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  .remove-btn:hover {
    background-color: darkred;
  }
  
  .no-favourites {
    font-size: 20px;
    color: #999;
  }
  </style>
  