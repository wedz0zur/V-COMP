<template>
    <div class="filters">
        <h3>Фильтры</h3>
        <label for="">
            Минимальная цена:
            <input type="number" :value="filters.minPrice" @input="setMinPrice($event.target.value)"/>
        </label>
        <label for="">
            Максимальная цена:
            <input type="number" :value="filters.maxPrice" @input="setMaxPrice($event.target.value)"/>
        </label>

       
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import {useCatalogStore} from '../../store/store';
export default{
    computed: {
        ...mapState(useCatalogStore, ["filters"]),
    },
    methods: {
        ...mapActions(useCatalogStore, ["setMinPrice", "setMaxPrice"])
    }
}

</script>

<style>
.filters{
    width: 10%;
    margin-bottom: 20px;
}
</style>