import api from '@/api/fetch.js'

class Resource {

    constructor(){

    }

    runWithoutParams(params) {
        let answer = api.fetch(params.route, params.method)
        return answer
    }

    runWithParams(method, route, data){
        let answer = api.fetchData(params.route, params.method, params.data)
        return answer
    }
    
}

export default Resource