<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="success">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">
          <router-link to="/">JSON</router-link>
        </b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name: 'home'}" exact>Publicaciones</b-nav-item>
            <b-nav-item :to="{name: 'galery'}">Galería</b-nav-item>
          </b-navbar-nav> 
        </b-collapse>  
      </b-container>
    </b-navbar>
    <Encabezado></Encabezado>
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
