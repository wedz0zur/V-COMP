<template>
  <div class="favourites-page">
    <h1>Избранные товары</h1>
    <div class="favourites-list">
      <div v-if="favourites.length === 0" class="no-favourites">
        Нет избранных товаров.
        <img src="./favoritesNoN.jpg" alt="" class="favoritesNoN">
      </div>
      <div v-else class="product-grid">
        <div v-for="product in favourites" :key="product.id" class="product-card">
          <img :src="product.image" alt="product.name" class="product-img" />
          <div class="product-info">
            <h2 class="product-name">{{ product.name }}</h2>
            <p class="product-price">{{ product.price }}₽</p>
            <p style="font-size: 12px;">{{ product.description }}</p>
          </div>
          <button @click="removeFromFavourites(product)" class="remove-btn">
            Удалить из избранного
          </button>
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
.favoritesNoN {
  width: 40%;
  height: 40%;
  object-fit: contain;
  margin-left: 30%;
  pointer-events: none
}

.favourites-page {
  width: 90%;
  max-width: 1200px;
  margin: 20px auto;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  width: 100%;
}

h1 {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
}

.favourites-list {
  width: 100%;
}



.product-card {
  max-width: 350px; 
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.product-img {
  width: 100%;
  max-width: 150px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
  pointer-events: none
}

.product-info {
  width: 100%;
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
}

.product-name {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0 0 10px;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  
}

.product-price {
  font-size: 16px;
  font-weight: bold;
  color: #e93232;
  margin-bottom: 15px;
}

.remove-btn {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.3s ease;
  width: 100%;
  margin-top: auto; 
}

.remove-btn:hover {
  background-color: #cc0000;
}

.no-favourites {
  display: flex;
  font-size: 24px;
  color: #999;
  text-align: center;
  margin-top: 50px;
  min-height: 600px;
  flex-direction: column;
}

</style>