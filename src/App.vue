<template>
  <div>
    <router-view/>
    <Footer></Footer>
  </div>

</template>
<script>
import './global.css'
import './menu.css'
import './tabela.css'
import './cadastros.css'
import './header.css'
import Footer from './components/Footer.vue';
  export default{
    name: "App",
    components:{
      Footer
    }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
