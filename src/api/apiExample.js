import Axios from 'axios';

const axios = Axios.create();

export default class apiExample {
    static getBeers() {
        return axios.get("http://localhost:3000/beers");
    }
}
