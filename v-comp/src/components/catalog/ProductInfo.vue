<template>
    <div class="product-tooltip">
      <h3>{{ product.name }}</h3>
      <img class="tooltip-img" :src="product.image" alt="Товар" />
      <p><strong>Процессор:</strong> {{ product.processor }}</p>
      <p><strong>ОЗУ:</strong> {{ product.ram }}</p>
      <p><strong>Диагональ:</strong> {{ product.diagonal }}</p>
      <p><strong>Разрешение:</strong> {{ product.resolution }}</p>
      <p><strong>Описание:</strong> {{ product.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: Object
    }
  };
  </script>
  
  <style scoped>
  .product-tooltip {
    position: absolute;
    bottom: 120%;
    left: 50%;
    transform: translateX(-50%);
    width: 220px;
    background: white;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 100;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s ease, visibility 0.2s ease;
  }
  
  .tooltip-img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  
  </style>
  