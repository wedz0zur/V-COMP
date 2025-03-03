<template>
    <div class="product-card">
        <div style="height: 320px;">
            <div class="heart" @click="this.heart = !this.heart" :class="heart ? 'active' : 'noActive'"></div>
            <img class="product-img" :src="product.image" alt="">
            <h2 class="product-name">{{ product.name }}</h2>
        </div>

        <div>
            <h2 class="product-rating">{{ product.rating }} ⭐</h2>
            <div style="display: flex; justify-content: space-between;">
                <p class="product-price">{{ product.price }}₽</p>
                <button class="product-btn">Купить</button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            heart: false,
        }

    },
    props: {
        product: Object
    },

}
</script>

<style>
.product-card {
    position: relative;
    width: 242px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 7px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: box-shadow 0.3s ease;
}

.product-card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.product-img {
    width: 218px;
    height: 214px;
    object-fit: contain;

}

.product-name {
    font-family: Lato;
    font-weight: 500;
    font-size: 17px;
    line-height: 16px;
    letter-spacing: 0%;
    color: #333333;
    margin-top: 12px;
}

.product-price {
    font-family: Lato;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0%;
    color: #E93232;
    margin-top: 5px;
}

.product-btn {
    width: 73px;
    height: 32px;
    gap: 8px;
    border-radius: 4px;
    padding-top: 4px;
    padding-right: 12px;
    padding-bottom: 4px;
    padding-left: 12px;
    background-color: #06A56C;
    font-family: Lato;
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0%;
    color: #F4F8FB;
    border: 0;
}

.heart {
    width: 20px;
    height: 17px;
    cursor: pointer;
    background-position: center;
    background-size: cover;
    position: relative;
    left: 200px;
    bottom: 5px;
}

.noActive {
    background-image: url(./catalog-img/heart-grey.png);
}

.active {
    background-image: url(./catalog-img/heart-blue.png);
}

.product-rating {
    font-family: Lato;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    
}
</style>