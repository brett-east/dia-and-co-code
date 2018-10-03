import axios from 'axios';

const searchRequest = axios.create({
  baseURL: 'https://newsapi.org/v2',
  params: {
    language: 'en'
  },
  headers: {
    'X-Api-Key': '4e6bcb51938145259450330d26229e64'
  }
});

export default searchRequest;
