import axios from 'axios'  
import api from '@/api/fetch.js'

const state = {
    photo: []
}

const actions = {
    loadPhoto({commit}, id){
        api.Photo(id)
            .then(res => {
                commit('SET_PHOTO', res)
            })
    }
}

const mutations = {
    SET_PHOTO (state, photo) {
        state.photo = photo
    }
}   
    
export default {
    state,
	actions,
	mutations
}