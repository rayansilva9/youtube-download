// import axios from 'axios'



// const options = {
//   params: {query: 'eminem'},
//   url: 'https://youtube-music1.p.rapidapi.com/v2/search',
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '5027057ad2msh83cdf171b3c93ddp155066jsn439801785460',
//     'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
//   }
// };


  


//   const fechtFromAPI = async () => {
//    const { data } = await axios.get(`${BASE_URL}/${url}`, options)

// axios.request(options).then(function (response) {

//   const data = response.data
//   console.log(data) 
//  }).catch(function (error) {
//    console.error(error);
//  });
//   }
//      return data
//   } 




import axios from "axios";

// params: {query: 'eminem'}
// url: BASE_URL,

const BASE_URL = 'https://youtube-music1.p.rapidapi.com/v2/search'
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5027057ad2msh83cdf171b3c93ddp155066jsn439801785460',
    'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
  }
};

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
  
export default function fetch(url){
  axios.request(`${BASE_URL}?query=${url}`, options)
  .then((r) => (
    console.log(r.data)
  ))
}

