import axios from "axios";

const ROOT_API = 'www.themealdb.com/api/json/v1/1/';
const API_VERSION = 'api';

export async function getNewRecipe() {
    const URL = 'search.php?f=a';
    const response =  await axios.get(`https://api-lk21.herokuapp.com/api/v1/latest`);
    const axiosResponse =  response.data;

    console.log('recipe =>',axiosResponse.data);
    return axiosResponse.data;
}