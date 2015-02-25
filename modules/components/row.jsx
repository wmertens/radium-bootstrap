var React = require('react/addons');
var Radium = require('radium');
var { StyleResolverMixin } = Radium;
var _ = require('lodash');

var Row = React.createClass({
  mixins: [ StyleResolverMixin ],

  getDefaultProps: function () {
    return {
      tagName: 'div'
    };
  },

  buildChildren: function (elements) {
    return React.Children.map(elements, function (element) {
      if (element.props) {
        var defaultProps = ['tagName', 'children', 'style'];
        var inheritedProps = _.omit(this.props, defaultProps);
        return React.addons.cloneWithProps(element, inheritedProps);
      }
      return this.props.children;
    }, this);
  },

  getStyles: function () {
    return {
      marginLeft: -15,
      marginRight: -15
    };
  },

  render: function () {
    var styles = this.buildStyles(this.getStyles());
    var TagName = this.props.tagName;

    // TODO: Make global Clearfix variable/mixin/something.

    return (
      <TagName style={styles}>
        <i style={{display: 'table'}}>{'\u0020'}</i>
        {this.buildChildren(this.props.children)}
        <i style={{clear: 'both', display: 'table'}}>{'\u0020'}</i>
      </TagName>
    );
  }
});

module.exports = Row;
