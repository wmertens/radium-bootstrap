var React = require('react');
var Radium = require('radium');
var { StyleResolverMixin } = Radium;

var Col = React.createClass({
  mixins: [ StyleResolverMixin ],

  getDefaultProps: function () {
    return {
      tagName: 'div',
      xsSpan: 12
    }
  },

  getStyles: function () {
    return {
      float: 'left',
      left: this.colCountToPercent(this.props.colPush),
      marginLeft: this.colCountToPercent(this.props.colOffset),
      minHeight: 1,
      paddingLeft: 15,
      paddingRight: 15,
      position: 'relative',
      right: this.colCountToPercent(this.props.colPull),
      width: this.colCountToPercent(this.props.xsSpan),

      mediaQueries: {
        sm: {
          width: this.colCountToPercent(this.props.smSpan)
        },
        md: {
          width: this.colCountToPercent(this.props.mdSpan)
        },
        lg: {
          width: this.colCountToPercent(this.props.lgSpan)
        }
      }
    };
  },

  colCountToPercent: function (colCount) {
    if (colCount) {
      return (colCount / 12) * 100 + '%';
    }
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

module.exports = Col;
