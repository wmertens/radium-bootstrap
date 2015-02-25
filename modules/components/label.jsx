var React = require('react');
var Radium = require('radium');
var { StyleResolverMixin } = Radium;

var Label = React.createClass({
  mixins: [ StyleResolverMixin ],

  getDefaultProps: function () {
    return {
      tagName: 'label',
      hidden: false,
      horizontal: false
    };
  },

  getStyles: function () {
    return {
      display: 'inline-block',
      fontWeight: 700,
      marginBottom: 5,
      maxWidth: '100%',

      modifiers: [
        {
          hidden: {
            border: 0,
            clip: 'rect(0,0,0,0)',
            height: 1,
            margin: -1,
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            width: 1
          }
        },
        {
          inline: {
            marginRight: 3
          }
        },
        {
          horizontal: {
            marginBottom: 0,
            paddingTop: 7,
            textAlign: 'right',
            width: '100%'
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
        {this.props.children}
      </TagName>
    );
  }
});

module.exports = Label;
