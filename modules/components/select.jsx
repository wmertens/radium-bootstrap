var React = require('react');
var Radium = require('radium');
var { StyleResolverMixin } = Radium;

var Select = React.createClass({
  mixins: [ StyleResolverMixin ],

  getDefaultProps: function () {
    return {
      tagName: 'select'
    };
  },

  getStyles: function () {
    return {
      standard: {
        color: 'inherit',
        font: 'inherit',
        lineHeight: 'inherit',
        margin: 0,
        textTransform: 'none'
      },
      modifiers: {
        formControl: {
          backgroundColor: '#fff',
          backgroundImage: 'none',
          border: '1px solid #ccc',
          borderRadius: 4,
          boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
          boxSizing: 'border-box',
          color: '#555',
          display: 'block',
          font: 'inherit',
          fontSize: 14,
          height: 34,
          lineHeight: '1.42857143',
          margin: 0,
          padding: '6px 12px',
          transition: 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
          width: '100%'
        }
      }
    };
  },

  render: function () {
    var styles = this.buildStyles(this.getStyles());
    var TagName = this.props.tagName;

    return (
      <TagName
        {...this.props}
        style={styles}
      >
        {this.props.children}
      </TagName>
    );
  }
});

module.exports = Select;
