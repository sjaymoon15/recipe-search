import axios from 'axios';

const APP_ID = '8da6e828';
const APP_KEY = '3f9a2cf7368a3f795c488ab5659e41ca';
const ROOT_URL = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}`;
// const API_KEY = '6e4c80df2c0b82d8bc138d3daa28f2f5';
// const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const SEARCH_RECIPES = 'SEARCH_RECIPES';

export function searchRecipes(searchMe){
	const url = `${ROOT_URL}&q=${searchMe}`;

	// const url = `${ROOT_URL}&q=${searchMe},us`;
	const request = axios.get(url);
	return {
		type: SEARCH_RECIPES,
		payload: request
	};
	// return (dispatch) => {
	// 	request.then(({data}) => {
	// 		dispatch({ 
	// 			type: SEARCH_RECIPES,
	// 			payload: data
	// 		});
	// 	})
	// };
}