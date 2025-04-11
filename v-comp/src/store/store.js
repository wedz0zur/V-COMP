import { defineStore } from "pinia";

export const useCatalogStore = defineStore("catalog", {
  state: () => ({
    products: [], 
    filters: {
      minPrice: 50, 
      maxPrice: 180000, 
      deviceType: "all", 
      ram: "all", 
    },
    loading: false, 
    error: null, 
    input: "", 
  }),
  getters: {
    filterProducts: (state) => {
      return state.products.filter((product) => {

        const inPriceRange =
          product.price >= state.filters.minPrice &&
          product.price <= state.filters.maxPrice;

        const matchesInput = product.name
          .toLowerCase()
          .includes(state.input.toLowerCase());

        const matchesDeviceType =
          state.filters.deviceType === "all" ||
          (state.filters.deviceType === "laptop" &&
            product.diagonal !== null) ||
          (state.filters.deviceType === "desktop" && product.diagonal === null);
        const matchesRam =
          state.filters.ram === "all" ||
          (product.ram && product.ram.split(" ")[0] === state.filters.ram); 

        return inPriceRange && matchesInput && matchesDeviceType && matchesRam;
      });
    },
  },
  actions: {
    async fetchProducts() {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch(
          "https://676f8fc5b353db80c322ff2f.mockapi.io/catalogPC"
        );
        if (!response.ok) throw new Error("Ошибка загрузки данных");
        this.products = await response.json();
      } catch (err) {
        this.error = err.message;
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
    setMinPrice(price) {
      this.filters.minPrice = price ? Number(price) : 50;
    },
    setMaxPrice(price) {
      this.filters.maxPrice = price ? Number(price) : 180000;
    },
    setDeviceType(deviceType) {
      this.filters.deviceType = deviceType;
    },
    setRam(ram) {
      this.filters.ram = ram;
    },
    resetFilters() {
      this.filters = {
        minPrice: 50,
        maxPrice: 180000,
        deviceType: "all",
        ram: "all",
      };
      this.input = "";
    },
  },
});
