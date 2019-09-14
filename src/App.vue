<template>
  <div id="app" class="container">
    <Encabezado></Encabezado>
      <div id="nav">
        <router-link to="/">Publicaciones</router-link> | 
        <router-link to="/galery">Galería</router-link>    
      </div>
      <router-view></router-view>
    <!--HelloWorld msg="Welcome to Your Vue.js App"/-->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Encabezado from './components/Encabezado'
import Lista from './components/Lista'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Encabezado,
    Lista
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
