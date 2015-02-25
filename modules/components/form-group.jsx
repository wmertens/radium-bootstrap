var React = require('react/addons');
var Radium = require('radium');
var { StyleResolverMixin } = Radium;

var FormGroup = React.createClass({
  mixins: [ StyleResolverMixin ],

  getDefaultProps: function () {
    return {
      tagName: 'div',
      horizontal: false,
      inline: false
    };
  },

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

  getStyles: function () {
    return {
      margin: '0 0 15px 0',

      modifiers: [
        {
          inline: {
            display: 'inline-block',
            marginBottom: 0,
            verticalAlign: 'middle'
          },
          horizontal: {
            marginLeft: -15,
            marginRight: -15
          }
        }
      ]
    };
  },

  render: function () {
    var styles = this.buildStyles(this.getStyles());
    var TagName = this.props.tagName;

    return (
      <TagName style={styles} {...this.props}>
        <i style={{display: 'table'}}>{'\u0020'}</i>
        {this.buildChildren(this.props.children)}
        <i style={{clear: 'both', display: 'table'}}>{'\u0020'}</i>
      </TagName>
    );
  }
});

module.exports = FormGroup;
