<template>
    <footer>
        <div class="footer-informations">
            <div class="info">
                <p class="footer-p1">Информация</p>
                <p class="footer-p2">Акции</p>
                <p class="footer-p2">Кредит</p>
                <p class="footer-p2">Оплата и доставка</p>
                <p class="footer-p2">Гарантия</p>
                <p class="footer-p2">Частые вопросы</p>
                <p class="footer-p2">Новости</p>
                <p class="footer-p2">Блог</p>
                <p class="footer-p2">О нас</p>
                <p class="footer-p2">Политика конфиденциальности</p>
                <p class="footer-p2">Контакты</p>
            </div>
            <div class="services">
                <p class="footer-p1">Услуги и сервисы</p>
                <p class="footer-p2">Сервисный центр v-comp</p>
                <p class="footer-p2">Магазин Б/У товара</p>
                <p class="footer-p2">Скупка Б/У </p>
                <p class="footer-p2">Ремонт ПК и оргтехники</p>
                <p class="footer-p2">Компьютерная помощь</p>
                <p class="footer-p2">Сотрудничество</p>
                <p class="footer-p2">Главная</p>
            </div>
            <div class="contacts">
                <p class="footer-p1">Контакты</p>
                <p class="footer-p2">(067) 11-12-485 - Отдел продаж</p>
                <p class="footer-p2">(066) 484-39-22 - Отдел продаж</p>
                <p class="footer-p2">(063) 747-33-48 - Отдел продаж</p>
                <p class="footer-p2">Днепр<br>
                    Европейская, 8 (бывшая Миронова 8)</p>
                <p class="footer-p2">Понедельник-Пятница 9:00-19:00 <br>
                    Суббота-Воскресенье: с 9:00-16:00</p>
            </div>
            <div class="we-info">
                <p class="footer-p1">Следите за нами</p>
                <div class="icons">
                    <div class="icon1"></div>
                    <div class="icon2"></div>
                    <div class="icon3"></div>
                    <div class="icon4"></div>
                </div>
                <div class="footer-inp">
                    <p class="footer-p1">Подписывайтесь на скидки</p>
                    <div class="input-container">
                        <input type="email" placeholder="Укажите ваш email..." />
                        <button class="send-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M2 21L23 12 2 3v7l15 2-15 2v7z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

        </div>
        <div class="footer-bottom">
            <div class="footer-img">
                <router-link :to="{ name: 'home' }"><img class="footer_img" src="./footer_img/footer-img.svg" alt=""></router-link>
                <p class="footer-P">2008-2021&nbsp; Интернет-магазин v-comp.com.ua
                    &nbsp; Все права защищены</p>
            </div>
           <img src="./footer_img/visa.svg" alt="" class="footer-visa">
        </div>
    </footer>
</template>

<script>
export default{}</script>

<style scoped>
footer {
    padding: 30px 20% 30px 20%;
    background-color: #060F42;
}

.footer-informations {
    display: flex;
    justify-content: space-between;
}

.info {
    width: 179px;
}

.footer-p1 {
    font-family: Lato;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0%;
    color: #D9D9D9;
}

.footer-p2 {
    font-family: Lato;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0%;
    color: #D9D9D9;
}

.we-info {
    width: 360px;
}

.services {
    width: 146px;
}

.contacts {
    width: 230px;
}

.icons {
    width: 170px;
    height: 32px;
    gap: 8px;
    display: flex;
    justify-content: space-between;
}

.icon1 {
    width: 31px;
    height: 32px;
    border-radius: 50%;
    background-image: url(./footer_img/Instagram.svg);
    background-position: center;
    background-size: cover;
    cursor: pointer;
}

.icon2 {
    width: 31px;
    height: 32px;
    border-radius: 50%;
    background-image: url(./footer_img/facebook.svg);
    background-position: center;
    background-size: cover;
    cursor: pointer;
}

.icon3 {
    width: 31px;
    height: 32px;
    border-radius: 50%;
    background-image: url(./footer_img/telegram.svg);
    background-position: center;
    background-size: cover;
    cursor: pointer;
}

.icon4 {
    width: 31px;
    height: 32px;
    border-radius: 50%;
    background-image: url(./footer_img/viber.svg);
    background-position: center;
    cursor: pointer;
    background-size: cover;
}

.footer-inp {
    margin-top: 20px;
}

.footer-img {
    width: 599px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-bottom {
    width: 100%;
    height: 72px;
    border-top: 1px solid #D9D9D9;
    border-bottom: 1px solid #D9D9D9;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
}

.input-container {
    position: relative;
    width: 350px;
}

input {
    width: 360px;
    padding: 12px 40px 12px 10px;
    border-radius: 6px;
    border: none;
    outline: none;
    font-size: 16px;
}

input::placeholder {
    color: gray;
}

.send-button {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
}

.send-button svg {
    width: 20px;
    height: 20px;
    fill: #0045b5;
}

.send-button:hover svg {
    fill: #0066ff;
}

.footer_img {
    width: 160px;
    height: 40px;
    object-fit: cover;
    margin-top: 20px;

}

.footer-P {
    font-family: Lato;
    font-weight: 400;
    font-size: 12px;
    line-height: 14.4px;
    letter-spacing: 0%;
    color: #B8B8B8;
    margin-top: 50px;
}

.footer-visa{
    width: 100px;
    height: 32px;
    margin-top: 20px;
    object-fit: cover;
}
</style>