<template>
  <main>
    <SectionTop/>
    <Sale/>
  </main>
</template>

<script>
import SectionTop from './SectionTop.vue';
import Sale from './Sale.vue';
export default {
  name: "main",
  components: {
    SectionTop, 
    Sale,
  },
  
};
</script>
<style scoped>
main {
  padding: 32px 10% 0 10%;
}

</style>
