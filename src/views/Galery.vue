<template>
    <div>
        <b-container>
            <b-col cols="8">
                <h3>Albums</h3>
                <router-link :to="{ name: 'albums', params: {albumId:item.id, id:1} }" 
                    v-for="(item, index) of galery" :key="index">
                    <b-list-group>
                        <b-list-group-item>{{ item.title }}</b-list-group-item>
                    </b-list-group>
                </router-link>
            </b-col>                    
            <b-col cols="4">
                <b-row v-for="(item, index) in posts" :key="index">

                </b-row>
            </b-col>
        </b-container>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            galery: []
        }
    },
    mounted() {
        let vue = this;
        axios
            .get('https://jsonplaceholder.typicode.com/albums')
            .then(function(response) {
                vue.galery = response.data
            })
            .catch(error => { 
                console.log(error)
            })
    }   
}
</script>