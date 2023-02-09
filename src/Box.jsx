import React, { Component } from 'react'
import { choice } from './Helpers.jsx'
import './Box.css'

class Box extends Component {

	constructor(props){
		super(props)
		this.state = {
			color: choice(this.props.colors),
		}
		this.handleClick = this.handleClick.bind(this)
	}
	pickColor(){
		let newColor;
		do {
			newColor = choice(this.props.colors)
		} while(newColor === this.props.color)
		this.setState({ color : newColor })
	}

	handleClick(){
		this.pickColor()
	}
	
  render() {
	return (
	  <div className='Box' style={{backgroundColor: this.state.color }} onClick={this.handleClick}  >
		🖱️ Click Here!
		<br/> Change Color
		{/* <h1> Box </h1> */}
	  </div>
	)
  }
}

export default Box




// import React, {Component} from 'react'

// function Box() {
//   return (
// 	<div>
	  
// 	</div>
//   )
// }

// export default Box
