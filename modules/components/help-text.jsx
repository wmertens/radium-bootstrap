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
      color: '#737373',
      display: 'block',
      marginBottom: 10,
      marginTop: 5
    };
  },

  render: function () {
    var { children, value, tagName: TagName, ...props } = this.props;
    
    var styles = this.buildStyles(this.getStyles());

    return (
      <TagName 
        {...props} 
        style={styles}
      >
        { value }
      </TagName>
    );
  }
});

module.exports = HelpText;
