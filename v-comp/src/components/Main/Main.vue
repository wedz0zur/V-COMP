<template>
  <main>
    <SectionTop />
    <Sale />
    <GameZone />
    <Links/>
  </main>
</template>

<script>
import SectionTop from "./SectionTop.vue";
import Sale from "./Sale.vue";
import GameZone from "./GameZone.vue";
import Links from './Links.vue'

export default {
  name: "MainComponent",
  components: {
    SectionTop,
    Sale,
    GameZone,
    Links,
  },
};
</script>
<style scoped>
main {
  padding-top: 32px;
}
</style>
