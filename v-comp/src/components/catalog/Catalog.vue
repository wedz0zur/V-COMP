<template>
    <div style="margin-left: 10%; margin-top: 50px;" class="">
        <h1 style="margin-bottom: 20px;">Каталог товаров</h1>

        <p v-if="loading">Загрузка товаров...</p>
        <p v-if="error">{{ error }}</p>
        <div style="display: flex;">
            <Filters style="width: 242px;" />
            <div class="product-container" v-if="filterProducts.length">
                <ProductCard v-for="product in filterProducts" :key="product.id" :product="product" />
                
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
            store: useCatalogStore()
        }
    },
    computed: {
        ...mapState(useCatalogStore, ["filterProducts", "loading", "error"])
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
</style>