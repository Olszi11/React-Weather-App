webpackHotUpdate(0,{

/***/ "./js/main.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Titles = __webpack_require__("./js/components/Titles.jsx");

var _Titles2 = _interopRequireDefault(_Titles);

var _Form = __webpack_require__("./js/components/Form.jsx");

var _Form2 = _interopRequireDefault(_Form);

var _Weather = __webpack_require__("./js/components/Weather.jsx");

var _Weather2 = _interopRequireDefault(_Weather);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var API_KEY = "7d2c32f695f0b6b68626d74c96df2ce5";

var Main = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main(props) {
        _classCallCheck(this, Main);

        var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

        _this.getWeather = async function (e) {
            e.preventDefault();

            var city = e.target.elements.name.city.value;
            var country = e.target.elements.name.country.value;
            var api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&appid=' + API_KEY + '&unitc=metric');
            var data = await api_call.json();
        };

        return _this;
    }

    _createClass(Main, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Titles2.default, null),
                _react2.default.createElement(_Form2.default, { weather: this.getWeather }),
                _react2.default.createElement(_Weather2.default, null)
            );
        }
    }]);

    return Main;
}(_react2.default.Component);

var App = function (_React$Component2) {
    _inherits(App, _React$Component2);

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

exports.default = App;

/***/ })

})