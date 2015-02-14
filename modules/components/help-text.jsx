var React = require('react');
var Radium = require('radium');
var { StyleResolverMixin } = Radium;

var HelpText = React.createClass({
  mixins: [ StyleResolverMixin ],

  getDefaultProps: function () {
    return {
      tagName: 'p'
    };
  },

  getStyles: function () {
    return {
      standard: {
        color: '#737373',
        display: 'block',
        marginBottom: 10,
        marginTop: 5
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

module.exports = HelpText;
