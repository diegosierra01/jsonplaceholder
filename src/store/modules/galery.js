import axios from 'axios'

export default {
    state:{
        galery: []
    },
    actions: {
        loadGalery({commit}){
            axios
            .get('https://jsonplaceholder.typicode.com/albums')
            .then(data => {                
                let galery = data.data
                commit('SET_GALERY', galery)
            })
            .catch(error => {
                console.log(error)
            })  
        }
    },
    mutations: {
        SET_GALERY (state, galery) {
            state.galery = galery
        }
    }   
}