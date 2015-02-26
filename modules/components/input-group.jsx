var React = require('react/addons');
var Radium = require('radium');
var { StyleResolverMixin } = Radium;

var InputGroup = React.createClass({
  mixins: [ StyleResolverMixin ],

  getDefaultProps: function () {
    return {
      tagName: 'div',
      inline: false
    };
  },

  buildChildren: function (elements) {
    return React.Children.map(elements, function (element, index) {
      var newProps = {
        key: index
      };

      if (element.props.formControl) {
        newProps.groupedInput = true;
      }

      if (index === 0) {
        if (element.props.tagName === 'div') {
          newProps.addonLocation = "first";
        } else {
          newProps.inputLocation = "first";
        }
      } else if (index === elements.length - 1) {
        if (element.props.tagName === 'div') {
          newProps.addonLocation = "last";
        } else {
          newProps.inputLocation = "last";
        }
      } else {
        newProps.inputLocation = "middle";
      }


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
      position: 'relative',
      display: 'table',
      borderCollapse: 'separate',

      modifiers: [
        {
          inline: {
            display: 'inline-table',
            marginRight: 3,
            verticalAlign: 'middle'
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
        {this.buildChildren(this.props.children)}
      </TagName>
    );
  }
});

module.exports = InputGroup;
