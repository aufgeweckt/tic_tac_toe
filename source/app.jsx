import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
	constructor(props) {
		super(props);  	
	
	}

  render() {

  		var player = {
  			player_one: "x",
  			player_two: "o",
  			currentTurn: "x"
  		}

		 var fields = [
			{id: 1}, {id: 2}, {id: 3},
			{id: 4}, {id: 5}, {id: 6},
			{id: 7}, {id: 8}, {id: 9}
		 ]

		var gameBoard = fields.map(function(field) {
			return <div id={"field-"+field.id} className="field">{field.id}</div>
		});

		return (
			<div className={'field-container'}>
				{gameBoard}
			</div>
		)
	}
}