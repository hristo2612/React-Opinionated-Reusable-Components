'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Input = require('@material-ui/core/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Clear = require('@material-ui/icons/Clear');

var _Clear2 = _interopRequireDefault(_Clear);

var _Search = require('@material-ui/icons/Search');

var _Search2 = _interopRequireDefault(_Search);

var _colors = require('@material-ui/core/colors');

var _withStyles = require('@material-ui/core/styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: {
    height: 48,
    display: 'flex',
    justifyContent: 'space-between'
  },
  iconButton: {
    opacity: 0.54,
    transform: 'scale(1, 1)',
    transition: 'transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
  },
  iconButtonHidden: {
    transform: 'scale(0, 0)',
    '& > $icon': {
      opacity: 0
    }
  },
  iconButtonDisabled: {
    opacity: 0.38
  },
  searchIconButton: {
    marginRight: -48
  },
  icon: {
    opacity: 0.54,
    transition: 'opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
  },
  input: {
    width: '100%'
  },
  searchContainer: {
    margin: 'auto 16px',
    width: '100%'
  }

  /**
   * Material design search bar
   * @see [Search patterns](https://material.io/guidelines/patterns/search.html)
   */
};
var SearchBar = function (_Component) {
  _inherits(SearchBar, _Component);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

    _this.handleFocus = function (e) {
      _this.setState({ focus: true });
      if (_this.props.onFocus) {
        _this.props.onFocus(e);
      }
    };

    _this.handleBlur = function (e) {
      _this.setState({ focus: false });
      if (_this.state.value.trim().length === 0) {
        _this.setState({ value: '' });
      }
      if (_this.props.onBlur) {
        _this.props.onBlur(e);
      }
    };

    _this.handleInput = function (e) {
      _this.setState({ value: e.target.value });
      if (_this.props.onChange) {
        _this.props.onChange(e.target.value);
      }
    };

    _this.handleCancel = function () {
      _this.setState({ active: false, value: '' });
      if (_this.props.onCancelSearch) {
        _this.props.onCancelSearch();
      }
    };

    _this.handleKeyUp = function (e) {
      if (_this.props.onRequestSearch && (e.charCode === 13 || e.key === 'Enter')) {
        _this.props.onRequestSearch(_this.state.value);
      } else if (_this.props.cancelOnEscape && (e.charCode === 27 || e.key === 'Escape')) {
        _this.handleCancel();
      }
      if (_this.props.onKeyUp) {
        _this.props.onKeyUp(e);
      }
    };

    _this.state = {
      focus: false,
      value: _this.props.value,
      active: false
    };
    return _this;
  }

  _createClass(SearchBar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        this.setState(Object.assign({}, this.state, { value: nextProps.value }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var value = this.state.value;

      var _props = this.props,
          cancelOnEscape = _props.cancelOnEscape,
          className = _props.className,
          classes = _props.classes,
          closeIcon = _props.closeIcon,
          disabled = _props.disabled,
          onCancelSearch = _props.onCancelSearch,
          onRequestSearch = _props.onRequestSearch,
          searchIcon = _props.searchIcon,
          style = _props.style,
          inputProps = _objectWithoutProperties(_props, ['cancelOnEscape', 'className', 'classes', 'closeIcon', 'disabled', 'onCancelSearch', 'onRequestSearch', 'searchIcon', 'style']);

      return _react2.default.createElement(
        _Paper2.default,
        {
          className: (0, _classnames2.default)(classes.root, className),
          style: style
        },
        _react2.default.createElement(
          'div',
          { className: classes.searchContainer },
          _react2.default.createElement(_Input2.default, Object.assign({}, inputProps, {
            onBlur: this.handleBlur,
            value: value,
            onChange: this.handleInput,
            onKeyUp: this.handleKeyUp,
            onFocus: this.handleFocus,
            fullWidth: true,
            className: classes.input,
            disableUnderline: true,
            disabled: disabled
          }))
        ),
        _react2.default.createElement(
          _IconButton2.default,
          {
            onClick: onRequestSearch,
            classes: {
              root: (0, _classnames2.default)(classes.iconButton, classes.searchIconButton, _defineProperty({}, classes.iconButtonHidden, value !== '')),
              disabled: classes.iconButtonDisabled
            },
            disabled: disabled
          },
          _react2.default.cloneElement(searchIcon, {
            classes: { root: classes.icon }
          })
        ),
        _react2.default.createElement(
          _IconButton2.default,
          {
            onClick: this.handleCancel,
            classes: {
              root: (0, _classnames2.default)(classes.iconButton, _defineProperty({}, classes.iconButtonHidden, value === '')),
              disabled: classes.iconButtonDisabled
            },
            disabled: disabled
          },
          _react2.default.cloneElement(closeIcon, {
            classes: { root: classes.icon }
          })
        )
      );
    }
  }]);

  return SearchBar;
}(_react.Component);

SearchBar.defaultProps = {
  className: '',
  closeIcon: _react2.default.createElement(_Clear2.default, { style: { color: _colors.grey[500] } }),
  disabled: false,
  placeholder: 'Search',
  searchIcon: _react2.default.createElement(_Search2.default, { style: { color: _colors.grey[500] } }),
  style: null,
  value: ''
};

SearchBar.propTypes = {
  /** Whether to clear search on escape */
  cancelOnEscape: _propTypes2.default.bool,
  /** Override or extend the styles applied to the component. */
  classes: _propTypes2.default.object.isRequired,
  /** Custom top-level class */
  className: _propTypes2.default.string,
  /** Override the close icon. */
  closeIcon: _propTypes2.default.node,
  /** Disables text field. */
  disabled: _propTypes2.default.bool,
  /** Fired when the search is cancelled. */
  onCancelSearch: _propTypes2.default.func,
  /** Fired when the text value changes. */
  onChange: _propTypes2.default.func,
  /** Fired when the search icon is clicked. */
  onRequestSearch: _propTypes2.default.func,
  /** Sets placeholder text for the embedded text field. */
  placeholder: _propTypes2.default.string,
  /** Override the search icon. */
  searchIcon: _propTypes2.default.node,
  /** Override the inline-styles of the root element. */
  style: _propTypes2.default.object,
  /** The value of the text field. */
  value: _propTypes2.default.string
};

exports.default = (0, _withStyles2.default)(styles)(SearchBar);