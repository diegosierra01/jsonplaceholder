<template>
  <div>
    <ul class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(item, index) in posts" :key="index">
        <span class="badge badge-primary badge-pill"></span>
        {{ item.title }}
    </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Lista',
    data(){
        return {
            posts: []
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