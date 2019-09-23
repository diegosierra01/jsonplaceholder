import Resource from '@/api/resource.js'

var nuevo = new Resource()

const state = {
    list: [],
    type: ''
}

function assign(payload){
    let route
    if(payload.router == 'fotos'){
        route = `/photos?albumId=${payload.id}`
    }else if(payload.router == 'albums'){
        route = `/albums/`
    }else if(payload.router == 'posts'){
        route = `/posts/`
    }else if(payload.router == 'comments'){
        route = `/comments?postId=${paylWoad.id}`
    }
    return {
        method: 'get',
        route
    }
}

const actions = {
    async loadList({commit}, payload){
        let params = assign(payload)
        nuevo.runWithoutParams(params)
            .then(res => {       
                commit('SET_LIST', res)
            })
    }
}


const mutations = {
    SET_LIST (state, list) {
        state.list = list
    },
    MODIFY_TYPE (state, type) {
        state.type = type 
        console.log(state.type)     
    }
}   
    
export default {
    state,
	actions,
	mutations
}