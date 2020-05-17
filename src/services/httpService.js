import axios from 'axios';
import { toast } from 'react-toastify';
import { log } from './loggingService';

axios.interceptors.response.use(null, (error) => {
	console.log('INTERCEPTHORRRR');

	if (
		!(
			error.response &&
			error.response.status >= 400 &&
			error.response.status < 500
		)
	) {
		log(error);
		toast.error('Something Failed');
	}

	return Promise.reject(error);
});

export default {
	get: axios.get,
	post: axios.post,
	put: axios.put,
	delete: axios.delete,
};