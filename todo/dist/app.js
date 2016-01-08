webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _todo = __webpack_require__(159);

	var _todo2 = _interopRequireDefault(_todo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(_todo2.default, null), document.querySelector('#app'));

/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(3);


/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reflux = __webpack_require__(160);

	var _reflux2 = _interopRequireDefault(_reflux);

	var _reactMixin = __webpack_require__(179);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _store = __webpack_require__(182);

	var _store2 = _interopRequireDefault(_store);

	var _actions = __webpack_require__(183);

	var _actions2 = _interopRequireDefault(_actions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Todo = function (_React$Component) {
	  _inherits(Todo, _React$Component);

	  function Todo() {
	    _classCallCheck(this, Todo);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Todo).apply(this, arguments));
	  }

	  _createClass(Todo, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _actions2.default.getAll();
	    }
	  }, {
	    key: 'add',
	    value: function add() {
	      var item = this.refs.item.value;
	      this.refs.item.value = '';
	      _actions2.default.add(item);
	    }
	  }, {
	    key: 'remove',
	    value: function remove(i) {
	      _actions2.default.remove(i);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var items = undefined;
	      if (this.state.list) {
	        items = this.state.list.map(function (item, i) {
	          return _react2.default.createElement(
	            'li',
	            { key: i },
	            item.name,
	            _react2.default.createElement(
	              'button',
	              { onClick: _this2.remove.bind(_this2, i) },
	              'remove'
	            )
	          );
	        });
	      }
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('input', { type: 'text', ref: 'item' }),
	        _react2.default.createElement(
	          'button',
	          { onClick: this.add.bind(this) },
	          'add'
	        ),
	        _react2.default.createElement(
	          'ul',
	          null,
	          items
	        )
	      );
	    }
	  }]);

	  return Todo;
	}(_react2.default.Component);

	// ES6 mixin写法

	exports.default = Todo;
	_reactMixin2.default.onClass(Todo, _reflux2.default.connect(_store2.default));

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reflux = __webpack_require__(160);

	var _reflux2 = _interopRequireDefault(_reflux);

	var _actions = __webpack_require__(183);

	var _actions2 = _interopRequireDefault(_actions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Array.prototype.remove = function (dx) {
	    if (isNaN(dx) || dx > this.length) {
	        return false;
	    }
	    for (var i = 0, n = 0; i < this.length; i++) {
	        if (this[i] != this[dx]) {
	            this[n++] = this[i];
	        }
	    }
	    this.length -= 1;
	};

	exports.default = _reflux2.default.createStore({
	    items: [],
	    listenables: [_actions2.default],
	    onGetAll: function onGetAll() {
	        this.trigger({ list: this.items });
	    },
	    onAdd: function onAdd(item) {
	        this.items.push({ name: item });
	        this.trigger({ list: this.items });
	    },
	    onRemove: function onRemove(i) {
	        this.items.remove(i);
	        this.trigger({ list: this.items });
	    }
	});

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reflux = __webpack_require__(160);

	var _reflux2 = _interopRequireDefault(_reflux);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _reflux2.default.createActions(['getAll', 'add', 'remove']);

/***/ }

});