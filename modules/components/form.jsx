var React = require('react/addons');
var Radium = require('radium');

var Form = React.createClass({
  mixins: [ Radium ],

  buildChildren: function (elements) {
    return React.Children.map(elements, function (element) {
      var newProps = {};

      if (this.props.inline) {
        newProps.inline = true;
      }
      if (this.props.horizontal) {
        newProps.horizontal = true;
      }

      return React.addons.cloneWithProps(element, newProps);
    }, this);
  },

  getDefaultProps: function () {
    return {
      tagName: 'form',
      horizontal: false,
      inline: false
    };
  },

  render: function () {
    var TagName = this.props.tagName;

    return (
      <TagName {...this.props}>
        {this.buildChildren(this.props.children)}
      </TagName>
    );
  }
});

module.exports = Form;
