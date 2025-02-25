<template>
    <main>
        <section class="section-1">
            <div class="section-1-lists">
                <div class="section-1-list">Комплектующие ПК</div>
                <div class="section-1-list">Мониторы</div>
                <div class="section-1-list">Компьютеры</div>
                <div class="section-1-list">Ноутбуки</div>
                <div class="section-1-list">Игровые консоли</div>
                <div class="section-1-list">Комплектующие к ноутбукам</div>
                <div class="section-1-list">Планшеты</div>
                <div class="section-1-list">Принтеры и МФУ</div>
                <div class="section-1-list">Акустические колонки</div>
                <div class="section-1-list">Сетевое оборудование</div>
                <div class="section-1-list">Мониторы</div>
            </div>
            <div class="section-1-info"></div>
        </section>
    </main>
</template>

<script>
export default {
    name: "main",
    mounted() {

    }
}
</script>

<style scoped>
main {
    padding: 32px 10% 0 10%;
}

.section-1 {
    width: 370px;
    height: 556px;
    display: flex;
    justify-content: space-between;
}

.section-1-list {
    width: 370px;
    height: 48px;
    display: flex;
    align-items: center;
    font-family: Lato;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0%;
    color: #060F42;
    border-bottom: 1px solid rgba(0, 0, 0, 0.069);
}
</style>