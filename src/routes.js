import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import SearchBar from './components/search_bar';
import RecipeLists from './components/recipe_list';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={SearchBar} />
		<Route path="/recipes" component={RecipeLists} />
	</Route>
);