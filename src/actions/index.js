import axios from 'axios';

const APP_ID = '8da6e828';
const APP_KEY = '3f9a2cf7368a3f795c488ab5659e41ca';
const ROOT_URL = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}`;

export const SEARCH_RECIPES = 'SEARCH_RECIPES';

export function searchRecipes(searchMe){
	const url = `${ROOT_URL}&q=${searchMe}`
	const request = axios.get(url);
	console.log('request', request);
	return {
		type: SEARCH_RECIPES,
		payload: request
	};
}