var React = require('react/addons');
var Radium = require('radium');

var { StyleResolverMixin, MatchMediaItem } = Radium;

var Col = React.createClass({
  mixins: [ StyleResolverMixin, MatchMediaItem ],

  getDefaultProps: function () {
    return {
      tagName: 'div',
      xsSpan: 12
    };
  },

  buildChildren: function (elements) {
    return React.Children.map(elements, function (element) {
      if (element.props) {
        var defaultProps =
          ['tagName', 'xsSpan', 'children', 'style'];
        var inheritedProps = _.omit(this.props, defaultProps);
        return React.addons.cloneWithProps(element, inheritedProps);
      }
      return this.props.children;
    }, this);
  },

  colCountToPercent: function (colCount) {
    if (colCount) {
      return (colCount / 12) * 100 + '%';
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

      mediaQueries: [
        {
          sm: {
            width: this.colCountToPercent(this.props.smSpan)
          }
        },
        {
          md: {
            width: this.colCountToPercent(this.props.mdSpan)
          }
        },
        {
          lg: {
            width: this.colCountToPercent(this.props.lgSpan)
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
        {this.buildChildren(this.props.children)}
      </TagName>
    );
  }
});

module.exports = Col;
