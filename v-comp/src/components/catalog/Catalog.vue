<template>
    <div style="margin-left: 10%; margin-top: 50px;" class="">
        <div style="display: flex;"> 
            <h1 style="margin-bottom: 20px;">Каталог товаров</h1>
            <input v-model="input" class="search" type="text" placeholder="поиск товара" @input="handleSearch">
        </div>
        <p v-if="loading">Загрузка товаров...</p>
        <p v-if="error">{{ error }}</p>
        <div style="display: flex;">
            <Filters style="width: 242px;" />
            <div class="product-container" v-if="filteredProducts.length">
                <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
                
            </div>
            <p v-else-if="!loading">Товары не найдены</p>
        </div>

    </div>
    <br>

</template>

<script>
import Footer from '@/components/footer/Footer.vue';
import Header from '../Header/Header.vue';
import ProductCard from './ProductCard.vue';
import Filters from './Filters.vue';
import { mapState, mapActions } from 'pinia';
import { useCatalogStore } from '@/store/store.js';
import Modal from './Modal.vue';

export default {
    data() {
        return {
            store: useCatalogStore(),
            input: ''
        }
    },
    computed: {
        ...mapState(useCatalogStore, ["filterProducts", "loading", "error"]),
        filteredProducts() {
            if (!this.input) return this.filterProducts;
            return this.filterProducts.filter(product => 
                product.name.toLowerCase().includes(this.input.toLowerCase())
            );
        }
    },
    methods: {
        ...mapActions(useCatalogStore, ["fetchProducts"])
    },
    mounted() {
        this.fetchProducts()
    },
    components: {
        Header,
        Footer,
        Filters,
        ProductCard,
        Modal,
    }
}
</script>

<style scoped>
.product-container {
    width: 70%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
}

.search {
    height: 50px;
    margin-left: 25%;
    padding: 10px 15px;
    width: 20%;
    border: 1px solid #ddd;
    border-radius: 24px;
    font-size: 16px;
    outline: none;
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.search:focus {
    border-color: #4285f4;
    box-shadow: 0 2px 8px rgba(66, 133, 244, 0.3);
}
</style>