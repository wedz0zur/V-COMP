import { defineStore } from "pinia";

export const useCatalogStore = defineStore("catalog", {
  state: () => ({
    products: [],
    filters: {
        minPrice: 50,
        maxPrice: 180000,
        categories: []
    },
    loading: false,
    error: null,
  }),
  getters: {
    filterProducts(state){
        return state.products.filter(
            product => {
                const inPriceRange = product.price >= state.filters.minPrice && product.price <= state.filters.maxPrice;
                const inCategory = state.filters.categories.length === 0 || state.filters.categories.includes(product.category);
                return inPriceRange && inCategory;
            }
        )
    }
  },
  actions: {
    async fetchProducts() {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch(
          "https://676f8fc5b353db80c322ff2f.mockapi.io/catalogPC"
        );
        if (!response.ok) throw new Error("Ошибка загрузки");
        this.products = await response.json();
      } catch (err) {
        this.error = err.message;
        console.log(err);
      } finally {
        this.loading = false
      }
    },
    setMinPrice(price){
        this.filters.minPrice = price;
    },
    setMaxPrice(price){
        this.filters.maxPrice = price;
    },
    toggleCategory(category){
        if(this.filters.categories.includes(category)){
            this.filters.categories = this.filters.categories.filter(c => c !== category);
        }else{
            this.filters.categories.push(category);
        }
    }
  },
});
