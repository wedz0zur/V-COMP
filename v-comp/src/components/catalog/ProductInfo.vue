<template>
  <div v-if="modal" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content" @click.stop>
      <button class="close-btn" @click="closeModal" aria-label="Закрыть">
        <svg
          class="close-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M6 18L18 6M6 6l12 12"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div class="modal-body">
        <div class="modal-image-container">
          <div v-if="!imageLoaded" class="image-placeholder">
            <div class="spinner"></div>
          </div>
          <img
            :src="product.image"
            :alt="product.name"
            class="modal-image"
            @load="imageLoaded = true"
            :style="{ display: imageLoaded ? 'block' : 'none' }"
          />
        </div>

        <div class="modal-info">
          <h2 class="modal-title">{{ product.name }}</h2>

          <div class="modal-rating">
            <span class="rating-value">{{ product.rating }} ★</span>
          </div>
          <div class="modal-price">
            <span class="price-label">Цена:</span>
            <span class="price-value">{{ product.price }} ₽</span>
          </div>

          <div class="modal-specs">
            <h3 class="specs-title">Характеристики</h3>
            <div class="spec-item" v-if="product.processor">
              <span class="spec-label">Процессор:</span>
              <span class="spec-value">{{ product.processor }}</span>
            </div>
            <div class="spec-item" v-if="product.ram">
              <span class="spec-label">ОЗУ:</span>
              <span class="spec-value">{{ product.ram }}</span>
            </div>
            <div class="spec-item" v-if="product.diagonal">
              <span class="spec-label">Диагональ:</span>
              <span class="spec-value">{{ product.diagonal }}</span>
            </div>
            <div class="spec-item" v-if="product.resolution">
              <span class="spec-label">Разрешение:</span>
              <span class="spec-value">{{ product.resolution }}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Описание:</span>
              <span class="spec-value">{{
                product.description || "Описание отсутствует"
              }}</span>
            </div>
          </div>

          <div class="modal-actions">
            <button
              class="action-btn cart-btn"
              :class="{ 'in-cart': isInCart }"
              @click="toggleCart"
            >
              <span v-if="isInCart" class="check-icon">✔</span>
              <svg
                v-else
                class="cart-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ isInCart ? "В корзине" : "Добавить в корзину" }}
            </button>
            <button
              class="action-btn fav-btn"
              :class="{ 'in-fav': isFavourite }"
              @click="toggleFavourite"
            >
              <svg
                class="fav-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  :fill="isFavourite ? 'currentColor' : 'none'"
                />
              </svg>
              {{ isFavourite ? "В избранном" : "В избранное" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "../../store/cartStore.js";
import { mapActions, mapState } from "pinia";

export default {
  props: {
    product: Object,
    modal: Boolean,
  },
  data() {
    return {
      imageLoaded: false,
    };
  },
  computed: {
    ...mapState(useCartStore, ["cart", "favourites"]),
    isInCart() {
      return this.cart.some((item) => item.id === this.product.id);
    },
    isFavourite() {
      return this.favourites.some((item) => item.id === this.product.id);
    },
  },
  methods: {
    ...mapActions(useCartStore, [
      "addToCart",
      "removeFromCart",
      "addToFavourites",
      "removeFromFavourites",
    ]),
    closeModal() {
      this.imageLoaded = false;
      this.$emit("close");
    },
    toggleCart() {
      if (this.isInCart) {
        const item = this.cart.find((item) => item.id === this.product.id);
        this.removeFromCart(item);
      } else {
        this.addToCart(this.product);
      }
    },
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
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeInOverlay 0.3s ease-out;
}

.modal-content {
  background: #fff;
  border-radius: 12px;
  width: 1000px;
  max-width: 95%;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.3s ease-out;
}

@keyframes fadeInOverlay {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #f0f0f0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 8px;
  z-index: 1001;
  transition: transform 0.2s, background-color 0.2s;
}

.close-icon {
  width: 24px;
  height: 24px;
  color: #666;
}

.modal-body {
  display: flex;
  flex-direction: row;
  padding: 20px;
  gap: 20px;
}

.modal-image-container {
  flex: 1;
  position: relative;
  max-width: 400px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #ddd;
  border-top: 4px solid #4a90e2;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.modal-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.modal-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.modal-title {
  font-size: 30px;
  font-weight: 600;
  color: #222;
  margin: 0;
  line-height: 1.3;
}

.modal-rating {
  font-size: 18px;
  color: #f39c12;
}

.rating-value {
  font-weight: 500;
}

.modal-price {
  display: flex;
  align-items: center;
  gap: 10px;
}

.price-label {
  font-size: 20px;
  font-weight: 500;
  color: #555;
}

.price-value {
  font-size: 28px;
  font-weight: 700;
  color: #e63946;
}

.modal-specs {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.specs-title {
  font-size: 22px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.spec-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.spec-label {
  font-size: 16px;
  font-weight: 500;
  color: #555;
}

.spec-value {
  font-size: 16px;
  color: #333;
  text-align: right;
  flex: 1;
}

.modal-actions {
  display: flex;
  gap: 15px;
  margin-top: 15px;
}

.action-btn {
  flex: 1;
  height: 50px;
  padding: 13px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: background-color 0.3s, transform 0.1s, box-shadow 0.3s;
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.cart-btn {
  background-color: #28a745;
  color: white;
}

.cart-btn.in-cart {
  background-color: #1e7e34;
}

.fav-btn {
  background-color: #f0f0f0;
  color: #666;
}

.fav-btn.in-fav {
  background-color: #ffcd1b;
  color: white;
}

.cart-icon,
.fav-icon {
  width: 20px;
  height: 20px;
}

.check-icon {
  font-size: 18px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .modal-content {
    width: 90%;
    max-height: 75vh;
  }

  .modal-body {
    flex-direction: column;
    padding: 15px;
    gap: 15px;
  }

  .modal-image-container {
    max-width: 100%;
    height: 200px;
  }

  .modal-image {
    max-height: 200px;
  }

  .image-placeholder {
    height: 200px;
  }

  .modal-title {
    font-size: 26px;
  }

  .modal-rating {
    font-size: 16px;
  }

  .price-label {
    font-size: 18px;
  }

  .price-value {
    font-size: 24px;
  }

  .specs-title {
    font-size: 20px;
  }

  .spec-label,
  .spec-value {
    font-size: 14px;
  }

  .action-btn {
    font-size: 14px;
    padding: 12px;
  }

  .modal-actions {
    flex-direction: column;
    gap: 10px;
  }

  .action-btn {
    width: 100%;
  }
}
</style>
