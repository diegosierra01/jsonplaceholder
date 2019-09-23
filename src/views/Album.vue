<template>
    <div>
        <b-container>
            <br>
            <h1>Album: {{ $route.params.albumId }} </h1>         
            <b-row>
            <b-button squared variant="success">Nueva Foto</b-button>
            </b-row>
            <br>
            <b-row>
                <b-col>
                    <router-link :to="{ name: 'albums', params: {albumId:item.albumId, id:item.id} }" 
                        v-for="(item, index) of list.list" :key="index">
                        <b-img thumbnail fluid v-bind:src="item.thumbnailUrl" alt="Image 1"></b-img>
                    </router-link>
                </b-col>
                <b-col v-if="list.type == 'edit'">
                    <StructurePhoto />
                </b-col>
                <b-col v-if="list.type == 'read'">
                    <Fotos />
                </b-col>
            </b-row>
        </b-container>
    </div>   
</template>

<script>
import Fotos from "@/components/Fotos.vue"
import StructurePhoto from "@/components/StructurePhoto.vue"
//import axios from 'axios'
import {mapState} from 'vuex'

export default {
    components: {
        Fotos,
        StructurePhoto
    },
    mounted() {
        let id = this.$route.params.albumId;
        let router =  'fotos';
        let params = {
            id,
            router
        };
        this.$store.dispatch('loadList', params)
        if(this.$route.params.id != 0){
            this.$store.commit('MODIFY_TYPE', 'read') 
        }else{
            this.$store.commit('MODIFY_TYPE', '') 
        }
    },
    computed: {
        ...mapState([
            'list',
            'type'
        ])
    }     
}
</script>