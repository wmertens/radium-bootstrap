var React = require('react/addons');
var Radium = require('radium');

var FormGroup = React.createClass({
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
      tagName: 'div',
      horizontal: false,
      inline: false
    };
  },

  getStyles: function () {
    return {
      standard: {
        marginBottom: 15
      },
      modifiers: {
        inline: {
          display: 'inline-block',
          marginBottom: 0,
          verticalAlign: 'middle'
        }
      }
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

module.exports = FormGroup;
