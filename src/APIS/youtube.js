import axios from 'axios';

const KEY = 'AIzaSyAK8wZ4TJyP0XY2Qs8v_PC1-2SuO4NIGmw';

export default axios.create({
     baseURL: 'https://www.googleapis.com/youtube/v3',
     params: {
         part: 'snippet',
         maxResult: 5,
         key: KEY,
     }
});