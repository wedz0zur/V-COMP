<template>
    <section>
        <div class="left">
            <p class="left-p">История заказов</p>
            <hr style="margin-top: -18px;">
            <p style="margin-top: -18px;" class="left-p">Избранное</p>
            <hr style="margin-top: -18px;">
            <p style="margin-top: -18px;" class="left-p">Просмотренные товары</p>
            <hr style="margin-top: -18px;">
            <p style="margin-top: -18px;" class="left-p">Мои отзывы</p>
            <hr style="margin-top: -18px;">
            <p style="margin-top: -18px;" class="left-p">Личные данные</p>
            <hr style="margin-top: -18px;">
        </div>
        <div class="right">
            <h1>Личные данные</h1>
            <div class="user-info">
                <div style="display: flex; justify-content: space-between;">
                    <p class="user-info-1">Имя Фамилия</p>
                    <p v-if="userName || userLastName" class="user-info-2">{{ userName }} {{ ' ' }} {{ userLastName }}</p>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <p class="user-info-1">Телефон</p>
                    <p v-if="userPhone" class="user-info-2">{{ userPhone }}</p>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <p class="user-info-1">Email</p>
                    <p v-if="userEmail" class="user-info-2">{{ userEmail }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            userPhone: null,
            userName: null,
            userLastName: null,
            userEmail: null,
        };
    },
    mounted() {
        this.loadUserData();
    },
    methods: {
        loadUserData() {
            const userData = JSON.parse(localStorage.getItem("users"));
            if (userData && userData.phone) {
                this.userPhone = userData.phone;
                this.userName = userData.name;
                this.userLastName = userData.lastName;
                this.userEmail = userData.email;
            }
        },
    },
}

</script>

<style scoped>
section {
    width: 50%;
    height: 571px;
    margin-left: 10%;
    margin-bottom: 24px;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
}

.left {
    width: 371px;
    height: 285px;
}

.right {
    width: 530px;
    height: 571px;
    gap: 24px;
}

.left-p {
    width: 371px;
    height: 56px;
    padding: 12px;
    padding-top: 18px;
    font-family: "IBM Plex Mono", monospace;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0%;
    color: #060F42;
    cursor: pointer;
}

.left-p:hover {
    background-color: #F4F8FB;
}

.user-info {
    width: 500px;
    height: 176px;
}
</style>