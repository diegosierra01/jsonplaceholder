import Resource from '@/api/resource.js'

var nuevo = new Resource()

const state = {
    resource: [],
    type: 'read'
}

function assign(payload){
    let route
    if(payload.router == 'fotos'){
        route = `/photos/${payload.id}`
    }else if(payload.router == 'albums'){
        route = `/albums/${payload.id}`
    }else if(payload.router == 'posts'){
        route = `/posts/${payload.id}`
    }else if(payload.router == 'comments'){
        route = `/comments/${payload.id}`
    }
    return {
        method: 'get',
        route
    }

}

const actions = {
    async loadResource({commit}, payload){
        let params = assign(payload)
        nuevo.runWithoutParams(params)
            .then(res => {
                console.log(res)       
                commit('SET_RESOURCE', res)
            })
    }
}


const mutations = {
    SET_RESOURCE (state, resource) {
        state.resource = resource      
    },
    MODIFY_TYPE (state, type) {
        state.type = type      
    }
}   
    
export default {
    state,
	actions,
	mutations
}