<template>
    <div>
        <h1>Album: {{ $route.params.albumId }} </h1>
        <hr>
        <b-container>         
            <b-row>
                <b-col>
                    <router-link :to="{ name: 'albums', params: {albumId:item.albumId, id:item.id} }" 
                        v-for="(item, index) of album.album" :key="index">
                        <b-img thumbnail fluid v-bind:src="item.thumbnailUrl" alt="Image 1"></b-img>
                    </router-link>
                </b-col>
                <b-col>
                    <Fotos />
                </b-col>
            </b-row>
        </b-container>
        
    </div>   
</template>

<script>
import Fotos from "@/components/Fotos.vue";
//import axios from 'axios'
import {mapState} from 'vuex'

export default {
    components: {
        Fotos,
    },
    mounted() {
        this.$store.dispatch('loadAlbum', this.$route.params.albumId) 
    },
    computed: {
        ...mapState([
            'album'
        ])
    }   
}
</script>