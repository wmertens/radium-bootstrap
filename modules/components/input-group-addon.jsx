var React = require('react/addons');
var Radium = require('radium');
var { StyleResolverMixin } = Radium;

var InputGroupAddon = React.createClass({
  mixins: [ StyleResolverMixin ],

  getDefaultProps: function () {
    return {
      tagName: 'div',
      inline: false
    };
  },

  getStyles: function () {
    return {
      backgroundColor: '#eee',
      border: '1px solid #ccc',
      borderRadius: 4,
      color:' #555',
      display: 'table-cell',
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1,
      padding: '6px 12px',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      width: '1%',
      verticalAlign: 'middle',

      modifiers: [
        {
          addonLocation: {
            first: {
              borderBottomRightRadius: 0,
              borderRight: 0,
              borderTopRightRadius: 0
            },
            last: {
              borderBottomLeftRadius: 0,
              borderLeft: 0,
              borderTopLeftRadius: 0
            }
          },
          inline: {
            width: 'auto'
          }
        }
      ]
    };
  },

  render: function () {
    var styles = this.buildStyles(this.getStyles());
    var TagName = this.props.tagName;

    return (
      <TagName
        style={styles}
        {...this.props}
      >
        {this.props.children}
      </TagName>
    );
  }
});

module.exports = InputGroupAddon;
