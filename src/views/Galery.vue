<template>
    <div>
        <b-container class="bv-example-row">
            <br>
            <b-card-group deck>
                <b-card header="Albums">
                    <b-row class="text-center">            
                        <b-col cols="8">
                            <b-list-group>
                                <router-link :to="{ name: 'albums', params: {albumId:item.id, id:1} }" 
                                    v-for="(item, index) of galery" :key="index">
                                        <b-list-group-item>{{ item.title }}</b-list-group-item>
                                </router-link>
                            </b-list-group>
                        </b-col>
                        <b-col cols="4">
                            <b-list-group>
                                <b-link v-for="(item, index) in galery" :key="index">
                                    <b-list-group-item>{{ item.id }}</b-list-group-item>
                                </b-link>
                            </b-list-group> 
                        </b-col>
                    </b-row>                       
                </b-card>
            </b-card-group>
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