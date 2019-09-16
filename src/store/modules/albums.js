import axios from 'axios'

export default {
    state:{
        album: []
    },
    actions: {
        loadAlbum({commit}, id){
            axios
            .get('https://jsonplaceholder.typicode.com/photos?albumId='+id)
            .then(data => {                
                let album = data.data
                commit('SET_album', album)
            })
            .catch(error => {
                console.log(error)
            })  
        }
    },
    mutations: {
        SET_album (state, album) {
            state.album = album
            console.log(state.album)
        }
    }   
}