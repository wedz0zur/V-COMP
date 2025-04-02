<script>
import Header from './components/Header/Header.vue';
import Footer from './components/footer/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <Header />
  <main class="main-content">
    <router-view />
  </main>
  <Footer />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&family=Heebo:wght@100..900&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Overpass:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Prata&family=Varela+Round&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}


header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; 
  background-color: white; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
}


.main-content {
  padding-top: 130px; 
}


footer {
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
}


</style>