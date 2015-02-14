var React = require('react');
var Radium = require('radium');
var { StyleResolverMixin } = Radium;

var Label = React.createClass({
  mixins: [ StyleResolverMixin ],

  getDefaultProps: function () {
    return {
      tagName: 'label',
      horizontal: false
    };
  },

  getStyles: function () {
    return {
      standard: {
        display: 'inline-block',
        fontWeight: 700,
        marginBottom: 5,
        maxWidth: '100%'
      },
      modifiers: {
        inline: {
          marginRight: 3
        },
        horizontal: {
          marginBottom: 0,
          paddingTop: 7,
          textAlign: 'right',
          width: '100%'
        }
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

module.exports = Label;
