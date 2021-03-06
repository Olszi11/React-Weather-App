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
                                { to: '/about/us' },
                                'About Us'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/about/company' },
                                'About Company'
                            )
                        )
                    ),
                    this.props.children
                );
            }
        }]);

        return Template;
    }(_react2.default.Component);

    var TemplateAbout = function (_React$Component2) {
        _inherits(TemplateAbout, _React$Component2);

        function TemplateAbout() {
            _classCallCheck(this, TemplateAbout);

            return _possibleConstructorReturn(this, (TemplateAbout.__proto__ || Object.getPrototypeOf(TemplateAbout)).apply(this, arguments));
        }

        _createClass(TemplateAbout, [{
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
                                { to: '/about/us' },
                                'About Us'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/about/company' },
                                'About Company'
                            )
                        )
                    ),
                    this.props.children
                );
            }
        }]);

        return TemplateAbout;
    }(_react2.default.Component);

    var Main = function (_React$Component3) {
        _inherits(Main, _React$Component3);

        function Main() {
            _classCallCheck(this, Main);

            return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
        }

        _createClass(Main, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    'h1',
                    null,
                    'Witaj na stronie!'
                );
            }
        }]);

        return Main;
    }(_react2.default.Component);

    var AboutUs = function (_React$Component4) {
        _inherits(AboutUs, _React$Component4);

        function AboutUs() {
            _classCallCheck(this, AboutUs);

            return _possibleConstructorReturn(this, (AboutUs.__proto__ || Object.getPrototypeOf(AboutUs)).apply(this, arguments));
        }

        _createClass(AboutUs, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    'p',
                    null,
                    'Troch\u0119 wi\u0119cej o nas ... '
                );
            }
        }]);

        return AboutUs;
    }(_react2.default.Component);

    var AboutCompany = function (_React$Component5) {
        _inherits(AboutCompany, _React$Component5);

        function AboutCompany() {
            _classCallCheck(this, AboutCompany);

            return _possibleConstructorReturn(this, (AboutCompany.__proto__ || Object.getPrototypeOf(AboutCompany)).apply(this, arguments));
        }

        _createClass(AboutCompany, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    'p',
                    null,
                    'Troch\u0119 wi\u0119cej o firmie ... '
                );
            }
        }]);

        return AboutCompany;
    }(_react2.default.Component);

    var Contact = function (_React$Component6) {
        _inherits(Contact, _React$Component6);

        function Contact() {
            _classCallCheck(this, Contact);

            return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
        }

        _createClass(Contact, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    'h1',
                    null,
                    'Contact us at contact@example.com'
                );
            }
        }]);

        return Contact;
    }(_react2.default.Component);

    var NotFound = function (_React$Component7) {
        _inherits(NotFound, _React$Component7);

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

    var App = function (_React$Component8) {
        _inherits(App, _React$Component8);

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
                            _react2.default.createElement(_reactRouter.Route, { path: '/contact', component: Contact }),
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