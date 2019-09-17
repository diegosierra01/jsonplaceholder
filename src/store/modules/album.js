import axios from 'axios'

export default {
    state:{
        album: []
    },
    actions: {
        loadAlbum({commit}, albumId){
            axios
            .get('https://jsonplaceholder.typicode.com/photos?albumId='+albumId)
            .then(data => {                
                let album = data.data
                commit('SET_ALBUM', album)
            })
            .catch(error => {
                console.log(error)
            })  
        }
    },
    mutations: {
        SET_ALBUM (state, album) {
            state.album = album
        }
    }   
}