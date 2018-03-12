import React from 'react';

import Titles from './components/Titles.jsx';
import Form from './components/Form.jsx';
import Weather from './components/Weather.jsx';


const API_KEY = "7d2c32f695f0b6b68626d74c96df2ce5";

class Main extends React.Component {

    constructor(props){
        super(props);

        this.state={
            temperature: undefined,
            city: undefined,
            country: undefined,
            time: undefined,
            humidity: undefined,
            desctription: undefined,
            error: undefined
        }
    }
   

    getWeather = (e) =>{
      e.preventDefault();

      const city = e.target.city.value;
      const country = e.target.country.value;
      

      if(city.length>0 && country.length==0)
      {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then((response)=> {
          const data = response.json();
          return data
      })
        .then((data)=> {
            this.setState({
              temperature: data.main.temp,
              city: data.name,
              country: data.sys.country,
              time: data.dt,
              humidity: data.main.humidity,
              description: data.weather[0].description,
              error: ''
            })
      }).catch(err=>{
        this.setState({
              temperature: undefined,
              city: undefined,
              country: undefined,
              time: undefined,
              humidity: undefined,
              description: undefined,
              error: 'Something goes wrong. Check form fields.'
        }) 
      });

      }


      else if(city.length>0 && country.length>0)
      {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
        .then((response)=> {
          const data = response.json();
          return data
      })
        .then((data)=> {
            this.setState({
              temperature: data.main.temp,
              city: data.name,
              country: data.sys.country,
              time: data.dt,
              humidity: data.main.humidity,
              description: data.weather[0].description,
              error: ''
            })
        }).catch(err=>{
        this.setState({
              temperature: undefined,
              city: undefined,
              country: undefined,
              time: undefined,
              humidity: undefined,
              description: undefined,
              error: 'Something goes wrong. Check form fields.'
        }) 
      })
      }else{
        this.setState({
              temperature: undefined,
              city: undefined,
              country: undefined,
              time: undefined,
              humidity: undefined,
              description: undefined,
              error: 'Please enter correct value'
          })
      }
    }




    render(){
    	return (
    		      <div>
                <div className="wrapper">
                    <div className="main">
                        <div className='title-container'>
                          <Titles/>
                        </div>
                        <div className='form-container'>
                          <Form weather={this.getWeather}/>
                          <Weather 
                            temperature={this.state.temperature} 
                            city={this.state.city}
                            country={this.state.country}
                            time={this.state.time}
                            humidity={this.state.humidity}
                            description={this.state.description}
                            error={this.state.error}
                            />
                        </div>
                      </div>
                    </div>       
    		          </div>
    		      );
          }       
}






class App extends React.Component{
	render(){
		return(
			<Main/>
			)
	}
}





export default App;

