import Resource from '@/api/resource.js'

var nuevo = new Resource()

const state = {
    resource: []
}

function assign(payload){
    let route
    if(payload == 'fotos'){
        route =  `/photos/${payload.id}`
    }else if(router == 'albums'){
        payload=  `/albums/${payload.id}`
    }else if(router == 'posts'){
        payload=  `/posts/${payload.id}`
    }else if(router == 'comments'){
        payload=  `/comments/${payload.id}`
    }
    return {
        method: 'get',
        route
    }

}

const actions = {
    async loadResource({commit}, payload){
        let params = assign(payload)
        let res = nuevo.runWithoutParams(params)
            .then(res => {       
                commit('SET_RESOURCE', res)
            })
        console.log(res)
    }
}


const mutations = {
    SET_RESOURCE (state, resource) {
        state.resource = resource
    }
}   
    
export default {
    state,
	actions,
	mutations
}