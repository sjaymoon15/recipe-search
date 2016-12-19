import { SEARCH_RECIPES } from '../actions/index';

const INITIAL_STATE = { recipes: [], recipe:null };

export default function( state = INITIAL_STATE, action){
	switch(action.type){
		case SEARCH_RECIPES:
			console.log('action', action);
			return { ...state, all: action.payload.data };
	}
	return state;
}