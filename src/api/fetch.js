import axios from 'axios'
import qs from 'qs'

// configuración de axios
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'charset=UTF-8';
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

//POST
axios.interceptors.request.use((config) => {
	if (config.method === 'post') {
		config.data = qs.stringify(config.data);
	}
	return config;
}, (error) => {
	//_.toast("Pase incorrecto", 'fail');
	return Promise.reject(error);
});

//POST Y PUT
export function fetchPost(url, params, method) {
	return new Promise((resolve, reject) => {
		axios.post(url, params)
			.then(response => {
				resolve(response.data);
			}, err => {
				reject(err);
			})
			.catch((error) => {
				reject(error)
			})
	})
}

//GET Y DELETE
export function fetch(url, param, method) {
	console.log(method)
	return new Promise((resolve, reject) => {	   
		axios.get(url, {
			method: method,
			params: param
		})
		.then(response => {
			resolve(response.data)
		}, err => {
			reject(err)
		})
		.catch((error) => {
			reject(error)
		})
	})
}

export default {
	fetchGet,
	fetchPost,
	Source(path) {
		return fetchGet(`/photos/${id}`)
	}
}