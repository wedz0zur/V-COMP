<template>
  <div v-if="modal" class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <button class="close-btn" @click="$emit('close')">✖</button>
      <h3>{{ product.name }}</h3>
      <img class="tooltip-img" :src="product.image" alt="Товар" />
      <p v-if="product.processor"><strong>Процессор:</strong> {{ product.processor }}</p>
      <p v-if="product.ram"><strong>ОЗУ:</strong> {{ product.ram }}</p>
      <p v-if="product.diagonal"><strong>Диагональ:</strong> {{ product.diagonal }}</p>
      <p v-if="product.resolution"><strong>Разрешение:</strong> {{ product.resolution }}</p>
      <p><strong>Описание:</strong> {{ product.description || 'Описание отсутствует' }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    modal: Boolean
  }
};
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

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 600px;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.3s ease-out;
}


@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
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
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.tooltip-img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}
</style>