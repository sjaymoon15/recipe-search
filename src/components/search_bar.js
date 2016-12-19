import React, { Component } from 'react';
import { searchRecipes } from '../actions/index';
import { connect } from 'react-redux';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = { term: '' };
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		this.setState({term: event.target.value});
	}
	onFormSubmit(event){
		event.preventDefault();
		this.props.searchRecipes(this.state.term);
		this.setState({term: ''});
	}
	render(){
		return (
			<form onSubmit={this.onFormSubmit} className='input-group'>
				<input 
					placeholder='Find recipes you love!'
					className='form-control'
					value={this.state.term}
					onChange={this.onInputChange}
					/>
				<span className='input-group-btn'>
					<button type='submit' className='btn btn-secondary'>Submit</button>
				</span>
			</form>
		);
	}
}

function mapStateToProps(state){
	return { recipes: state.recipes.all }
}

export default connect(mapStateToProps, { searchRecipes })(SearchBar);