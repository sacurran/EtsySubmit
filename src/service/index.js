//Stephanie Curran Code

import axios from 'axios';


export const nextGen = (data, callback) =>{
	axios.post('/api/nextGen',data)
	.then((res)=>callback(res.data))
	.catch(function (error) {
    	console.log(error);
  	});
}