var React = require('react');
var Radium = require('radium');
var { StyleResolverMixin } = Radium;

var Textarea = React.createClass({
  mixins: [ StyleResolverMixin ],

  getDefaultProps: function () {
    return {
      tagName: 'textarea',
      inline: false
    };
  },

  getStyles: function () {
    return {
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
      height: 'auto',
      lineHeight: '1.42857143',
      margin: 0,
      overflow: 'auto',
      padding: '6px 12px',
      transition: 'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
      width: '100%',

      modifiers: [
        {
          inline: {
            display: 'inline-block',
            marginRight: 3,
            verticalAlign: 'middle',
            width: 'auto'
          }
        }
      ]
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

module.exports = Textarea;
