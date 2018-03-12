import React from 'react';
import countries from './countries.jsx'


class Form extends React.Component{
	constructor(props){
		super(props);

		this.state={
			list:[]
		}
	}

	componentDidMount(){
		let list=this.state.list.splice();

		for(let i=0; i<countries.length; i++)
		{
			list[i]=countries[i].alpha
		}

		this.setState({
			list: list
		})

	}



	render(){
		
		return(
			<div>
				<h3 className='form-title'>Enter city or city and country name</h3> 
				<form onSubmit={this.props.weather}>
					<label>City: </label>
					<input type='text' name='city'/>
					<label>Country: </label>
					
					<select name="country"> {this.state.list.map((element)=>
						<option key={element} value={element}>{element}</option>
						)}
					</select>
					<button>Get Weather</button>
				</form>
			</div>
			)
	}
}


export default Form


