<template>
  <div class="text-center sticky-top">
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
  </div>
</template>

<script>
export default {
  name: 'Encabezado'
}
</script>