var React = require('react');
var Radium = require('radium');
var { StyleResolverMixin } = Radium;

var Option = React.createClass({
  mixins: [ StyleResolverMixin ],

  getDefaultProps: function () {
    return {
      tagName: 'option'
    };
  },

  render: function () {
    var TagName = this.props.tagName;

    return (
      <TagName {...this.props}>
        {this.props.children}
      </TagName>
    );
  }
});

module.exports = Option;
