<template>
    <header>
        <div class="header_nav_prof">
            <div class="header-nav">
                <div class="burger">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <a href="#">Акции</a>
                <a href="#">Кредит</a>
                <a href="#">Оплата и доставка</a>
                <a href="#">Помощь</a>
                <a href="#">Скупка Б/У</a>
                <a href="#">Контакты</a>
            </div>
            <img class="profile" src="./Header_img/Shape.svg" alt="">
        </div>
        <div class="header_search">
            <a href="#">
                <img class="v-comp-svg" src="./Header_img/Logo.svg" alt="">
            </a>
            <button class="catalog-green">КАТАЛОГ ТОВАРОВ <img src="./Header_img/Frame 7779.svg" class="catalog-gr"
                    alt=""></button>
            <div class="input-group">
                <div class="form-outline" data-mdb-input-init>
                    <input type="search" id="form1" class="form-control" />
                    <label class="form-label" for="form1">Поиск</label>
                </div>
                <button type="button" class="btn btn-primary" data-mdb-ripple-init>
                    <i class="fas fa-search"><img src="./Header_img/vector.svg" alt=""></i>
                </button>
            </div>
            <div class="header-last">
                <div class="favourites"></div>
                <div class="basket"></div>
            </div>
        </div>
    </header>
</template>

<script>
import { Input, Ripple, initMDB } from "mdb-ui-kit";    
import "mdb-ui-kit/css/mdb.min.css";
import "mdb-ui-kit/js/mdb.es.min.js";

export default {
    name: "header",
    mounted() {
        initMDB({ Input, Ripple });
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

header{
    box-shadow: 2px 2px 4px rgba(16, 16, 15, 0.3);
}

.header_nav_prof {
    height: 40px;
    padding: 0 10% 0 10%;
    background-color: #060F42;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header-nav {
    width: 460px;
    height: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-nav a {
    font-family: Lato;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    color: #F4F8FB;
    text-decoration: none;
}

.burger {
    width: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
}

.burger div {
    width: 20px;
    height: 2px;
    background-color: white;
}

.profile {
    width: 24;
    height: 24;
    cursor: pointer;
}

.header_search {
    height: 97px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10% 0 10%;
}

.catalog-gr {
    width: 20px;
    height: 20px;
}

.catalog-green {
    width: 173px;
    height: 42px;
    gap: 8px;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 4px;
    background-color: #06A56C;
    font-family: Lato;
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0%;
    color: #F4F8FB;
    cursor: pointer;
}
.input-group{
    width: 760px;
}

.favourites{
    width: 40px;
    height: 40px;
    background-image: url(./Header_img/heart-svgrepo-com.svg);
    background-position: center;
    background-size: cover;
}

.basket{
    width: 40px;
    height: 40px;
    background-image: url(./Header_img/basket-svgrepo-com.svg);
    background-position: center;
    background-size: cover;
    cursor: pointer;
}

.header-last{
    width: 150px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}

</style>