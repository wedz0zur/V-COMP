<template>
    <div class="reviews-inst">
        <div class="reviews">
            <p class="reviews-p_1">Отзывы</p>
            <div class="reviews-slyde">
                <div class="user"></div>
                <div class="reting"></div>
            </div>
        </div>
        <div class="inst">

        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.reviews-p_1{
    font-family: Lato;
font-weight: 600;
font-size: 28px;
line-height: 32px;
letter-spacing: 0%;
color: #333;
}
.reviews{
    width: 630px;
    height: 282px;
}

.inst{
    width: 887px;
    height: 282px;
}

.reviews-inst{
    padding: 0 10% 0 10%;
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
}

.reviews-slyde{
    width: 630px;
    height: 156px;
    display: flex;
    justify-content: space-between;
}

.user{
    width: 452px;
    height: 140px;
}

.reting{
    width: 145px;
    height: 98px;
}
</style>