var React = require('react');
var Radium = require('radium');
var { StyleResolverMixin } = Radium;

var Row = React.createClass({
  mixins: [ StyleResolverMixin ],

  getDefaultProps: function () {
    return {
      tagName: 'div'
    }
  },

  getStyles: function () {
    return {
      standard: {
        marginLeft: -15,
        marginRight: -15
      }
    };
  },

  render: function () {
    var styles = this.buildStyles(this.getStyles());
    var TagName = this.props.tagName;

    // TODO: Make global Clearfix variable/mixin/something.
    
    return (
      <TagName style={styles}>
        <i style={{display: 'table'}}>{'\u0020'}</i>
        {this.props.children}
        <i style={{clear: 'both', display: 'table'}}>{'\u0020'}</i>
      </TagName>
    );
  }
});

module.exports = Row;
