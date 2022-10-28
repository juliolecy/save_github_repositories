import axios from 'axios';

//A Api do Github funciona assim: baseURL/repos/donoDoRepositório/nomeDoRepositório
export const api = axios.create({
  baseURL: 'https://api.github.com',
});
