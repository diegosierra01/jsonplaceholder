<template>
    <div>
        <h1>Album: </h1>

        <router-link :to="{ name: 'albums', params: {id:item} }" 
            v-for="(item, index) of fotosArr" :key="index">
            <button>Foto {{item}}</button>
        </router-link>

        <Fotos />
        <button @click="galery"> Album </button>
        
    </div>   
</template>

<script>
import Fotos from "@/components/Fotos.vue";

export default {
    components:{
        Fotos
    },
    data(){
        return{
            fotosArr: [1, 2, 3]
        }
    },
    methods: {
        galery(){
            this.$router.push('/galery')
        }
    }   
}
</script>