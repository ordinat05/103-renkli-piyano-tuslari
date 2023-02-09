import React, { Component } from "react";
import Box from './Box.jsx'
import './BoxContainer.css'

class BoxContainer extends Component {
	static defaultProps = {
		numBoxes: 30,
		allColors: [
			"purple",
			"magenta",
			"lilac",
			"pink",
			"green",
			"blue",
			"orange",
			"brown",
			"violet"
		]
	}
	render() {
		const boxes = Array.from({ length: this.props.numBoxes }).map((todo, index) => (<Box key={index} colors={this.props.allColors} />))
		return (
			<div className="BoxContainer"> {boxes} </div>
		)
	}
}

export default BoxContainer