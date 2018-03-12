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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
          'h1',
          null,
          'Hellodasdsafsfsafasdolszi189201, World!'
        );
      }
    }]);

    return Main;
  }(_react2.default.Component);

  var Contact = function (_React$Component2) {
    _inherits(Contact, _React$Component2);

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

  var App = function (_React$Component3) {
    _inherits(App, _React$Component3);

    function App() {
      _classCallCheck(this, App);

      return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Main, null);
      }
    }]);

    return App;
  }(_react2.default.Component);

  // class App extends React.Component {
  // 	render() {
  // 		return( 
  // 		<div>
  // 			<Router history={hashHistory}>
  // 				<Route path='/' component={Main} />
  // 				<Route path='/contact' component={Contact} />
  // 			</Router>;
  // 		</div>
  // 		)
  // }
  // }
  // const activeStyle={
  // 	backgroundColor:'green'
  //  	}
  //mozna uzyc activClassName

  //   class Template extends React.Component {

  //     render() {
  //         return (
  //         	<div>
  // 	            <h1>App</h1>
  // 	            <ul>
  // 	                <li>
  // 	                    <IndexLink to="/" activeStyle={activeStyle}>Home</IndexLink>
  // 	                </li>
  // 	                <li>
  // 	                    <IndexLink to="/contact" activeStyle={activeStyle}>Contact</IndexLink>
  // 	                </li>
  // 	            </ul>
  // 	            {this.props.children}
  //         	</div>)
  //     }
  // }


  // class UserInfo extends React.Component {
  // 	render() {
  // 		return <h1>
  // 			Info about User with ID:
  // 				{this.props.params.userId}
  // 			</h1>;
  // 		}
  // 	}

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
  // 	                <Route path='/user/:userId' component={UserInfo} />
  // 	            </Route>
  //         	  </Router>	
  //         	  <UserInfo params={'gown'}/>
  //         	</div>

  //         	)


  //     }
  // }


  _reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));
});

/***/ })

})