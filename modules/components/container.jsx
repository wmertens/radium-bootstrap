var React = require('react');
var Radium = require('radium');

var Container = React.createClass({
  mixins: [ Radium ],

  getDefaultProps: function () {
    return {
      tagName: 'div'
    }
  },

  getStyles: function () {
    return {
      standard: {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 15,
        paddingRight: 15
      },
      // TODO: Implement container breakpoint styles.
      modifiers: {
        fluid: {
          width: '100%'
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
