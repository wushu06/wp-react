import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost/silcoates/gravityformsapi/'
});

export default instance;