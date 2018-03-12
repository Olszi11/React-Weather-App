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

document.addEventListener('DOMContentLoaded', function () {
    var Template = function (_React$Component) {
        _inherits(Template, _React$Component);

        function Template() {
            _classCallCheck(this, Template);

            return _possibleConstructorReturn(this, (Template.__proto__ || Object.getPrototypeOf(Template)).apply(this, arguments));
        }

        _createClass(Template, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Zadanie 0-Aplikacja React z React Router'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/' },
                                'Home'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/blog' },
                                'Blog'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/pricing' },
                                'Cennik'
                            )
                        )
                    ),
                    this.props.children
                );
            }
        }]);

        return Template;
    }(_react2.default.Component);

    var Main = function (_React$Component2) {
        _inherits(Main, _React$Component2);

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

    var Blog = function (_React$Component3) {
        _inherits(Blog, _React$Component3);

        function Blog() {
            _classCallCheck(this, Blog);

            return _possibleConstructorReturn(this, (Blog.__proto__ || Object.getPrototypeOf(Blog)).apply(this, arguments));
        }

        _createClass(Blog, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    'h1',
                    null,
                    'Blog '
                );
            }
        }]);

        return Blog;
    }(_react2.default.Component);

    var Pricing = function (_React$Component4) {
        _inherits(Pricing, _React$Component4);

        function Pricing() {
            _classCallCheck(this, Pricing);

            return _possibleConstructorReturn(this, (Pricing.__proto__ || Object.getPrototypeOf(Pricing)).apply(this, arguments));
        }

        _createClass(Pricing, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    'h1',
                    null,
                    'Cennik '
                );
            }
        }]);

        return Pricing;
    }(_react2.default.Component);

    var NotFound = function (_React$Component5) {
        _inherits(NotFound, _React$Component5);

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

    var App = function (_React$Component6) {
        _inherits(App, _React$Component6);

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
                        _react2.default.createElement(
                            _reactRouter.Route,
                            { path: '/', component: Template },
                            _react2.default.createElement(_reactRouter.IndexRoute, { component: Main }),
                            _react2.default.createElement(_reactRouter.Route, { path: '/about/us', component: Blog }),
                            _react2.default.createElement(_reactRouter.Route, { path: '/about/company', component: Priging }),
                            _react2.default.createElement(_reactRouter.Route, { path: '*', component: NotFound })
                        )
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