var React = require('react');
var Radium = require('radium');
var { StyleResolverMixin } = Radium;

var Input = React.createClass({
  mixins: [ StyleResolverMixin ],

  getDefaultProps: function () {
    return {
      tagName: 'input',
      inline: false
    };
  },

  getStyles: function () {
    return {
      standard: {
        display: 'block',
        width: '100%',
        height: 34,
        padding: '6px 12px',
        margin: 0,
        font: 'inherit',
        fontFamily: 'inherit',
        fontSize: 14,
        lineHeight: '1.42857143',
        color: '#555',
        backgroundColor: '#fff',
        backgroundImage: 'none',
        border: '1px solid #ccc',
        borderRadius: 4,
        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
        boxSizing: 'border-box',
        transition: 'border-color ease-in-out .15s,box-shadow ease-in-out .15s'
      },
      modifiers: {
        inline: {
          display: 'inline-block',
          width: 'auto',
          verticalAlign: 'middle'
        }
      }
    };
  },

  render: function () {
    var styles = this.buildStyles(this.getStyles());
    var TagName = this.props.tagName;

    return (
      <TagName style={styles} {...this.props}/>
    );
  }
});

module.exports = Input;
