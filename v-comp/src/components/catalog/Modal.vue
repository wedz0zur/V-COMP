<template>
    <div class="modal-overlay" @click="close">
      <div class="modal" @click.stop>
        <button class="close-btn" @click="close">✖</button>
        <h2>{{ product.name }}</h2>
        <img :src="product.image" alt="Product image" class="product-image" />
        <p>Цена: {{ product.price }} ₽</p>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: Object
    },
    methods: {
      close() {
        this.$emit('close'); 
      }
    }
  }
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    width: 400px;
    position: relative;
  }
  
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }
  
  .product-image {
    max-width: 100%;
    height: auto;
    margin-top: 10px;
  }
  </style>
  