import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

class App extends Component {
	handleOnClick() {
		// this.props.dispatch({
		// 	type: "INCREASE_COUNT"
		// });
		this.props.increaseCounter();
	}

	render() {
		return (
			<div className="App">
				<button onClick={event => this.handleOnClick()}>Click</button>
				<p>{this.props.items.length}</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		items: state.items
	};
};

const mapDispatchToProps = dispatch => {
	increaseCounter: () => dispatch({ type: "INCREASE_COUNT" });
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
