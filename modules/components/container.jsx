var React = require('react');
var Radium = require('radium');
var { StyleResolverMixin, MatchMediaItem } = Radium;

var Container = React.createClass({
  mixins: [ StyleResolverMixin, MatchMediaItem ],

  getDefaultProps: function () {
    return {
      tagName: 'div'
    }
  },

  getStyles: function () {
    return {
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: 15,
      paddingRight: 15,

      mediaQueries: [
        {
          sm: {
            width: 750
          }
        },
        {
          md: {
            width: 970
          }
        },
        {
          lg: {
            width: 1170
          }
        }
      ],

      modifiers: [
        {
          fluid: {
            width: '100%',

            mediaQueries: null
          }
        }
      ]
    };
  },

  render: function () {
    var styles = this.buildStyles(this.getStyles());
    var TagName = this.props.tagName;

    return (
      <TagName style={styles}>
        {this.props.children}
      </TagName>
    );
  }
});

module.exports = Container;
