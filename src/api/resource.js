import api from '@/api/fetch.js'

class Resource {

    constructor(){

    }

    runWithoutParams(params) {
        let answer = api.fetch(params.method, params.route)
        return answer
    }

    runWithParams(params){
        let answer = api.fetchData(params.method, params.route, params.data)
        return answer
    }
    
}

export default Resource