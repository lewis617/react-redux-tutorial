webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _App = __webpack_require__(159);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.querySelector('#app'));

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

	var _AddTodo = __webpack_require__(160);

	var _AddTodo2 = _interopRequireDefault(_AddTodo);

	var _TodoList = __webpack_require__(161);

	var _TodoList2 = _interopRequireDefault(_TodoList);

	var _Footer = __webpack_require__(163);

	var _Footer2 = _interopRequireDefault(_Footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_AddTodo2.default, {
	          onAddClick: function onAddClick(text) {
	            return console.log('add todo', text);
	          } }),
	        _react2.default.createElement(_TodoList2.default, {
	          todos: [{
	            text: 'Use Redux',
	            completed: true
	          }, {
	            text: 'Learn to connect it to React',
	            completed: false
	          }],
	          onTodoClick: function onTodoClick(todo) {
	            return console.log('todo clicked', todo);
	          } }),
	        _react2.default.createElement(_Footer2.default, {
	          filter: 'SHOW_ALL',
	          onFilterChange: function onFilterChange(filter) {
	            return console.log('filter change', filter);
	          } })
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	exports.default = App;

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AddTodo = function (_Component) {
	  _inherits(AddTodo, _Component);

	  function AddTodo() {
	    _classCallCheck(this, AddTodo);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(AddTodo).apply(this, arguments));
	  }

	  _createClass(AddTodo, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('input', { type: 'text', ref: 'input' }),
	        _react2.default.createElement(
	          'button',
	          { onClick: function onClick(e) {
	              return _this2.handleClick(e);
	            } },
	          'Add'
	        )
	      );
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(e) {
	      var node = _reactDom2.default.findDOMNode(this.refs.input);
	      var text = node.value.trim();
	      this.props.onAddClick(text);
	      node.value = '';
	    }
	  }]);

	  return AddTodo;
	}(_react.Component);

	exports.default = AddTodo;

	AddTodo.propTypes = {
	  onAddClick: _react.PropTypes.func.isRequired
	};

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Todo = __webpack_require__(162);

	var _Todo2 = _interopRequireDefault(_Todo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TodoList = function (_Component) {
	  _inherits(TodoList, _Component);

	  function TodoList() {
	    _classCallCheck(this, TodoList);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TodoList).apply(this, arguments));
	  }

	  _createClass(TodoList, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'ul',
	        null,
	        this.props.todos.map(function (todo, index) {
	          return _react2.default.createElement(_Todo2.default, _extends({}, todo, {
	            key: index,
	            onClick: function onClick() {
	              return _this2.props.onTodoClick(index);
	            } }));
	        })
	      );
	    }
	  }]);

	  return TodoList;
	}(_react.Component);

	exports.default = TodoList;

	TodoList.propTypes = {
	  onTodoClick: _react.PropTypes.func.isRequired,
	  todos: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    text: _react.PropTypes.string.isRequired,
	    completed: _react.PropTypes.bool.isRequired
	  }).isRequired).isRequired
	};

/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Todo = function (_Component) {
	  _inherits(Todo, _Component);

	  function Todo() {
	    _classCallCheck(this, Todo);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Todo).apply(this, arguments));
	  }

	  _createClass(Todo, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'li',
	        {
	          onClick: this.props.onClick,
	          style: {
	            textDecoration: this.props.completed ? 'line-through' : 'none',
	            cursor: this.props.completed ? 'default' : 'pointer'
	          } },
	        this.props.text
	      );
	    }
	  }]);

	  return Todo;
	}(_react.Component);

	exports.default = Todo;

	Todo.propTypes = {
	  onClick: _react.PropTypes.func.isRequired,
	  text: _react.PropTypes.string.isRequired,
	  completed: _react.PropTypes.bool.isRequired
	};

/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Footer = function (_Component) {
	  _inherits(Footer, _Component);

	  function Footer() {
	    _classCallCheck(this, Footer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).apply(this, arguments));
	  }

	  _createClass(Footer, [{
	    key: 'renderFilter',
	    value: function renderFilter(filter, name) {
	      var _this2 = this;

	      if (filter === this.props.filter) {
	        return name;
	      }

	      return _react2.default.createElement(
	        'a',
	        { href: '#', onClick: function onClick(e) {
	            e.preventDefault();
	            _this2.props.onFilterChange(filter);
	          } },
	        name
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'p',
	        null,
	        'Show:',
	        ' ',
	        this.renderFilter('SHOW_ALL', 'All'),
	        ', ',
	        this.renderFilter('SHOW_COMPLETED', 'Completed'),
	        ', ',
	        this.renderFilter('SHOW_ACTIVE', 'Active'),
	        '.'
	      );
	    }
	  }]);

	  return Footer;
	}(_react.Component);

	exports.default = Footer;

	Footer.propTypes = {
	  onFilterChange: _react.PropTypes.func.isRequired,
	  filter: _react.PropTypes.oneOf(['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE']).isRequired
	};

/***/ }

});