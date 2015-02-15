var React = require('react');
var Radium = require('radium');
var { StyleResolverMixin } = Radium;

var Label = require('./label.jsx');
var Input = require('./input.jsx');

var Radio = React.createClass({
  mixins: [ StyleResolverMixin, React.addons.LinkedStateMixin ],

  getInitialState: function() {
    return {
      checked: false
    };
  },

  getDefaultProps: function () {
    return {
      tagName: 'div',
      inline: false,
      horizontal: false,
      disabled: false,
      checked: false
    };
  },

  componentWillMount: function () {
    this.setState({ checked: this.props.checked });
  },

  getStyles: function () {
    return {
      standard: {
        display: 'block',
        marginBottom: 10,
        marginTop: 10,
        position: 'relative'
      },
      modifiers: {
        inline: {
          display: 'inline-block',
          marginBottom: 0,
          marginTop: 0,
          verticalAlign: 'middle'
        },
        horizontal: {
          marginBottom: 0,
          marginTop: 0,
          minHeight: 27,
          paddingTop: 7
        }
      }
    };
  },

  getLabelStyles: function () {
    return {
      standard: {
        cursor: 'pointer',
        display: 'inline-block',
        fontWeight: 400,
        marginRight: 3,
        marginBottom: 0,
        maxWidth: '100%',
        minHeight: 20,
        paddingLeft: 20
      },
      modifiers: {
        inline: {
          paddingLeft: 0
        },
        disabled: {
          cursor: 'not-allowed'
        }
      }
    };
  },

  getInputStyles: function () {
    return {
      standard: {
        boxSizing: 'border-box',
        color: 'inherit',
        font: 'inherit',
        lineHeight: 'normal',
        margin: '4px 0 0',
        marginLeft: -20,
        padding: 0,
        position: 'absolute'
      },
      modifiers: {
        inline: {
          marginLeft: 0,
          marginRight: 3,
          position: 'relative'
        },
        disabled: {
          cursor: 'not-allowed'
        }
      }
    };
  },

  render: function () {
    var styles = this.buildStyles(this.getStyles());
    var labelStyleOverrides = this.buildStyles(this.getLabelStyles());
    var inputStyleOverrides = this.buildStyles(this.getInputStyles());
    var TagName = this.props.tagName;

    return (
      <TagName
        {...this.props}
        style={styles}
      >
        <Label
          disabled={this.props.disabled}
          style={labelStyleOverrides}
        >
          <Input
            type="radio"
            name={this.props.name}
            value={this.props.value}
            checkedLink={this.linkState('checked')}
            disabled={this.props.disabled}
            style={inputStyleOverrides}
          />
          {this.props.children}
        </Label>
      </TagName>
    );
  }
});

module.exports = Radio;
