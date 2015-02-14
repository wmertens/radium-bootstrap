var React = require('react');
var Radium = require('radium');
var { StyleResolverMixin } = Radium;

var StaticControl = React.createClass({
  mixins: [ StyleResolverMixin ],

  getDefaultProps: function () {
    return {
      tagName: 'p',
      inline: false
    };
  },

  getStyles: function () {
    return {
      standard: {
        margin: 0,
        paddingBottom: 7,
        paddingTop: 7
      },
      modifiers: {
        inline: {
          display: 'inline-block',
          marginRight: 3
        }
      }
    };
  },

  render: function () {
    var styles = this.buildStyles(this.getStyles());
    var TagName = this.props.tagName;

    return (
      <TagName style={styles} {...this.props}></TagName>
    );
  }
});

module.exports = StaticControl;
