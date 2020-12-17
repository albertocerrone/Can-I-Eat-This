import axios from 'axios'

const baseUrl = 'https://api.spoonacular.com'
const myAPI = process.env.REACT_APP_SPOONACULAR_API_KEY

// * Here we are going to get informations about the recipe thanks to the api

export function getRecipeInfo(pageUrl){
  return axios.get(`${baseUrl}/recipes/extract?apiKey=${myAPI}&url=${pageUrl}`)
}
