webpackHotUpdate(0,{

/***/ "./js/app.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__("./node_modules/react-router/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import React from 'react';
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

document.addEventListener('DOMContentLoaded', function () {
	var Main = function (_React$Component) {
		_inherits(Main, _React$Component);

		function Main() {
			_classCallCheck(this, Main);

			return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
		}

		_createClass(Main, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h1',
						null,
						'Witaj na stronie!'
					)
				);
			}
		}]);

		return Main;
	}(_react2.default.Component);

	var HelloYou = function (_React$Component2) {
		_inherits(HelloYou, _React$Component2);

		function HelloYou() {
			_classCallCheck(this, HelloYou);

			return _possibleConstructorReturn(this, (HelloYou.__proto__ || Object.getPrototypeOf(HelloYou)).apply(this, arguments));
		}

		_createClass(HelloYou, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'h1',
					null,
					'Witaj, ',
					this.props.params.userName
				);
			}
		}]);

		return HelloYou;
	}(_react2.default.Component);

	var CheckAge = function (_React$Component3) {
		_inherits(CheckAge, _React$Component3);

		function CheckAge() {
			_classCallCheck(this, CheckAge);

			return _possibleConstructorReturn(this, (CheckAge.__proto__ || Object.getPrototypeOf(CheckAge)).apply(this, arguments));
		}

		_createClass(CheckAge, [{
			key: 'render',
			value: function render() {
				var age = this.props.params.age;
				return this.props.params.age > 18 ? _react2.default.createElement(
					'h1',
					null,
					'Pe\u0142noletni'
				) : _react2.default.createElement(
					'h1',
					null,
					'Niepe\u0142noletni'
				);
			}
		}]);

		return CheckAge;
	}(_react2.default.Component);

	var NotFound = function (_React$Component4) {
		_inherits(NotFound, _React$Component4);

		function NotFound() {
			_classCallCheck(this, NotFound);

			return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
		}

		_createClass(NotFound, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'h1',
					null,
					'404, Nothing is here'
				);
			}
		}]);

		return NotFound;
	}(_react2.default.Component);

	var App = function (_React$Component5) {
		_inherits(App, _React$Component5);

		function App() {
			_classCallCheck(this, App);

			return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
		}

		_createClass(App, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						_reactRouter.Router,
						{ history: _reactRouter.hashHistory },
						_react2.default.createElement(_reactRouter.Route, { path: '/', component: Main }),
						_react2.default.createElement(_reactRouter.Route, { path: '/hello/:userName', component: HelloYou }),
						_react2.default.createElement(_reactRouter.Route, { path: '/checkage/:age', component: CheckAge }),
						_react2.default.createElement(_reactRouter.Route, { path: '*', component: NotFound })
					)
				);
			}
		}]);

		return App;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));
});

/***/ })

})