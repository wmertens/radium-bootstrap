var React = require('react/addons');
var Radium = require('radium');
var { StyleResolverMixin, BrowserStateMixin } = Radium;
var settings = require('../settings.js');
var cloneWithProps = require('react/lib/cloneWithProps');
var _ = require('lodash');

var Tabs = React.createClass({

  getInitialState: function () {
    return {
      activeIndex: 0
    }
  },

  handleTitleClick: function () {
    this.setState({
      activeIndex: arguments[1]
    });
  },

  render: function () {
    var self = this;
    return (
      <div>
        {this.props.children.map(function (child,index) {
          return cloneWithProps(child, {
            key: index,
            activeIndex: self.state.activeIndex,
            clickHandler: self.handleTitleClick.bind(self,index)
          })
        })}
      </div>
    )
  }
});

Tabs.Header = React.createClass({
  render: function () {
    var self = this;
    return (
      <div>
        {this.props.children.map(function (child,index) {
          return cloneWithProps(child, {
            key: index,
            activeIndex: self.props.activeIndex,
            clickHandler: self.props.clickHandler.bind(self,index),
            index: index
          })
        })}
      </div>
    )
  }
});

Tabs.Title = React.createClass({
  mixins: [ StyleResolverMixin, BrowserStateMixin ],

  getStyles: function () {
    return {
      backgroundColor: settings.tabsLinkBackgroundColor,
      border: "1px solid",
      borderColor: settings.tabsLinkBorderColor,
      borderRadius: settings.tabsLinkBorderRadius,
      color: settings.tabsLinkColor,
      display: "inline-block",
      lineHeight: "1.5",
      marginBottom: "-1px",
      marginRight: 2,
      padding: settings.tabsLinkPadding,
      textDecoration: "none",

      states: [
        {
          hover: {
            backgroundColor: settings.tabsLinkHoverBackgroundColor,
            borderColor: settings.tabsLinkBorderColor,
            color: settings.tabsLinkHoverColor
          }
        }
      ],

      modifiers: [
        {
          activeTab: {
            backgroundColor: settings.tabsLinkActiveBackgroundColor,
            borderColor: settings.tabsLinkActiveBorderColor,
            color: settings.tabsLinkActiveColor,

            states: [
              {
                hover: {
                  backgroundColor: settings.tabsLinkActiveBackgroundColor,
                  borderColor: settings.tabsLinkActiveBorderColor,
                  color: settings.tabsLinkActiveColor
                }
              }
            ]
          }
        }
      ]
    }
  },

  render: function () {
    var additionalModifiers = {
      activeTab: this.props.index == this.props.activeIndex
    };

    var styles = this.buildStyles(this.getStyles(), additionalModifiers);

    return (
      <a
        {...this.getBrowserStateEvents()}
        href="javascript:void(0)"
        style={styles}
        onClick={this.props.clickHandler}
        >
        {this.props.children}
      </a>
    )
  }
});

Tabs.Body = React.createClass({
  mixins: [ StyleResolverMixin ],

  getStyles: function () {
    return {
      borderTop: "1px solid #ccc"
    }
  },

  render: function () {
    var self = this;

    var styles = this.buildStyles(this.getStyles());

    return (
      <div style={styles}>
        {this.props.children.map(function (child,index) {
          return cloneWithProps(child, {
            key: index,
            activeIndex: self.props.activeIndex,
            index: index
          })
        })}
      </div>
    )
  }
});

Tabs.Content = React.createClass({
  mixins: [ StyleResolverMixin ],

  getStyles: function () {
    return {
      display: "none",

      modifiers: [
        {
          activeContent: {
            display: "block"
          }
        }
      ]
    }
  },

  render: function () {
    var additionalModifiers = {
      activeContent: this.props.activeIndex == this.props.index
    };

    var styles = this.buildStyles(this.getStyles(), additionalModifiers);

    return (
      <div style={styles}>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Tabs;
