var React = require('react');
var Radium = require('radium');
var { StyleResolverMixin } = Radium;

var Container = React.createClass({
  mixins: [ StyleResolverMixin ],

  getDefaultProps: function () {
    return {
      tagName: 'div'
    };
  },

  getStyles: function () {
    return {
      standard: {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 15,
        paddingRight: 15,

        breakpoints: {
          sm: {
            width: 750
          },
          md: {
            width: 970
          },
          lg: {
            width: 1170
          }
        }
      },
      modifiers: {
        fluid: {
          width: '100%',

          breakpoints: {
            sm: {
              width: '100%'
            },
            md: {
              width: '100%'
            },
            lg: {
              width: '100%'
            }
          }
        }
      }
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
