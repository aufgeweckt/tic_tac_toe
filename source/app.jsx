import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
	constructor(props) {
		super(props);  		
	}

	buttonClicked() {
		if()
			console.log("x");
		}


  render() {
    return (
      <div className={'field-container'}>
		<div id="field1" onClick={this.buttonClicked} className={"field top-left"}>1</div>
		<div id="field2" onClick={this.buttonClicked} className={"field top-center"}>2</div>
		<div id="field3" onClick={this.buttonClicked} className={"field top-right"}>3</div>

		<div id="field4" onClick={this.buttonClicked} className={"field middle-left"}>4</div>
		<div id="field5" onClick={this.buttonClicked} className={"field middle-center"}>5</div>
		<div id="field6" onClick={this.buttonClicked} className={"field middle-right"}>6</div>

		<div id="field7" onClick={this.buttonClicked} className={"field bottom-left"}>7</div>
		<div id="field8" onClick={this.buttonClicked} className={"field bottom-center"}>8</div>
		<div id="field9" onClick={this.buttonClicked} className={"field bottom-right"}>9</div>
	</div>

    )
  }
}


/*
var  images ={
	empty: "",
	x: "x",
	y: "y"
}

var field1 = {
	blocked: false,
	id: 1,
	status: "x"
};

var field2 = {
	blocked: false,
	id: 1,
	status:  "x"
};

var field3 = {
	blocked: false,
	id: 1,
	status: "x"
};


var notifications =  {
	p1won : "Player 1 won! Congratulations",
	p2won : "Player 2 won! Congratulations",
	drawn : "Drawn game"
}

// who wins  - form top left to top right
if(field1.status && field2.status && field3.status == "x")  {
	alert(notifications.p1won)
}  else if (field1.status  &&  field2.status && field3.status == "o") {
	alert(notifications.p2won)
}

console.log(ticTac.player1)
// who wins  - from middle left to middle right
/*if(field4.status == "x" &&  field5.status == "x" && field6.status == "x")  {
	alert(notifications.p1won)
}  else if (field6.status == "o" &&  field6.status == "o" && field6.status == "o") {
	alert(notifications.p2won)
}*/	