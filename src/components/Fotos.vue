<template>
    <div class="sticky-top sticky-offset">
        <h1>Fotografía: {{ photo.title }} </h1>
        <b-container class="bv-example-row">
            <b-row>
                <b-col cols="12" md="8">
                    <b-img v-bind:src="photo.url" fluid alt="Fluid image"></b-img>
                </b-col>
                <b-col cols="6" md="4">
                    <button>Eliminar</button>
                    <br><br>
                    <button>Editar</button>
                </b-col> 
            </b-row>
        </b-container>    
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Fotos',
    data(){
        return{
            photo: []
        }
    },
    watch:{
        $route (to, from){
            let vue = this;
            axios
                .get('https://jsonplaceholder.typicode.com/photos/'+this.$route.params.id)
                .then(function(response) {
                    vue.photo = response.data
                    console.log(vue.photo)
                })
                .catch(error => { 
                    console.log(error)
                })
        }
    }   
}
</script>
</style scoped>
<style scoped>
    .sticky-offset {
        top: 56px;
    }
</style>