<template>
  <div>
    <ul class="list-group">
    <li v-for="(item, index) in posts" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
        <button class="btn btn-outline-info" @click="getComment(item.id)">
        {{ item.title }}
        </button>
        <span v-bind:id="item.id"></span>
    </li>
    </ul>
    <h1></h1>
  </div>
</template>

<style scoped>
    #way {
        display: none
    }
</style>

<script>
import axios from 'axios'
import $ from "jquery"

export default {
    name: 'Lista',
    data(){
        return {
            posts: []
        }    
    },
    methods:{
        async getComment(post){
            if($('#'+post+' span').length > 0){
            
            } else{
                try{
                    let comments = await axios.get('https://jsonplaceholder.typicode.com/comments?postId='+post)
                    //console.log(comments.data.length)
                    $('body').css('background-color', 'orange')
                    $("#"+post).append('<span class="input-group-text" id="'+post+'">Comentarios</span>')
                    for (var index in comments.data) {
                        //console.log(comments.data[index])
                        $("#"+post).append('<div class="list-group" id="list-tab" role="tablist"><input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value="'+comments.data[index].body+'"></div>')
                    }
                }catch(error){
                    console.log(error)
                }        
            }
        }
    },
    mounted() {
        let vue = this;
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(function(response) {
                vue.posts = response.data
            })
            .catch(error => { 
                console.log(error)
            })
    }

}
</script>