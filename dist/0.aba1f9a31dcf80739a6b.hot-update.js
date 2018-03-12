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

    var activeStyle = {
        backgroundColor: 'green'
        //mozna uzyc activClassName

    };
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
                        'App'
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
                                { to: '/contact', activeStyle: activeStyle },
                                'Contact'
                            )
                        )
                    ),
                    this.props.children
                );
            }
        }]);

        return Template;
    }(_react2.default.Component);

    var UserInfo = function (_React$Component2) {
        _inherits(UserInfo, _React$Component2);

        function UserInfo() {
            _classCallCheck(this, UserInfo);

            return _possibleConstructorReturn(this, (UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).apply(this, arguments));
        }

        _createClass(UserInfo, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    'h1',
                    null,
                    'Info about User with ID:',
                    this.props.params.userId
                );
            }
        }]);

        return UserInfo;
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
                    'Hello, World!'
                );
            }
        }]);

        return Main;
    }(_react2.default.Component);

    var Contact = function (_React$Component4) {
        _inherits(Contact, _React$Component4);

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
                            _react2.default.createElement(_reactRouter.Route, { path: '/contact', component: Contact }),
                            _react2.default.createElement(_reactRouter.Route, { path: '*', component: NotFound }),
                            _react2.default.createElement(_reactRouter.Route, { path: '/user/:userId', component: UserInfo })
                        )
                    ),
                    _react2.default.createElement(UserInfo, { params: 'gown' })
                );
            }
        }]);

        return App;
    }(_react2.default.Component);

    _reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));
});

/***/ })

})