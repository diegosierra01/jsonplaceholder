import Resource from '@/api/resource.js'

var nuevo = new Resource()

const state = {
    post: [],
    type: 'read'
}

function assign(payload){
    let route
    if(payload.router == 'fotos'){
        route = `/photos`
    }else if(payload.router == 'albums'){
        route = `/albums`
    }else if(payload.router == 'posts'){
        route = `/posts`
    }else if(payload.router == 'comments'){
        route = `/comments`
    }
    return {
        method: 'post',
        route,
        data: {
            title: 'foo',
            body: 'bar',
            userId: 1
        }
    }
}

const actions = {
    async createResource({commit}){
        let proof = {
            router: 'posts'
        };
        let params = assign(proof)
        nuevo.runWithParams(params)
            .then(res => {
                console.log(res)       
                commit('SET_POST_STATE', res)
            })
    }
}


const mutations = {
    SET_POST_STATE (state, post) {
        state.post = post      
    }
}   
    
export default {
    state,
	actions,
	mutations
}