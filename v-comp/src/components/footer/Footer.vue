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
            </div>
        </div>
    </footer>
</template>

<script></script>

<style scoped>
footer {
    height: 480px;
    padding: 30px 20% 0 20% ;
    background-color: #060F42;
}

.footer-informations {
    display: flex;
    justify-content: space-between;
}

.info {
    width: 179px;
}

.footer-p1{
    font-family: Lato;
font-weight: 600;
font-size: 18px;
line-height: 24px;
letter-spacing: 0%;
color: #D9D9D9 ;
}

.footer-p2{
    font-family: Lato;
font-weight: 500;
font-size: 12px;
line-height: 16px;
letter-spacing: 0%;
color: #D9D9D9;
}

.we-info{
        width: 360px;
}
.services{
    width: 146px;
}

.contacts{
    width: 230px;
}
</style>