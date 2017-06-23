import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className={'field-container'}>
		<div className={"field top-left"}></div>
		<div className={"field top-center"}></div>
		<div className={"field top-right"}></div>

		<div className={"field middle-left"}></div>
		<div className={"field middle-center"}></div>
		<div className={"field middle-right"}></div>

		<div className={"field bottom-left"}></div>
		<div className={"field bottom-center"}></div>
		<div className={"field bottom-right"}></div>
	</div>
    )
  }
}
