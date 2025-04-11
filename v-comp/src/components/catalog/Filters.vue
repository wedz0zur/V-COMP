<template>
  <div class="filters">
    <h3>Фильтры</h3>

    <div class="filter-group">
      <label>Минимальная цена:</label>
      <input
        type="number"
        :value="filters.minPrice"
        @input="updateMinPrice($event.target.value)"
        placeholder="От 50"
        min="50"
      />
    </div>
    <div class="filter-group">
      <label>Максимальная цена:</label>
      <input
        type="number"
        :value="filters.maxPrice"
        @input="updateMaxPrice($event.target.value)"
        placeholder="До 180000"
        max="180000"
      />
    </div>

    <div class="filter-group">
      <label>Тип устройства:</label>
      <select v-model="filters.deviceType" @change="updateFilters">
        <option value="all">Все</option>
        <option value="laptop">Ноутбуки</option>
        <option value="desktop">ПК</option>
      </select>
    </div>

    <div class="filter-group">
      <label>Оперативная память (RAM):</label>
      <select v-model="filters.ram" @change="updateFilters">
        <option value="all">Все</option>
        <option value="8GB">8GB</option>
        <option value="16GB">16GB</option>
        <option value="32GB">32GB</option>
      </select>
    </div>
    <button class="reset-btn" @click="resetFilters">Сбросить фильтры</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useCatalogStore } from "../../store/store";

export default {
  computed: {
    ...mapState(useCatalogStore, ["filters"]),
  },
  methods: {
    ...mapActions(useCatalogStore, [
      "setMinPrice",
      "setMaxPrice",
      "setDeviceType",
      "setRam",
      "resetFilters",
    ]),
    updateMinPrice(value) {
      const price = value ? Number(value) : 50;
      this.setMinPrice(price);
      this.updateFilters();
    },
    updateMaxPrice(value) {
      const price = value ? Number(value) : 180000;
      this.setMaxPrice(price);
      this.updateFilters();
    },
    updateFilters() {
      this.setDeviceType(this.filters.deviceType);
      this.setRam(this.filters.ram);
    },
  },
};
</script>

<style scoped>
.filters {
  width: 250px;
  height: 450px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-right: 20px;

}

.filter-group {
  margin-bottom: 15px;
}

.filter-group label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #333;
}

.filter-group input,
.filter-group select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s;
}

.filter-group input:focus,
.filter-group select:focus {
  outline: none;
  border-color: #4a90e2;
}

.reset-btn {
  width: 100%;
  padding: 10px;
  background-color: #55a0f0;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.reset-btn:hover {
  background-color: #0056b3;
}
</style>
