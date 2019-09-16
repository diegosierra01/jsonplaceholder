import axios from 'axios'

export default {
    state:{
        photo: []
    },
    actions: {
        loadPhoto({commit}, id){
            axios
            .get('https://jsonplaceholder.typicode.com/photos/'+id)
            .then(data => {                
                let photo = data.data
                commit('SET_PHOTO', photo)
            })
            .catch(error => {
                console.log(error)
            })  
        }
    },
    mutations: {
        SET_PHOTO (state, photo) {
            state.photo = photo
            console.log(state.photo)
        }
    }   
}