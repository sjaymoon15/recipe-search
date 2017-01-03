import axios from 'axios';

const APP_KEY = '0b9efd9649b8d968eba12e3db27f5e5a';
const ROOT_URL = `http://food2fork.com/api/search?&key=${APP_KEY}`;

export const SEARCH_RECIPES = 'SEARCH_RECIPES';

export function searchRecipes(searchMe){
	const url = `${ROOT_URL}&q=${searchMe}`;
	const request = axios.get(url);
	return {
		type: SEARCH_RECIPES,
		payload: request
	};
}