var React = require('react');
var Radium = require('radium');

var Col = React.createClass({
  mixins: [ Radium ],

  getDefaultProps: function () {
    return {
      tagName: 'div',
      xsColCount: 12,
      smColCount: 12,
      mdColCount: 12,
      lgColCount: 12
    }
  },

  getStyles: function () {
    return {
      standard: {
        float: 'left',
        left: this.colCountToPercent(this.props.colPush),
        marginLeft: this.colCountToPercent(this.props.colOffset),
        minHeight: 1,
        paddingLeft: 15,
        paddingRight: 15,
        position: 'relative',
        right: this.colCountToPercent(this.props.colPull),
        width: this.colCountToPercent(this.props.xsColCount)
      }
    };
  },

  colCountToPercent: function (colCount) {
    return colCount ? (colCount / 12) * 100 + '%' : null
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
