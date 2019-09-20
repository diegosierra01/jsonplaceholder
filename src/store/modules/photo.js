import api from '@/api/fetch.js'
import Resource from '@/api/resource.js'

const state = {
    resource: []
}

const actions = {
    async loadResource({commit}, payload){
        var nuevo = new Resource()
        let method = 'get';
        let route =  `/photos/${payload.id}`;
        let params = {
            method,
            route
        };
        let res = await nuevo.runWithoutParams(params)
        commit('SET_RESOURCE', res)
        console.log(res)
        /*api.fetchGet(`/photos/${payload.id}`)
        .then(res => {
            commit('SET_RESOURCE', res)
        })
        /**if (palyload.router == 'sport') {
			api.SportsDetail(palyload.id)
		} else if (palyload.router == 'travel') {

        }**/
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