import React from 'react';

class Calculator extends React.Component {
	constructor(){
		super();
		this.state = {num1 : 0 ,num2 :0 };
	}
		 getval(){
    return "getVal";
    }
	setAge(e){
		const num1 = e.target.value;
		this.setState({num1: num1});
	}
	setage(a){
		const num2 = a.target.value;
		this.setState({num2: num2});
	}
	
	
	render() {
		
		return (
			<div>
				<div>My Number = {this.state.num1} </div>
				<div>My Number = {this.state.num2} </div>
				<div>My Sum = {this.state.num1 + this.state.num2} </div>
				<div><input onChange ={this.setAge.bind(this)} /></div>
				<div><input onChange ={this.setage.bind(this)} /></div>
			</div>
		);
	}
}

export default Calculator;