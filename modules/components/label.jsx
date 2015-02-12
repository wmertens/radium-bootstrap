var React = require('react');
var Radium = require('radium');

var Label = React.createClass({
  mixins: [ Radium ],

  getDefaultProps: function () {
    return {
      tagName: 'label',
      horizontal: false
    };
  },

  getStyles: function () {
    return {
      standard: {
        display: 'inline-block',
        maxWidth: '100%',
        marginBottom: 5,
        fontWeight: 700
      },
      modifiers: {
        horizontal: {
          paddingTop: 7,
          marginBottom: 0,
          textAlign: 'right'
        }
      }
    };
  },

  render: function () {
    var styles = this.buildStyles(this.getStyles());
    var TagName = this.props.tagName;

    return (
      <TagName style={styles} {...this.props}>
        {this.props.children}
      </TagName>
    );
  }
});

module.exports = Label;
