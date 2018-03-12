import React from 'react';


class Weather extends React.Component{



	timeConverter=(UNIX_timestamp)=>{
	  let a = new Date(UNIX_timestamp * 1000);
	  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	  let year = a.getFullYear();
	  let month = months[a.getMonth()];
	  let date = a.getDate();
	  let hour = a.getHours();
	  let min = a.getMinutes();
	  let minString = min.toString();
	
	  if(minString.length==1)
	  {
	  	min=min+'0'
	  }else{
	  	min=min
	  }

	  let sec = a.getSeconds();
	  let time = date + ' ' + month + ' ' + year + ' ' + ' ' + hour + ':' + min;
	  return time;
	}

	render(){


		
		
		return(
			
		

			<div className='weather__info'>
				{
					this.props.city && this.props.country && 
					<p className='weather__key'>Location: <span className='weather__value'>{this.props.city} {this.props.country}</span></p>
				}
				{
					this.props.city && 
					<p className='weather__key'>Measurement time: <span className='weather__value'> {this.timeConverter(this.props.time)}</span></p>
				}

				{
					this.props.city && 
					<p className='weather__key'>Temperature: <span className='weather__value'> {this.props.temperature}&deg;C</span></p>
				}

				{
					this.props.city && 
					<p className='weather__key'>Humidity: <span className='weather__value'> {this.props.humidity}%</span></p>
				}

				{
					this.props.city && 
					<p className='weather__key'>Condition: <span className='weather__value'> {this.props.description}</span></p>
				}

				{
					this.props.error && 
					<div className='weather__error'>Error: {this.props.error}</div>
				}
			</div>

			)
	}
}


export default Weather