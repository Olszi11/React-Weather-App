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
				var activeStyle = { backgroundColor: 'green' };
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h1',
						null,
						'Witaj na stronie!'
					),
					_react2.default.createElement(
						'h2',
						null,
						'Zadanie 2-Aplikacja React z React Router'
					),
					_react2.default.createElement(
						'ul',
						null,
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouter.IndexLink,
								{ to: '/', activeStyle: activeStyle },
								'Home'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouter.IndexLink,
								{ to: '/services/www', activeStyle: activeStyle },
								'Serwis www'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouter.IndexLink,
								{ to: '/services/shop', activeStyle: activeStyle },
								'Serwis shop'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouter.IndexLink,
								{ to: '/services/seo', activeStyle: activeStyle },
								'Serwis seo'
							)
						)
					)
				);
			}
		}]);

		return Main;
	}(_react2.default.Component);

	var ServiceInfo = function (_React$Component2) {
		_inherits(ServiceInfo, _React$Component2);

		function ServiceInfo() {
			_classCallCheck(this, ServiceInfo);

			return _possibleConstructorReturn(this, (ServiceInfo.__proto__ || Object.getPrototypeOf(ServiceInfo)).apply(this, arguments));
		}

		_createClass(ServiceInfo, [{
			key: 'render',
			value: function render() {
				var activeStyle = { backgroundColor: 'green' };

				if (this.props.params.service == 'www' || this.props.params.service == 'shop' || this.props.params.service == 'seo') {

					return _react2.default.createElement(
						'h1',
						null,
						'Proponujemy usulge ',
						this.props.params.service
					);
				} else {
					return _react2.default.createElement(
						_reactRouter.IndexLink,
						{ to: '/', activeStyle: activeStyle },
						'Home'
					);
				}
			}
		}]);

		return ServiceInfo;
	}(_react2.default.Component);

	var NotFound = function (_React$Component3) {
		_inherits(NotFound, _React$Component3);

		function NotFound() {
			_classCallCheck(this, NotFound);

			return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
		}

		_createClass(NotFound, [{
			key: 'render',
			value: function render() {
				var activeStyle = { backgroundColor: 'green' };
				return _react2.default.createElement(
					_reactRouter.IndexLink,
					{ to: '/', activeStyle: activeStyle },
					'Home'
				);
			}
		}]);

		return NotFound;
	}(_react2.default.Component);

	var App = function (_React$Component4) {
		_inherits(App, _React$Component4);

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
						_react2.default.createElement(_reactRouter.Route, { path: '/services/:service', component: ServiceInfo }),
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