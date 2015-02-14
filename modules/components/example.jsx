var React = require('react');
var Radium = require('radium');
var { StyleResolverMixin } = Radium;

var Form = require('./form.jsx');
var FormGroup = require('./form-group.jsx');
var Label = require('./label.jsx');
var Input = require('./input.jsx');

var Example = React.createClass({
  mixins: [ StyleResolverMixin ],

  getDefaultProps: function () {
    return {
      tagName: 'div'
    };
  },

  getExampleStyles: function () {
    return {
      standard: {
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderRadius: '4px 4px 0 0',
        borderStyle: 'solid',
        borderWidth: 1,
        boxShadow: 'none',
        margin: '0 0 15px 0',
        padding: '45px 15px 15px',
        position: 'relative'
      }
    };
  },

  getExampleTextStyles: function () {
    return {
      standard: {
        color: '#959595',
        fontSize: 12,
        fontWeight: 700,
        left: 15,
        letterSpacing: 1,
        position: 'absolute',
        textTransform: 'uppercase',
        top: 15
      }
    };
  },

  getCodeStyles: function () {
    return {
      standard: {
        backgroundColor: '#f7f7f9',
        border: '1px solid #e1e1e8',
        borderRadius: '0 0 4px 4px',
        margin: '-16px 0 15px 0',
        padding: '9px 14px'
      }
    };
  },

  render: function () {
    var TagName = this.props.tagName;
    var exampleStyles = this.buildStyles(this.getExampleStyles());
    var exampleTextStyles = this.buildStyles(this.getExampleTextStyles());
    var codeStyles = this.buildStyles(this.getCodeStyles());

    return (
      <div>
        <TagName style={exampleStyles}>
          <div style={exampleTextStyles}>Example</div>
          {this.props.children}
        </TagName>
        <TagName style={codeStyles}>
          <pre>{this.props.markup}</pre>
        </TagName>
      </div>
    );
  }
});

module.exports = Example;
