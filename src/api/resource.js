import api from '@/api/fetch.js'

class Resource {

    constructor(){

    }

    runWithoutParams(params) {
        let answer = api.fetchGet(params.route, params.method)
        return answer
    }

    runWithParams(method, route, data){
        let answer = api.fetchPost(params.route, params.method)
        return answer
    }
    
}

export default Resource