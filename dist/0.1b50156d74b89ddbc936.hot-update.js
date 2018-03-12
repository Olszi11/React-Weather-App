webpackHotUpdate(0,{

/***/ "./js/app.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {
//   Router,
//   Route,
//   Link,
//   IndexLink,
//   IndexRoute,
//   hashHistory,
//   browserHistory,
// } from 'react-router';

// document.addEventListener('DOMContentLoaded', function() {

// 	// const activeStyle={
// 	// 	backgroundColor:'green'
//  //  	}
//   	//mozna uzyc activClassName

//   class Template extends React.Component {

//     render() {
//         return (
//         	<div>
// 	            <h1>App</h1>
// 	            <ul>
// 	                <li>
// 	                    <Link to="/" >Home</Link>
// 	                </li>
// 	                <li>
// 	                    <Link to="/contact" >Contact</Link>
// 	                </li>
// 	            </ul>
// 	            {this.props.children}
//         	</div>)
//     }
// }


// class Main extends React.Component {
//     render() {
//         return <h1>Hello, World!</h1>
//     }
// }

// class Contact extends React.Component {
//     render() {
//         return <h1>Contact us at
//             contact@example.com</h1>
//     }
// }

// class NotFound extends React.Component {
//     render() {
//         return <h1>404,
//             Nothing is here</h1>
//     }
// }

// class App extends React.Component {
//     render() {
//         return (
//         	<div>
//         	  <Router history={hashHistory}>
// 	            <Route path='/' component={Template}>
// 	                <IndexRoute component={Main} />
// 	                <Route path='/contact' component={Contact} />
// 	                <Route path='*' component={NotFound} />

// 	            </Route>
//         	  </Router>	

//         	</div>

//         	)


//     }
// }

// ReactDOM.render(<App />, document.getElementById('app'))

// });


//zadanie 0

// import React from 'react';
// import ReactDOM from 'react-dom';
// import {
//   Router,
//   Route,
//   Link,
//   IndexLink,
//   IndexRoute,
//   hashHistory,
//   browserHistory,
// } from 'react-router';

// document.addEventListener('DOMContentLoaded', function() {

//   class Template extends React.Component {

//     render() {
//         return (
//         	<div>
// 	            <h1>Zadanie 0-Aplikacja React z React Router</h1>
// 	            <ul>
// 	                <li>
// 	                    <Link to="/" >Home</Link>
// 	                </li>
// 	                <li>
// 	                    <Link to="/about" >About</Link>
// 	                </li>


// 	            </ul>
// 	            {this.props.children}
//         	</div>)
//     }
// }

// class TemplateAbout extends React.Component {

//     render() {
//         return (
//         	<div>
// 	            <h2>O nas</h2>
// 	            <ul>
// 	              <li>
// 	                    <Link to="/about/us" >About Us</Link>
// 	                </li>
// 	                <li>
// 	                    <Link to="/about/company" >About Company</Link>
// 	                </li>
// 	            </ul>

// 	            {this.props.children}
//         	</div>)
//     }
// }


// class Main extends React.Component {
//     render() {
//         return (
//         	<div>
//         	<h1>Witaj na stronie!</h1>

//         	</div>
//         	)
//     }
// }


// class AboutUs extends React.Component{
// 	render(){
// 		return(
// 			<p>Trochę więcej o nas ... </p>
// 			)
// 	}
// }


// class AboutCompany extends React.Component{
// 	render(){
// 		return(
// 			<p>Trochę więcej o firmie ... </p>
// 			)
// 	}
// }


// class NotFound extends React.Component {
//     render() {
//         return <h1>404,
//             Nothing is here</h1>
//     }
// }

// class App extends React.Component {
//     render() {
//         return (
//         	<div>
//         	  <Router history={hashHistory}>
// 	            <Route path='/' component={Template}>
// 	                <IndexRoute component={Main} />
// 	                	<Route path='/about' component={TemplateAbout}>
// 	                		<Route path='/about/us' component={AboutUs} />
// 	                		<Route path='/about/company' component={AboutCompany} />
// 	                	</Route>
// 	                <Route path='*' component={NotFound} />

// 	            </Route>
//         	  </Router>	

//         	</div>

//         	)


//     }
// }

// ReactDOM.render(<App />, document.getElementById('app'))

// });


//zadanie 1

// import React from 'react';
// import ReactDOM from 'react-dom';
// import {
//   Router,
//   Route,
//   Link,
//   IndexLink,
//   IndexRoute,
//   hashHistory,
//   browserHistory,
// } from 'react-router';

// document.addEventListener('DOMContentLoaded', function() {

//   class Template extends React.Component {

//     render() {
//         return (
//         	<div>
// 	            <h1>Zadanie 0-Aplikacja React z React Router</h1>
// 	            <ul>
// 	                <li>
// 	                    <Link to="/" >Home</Link>
// 	                </li>
// 	                <li>
// 	                    <Link to="/blog" >Blog</Link>
// 	                </li>
// 	                <li>
// 	                    <Link to="/pricing" >Cennik</Link>
// 	                </li>


// 	            </ul>
// 	            {this.props.children}
//         	</div>)
//     }
// }


// class Main extends React.Component {
//     render() {
//         return (
//         	<div>
//         	<h1>Witaj na stronie!</h1>

//         	</div>
//         	)
//     }
// }


// class Blog extends React.Component{
// 	render(){
// 		return(
// 			<h1>Blog </h1>
// 			)
// 	}
// }


// class Pricing extends React.Component{
// 	render(){
// 		return(
// 			<h1>Cennik </h1>
// 			)
// 	}
// }


// class NotFound extends React.Component {
//     render() {
//         return <h1>404,
//             Nothing is here</h1>
//     }
// }

// class App extends React.Component {
//     render() {
//         return (
//         	<div>
//         	  <Router history={hashHistory}>
// 	            <Route path='/' component={Template}>
// 	                <IndexRoute component={Main} />
// 	                <Route path='/blog' component={Blog} />
// 	                <Route path='/pricing' component={Pricing} />
// 	                <Route path='*' component={NotFound} />

// 	            </Route>
//         	  </Router>	

//         	</div>

//         	)


//     }
// }

// ReactDOM.render(<App />, document.getElementById('app'))

// });


//ZAAWANSOWANY ROUTING
//zadanie 0


/***/ })

})