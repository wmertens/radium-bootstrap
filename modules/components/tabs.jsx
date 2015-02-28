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
      backgroundColor: "transparent",
      border: "1px solid",
      borderColor: "transparent transparent transparent",
      borderRadius: "4px 4px 0px 0px",
      color: "#337ab7",
      display: "inline-block",
      lineHeight: "1.5",
      marginBottom: "-1px",
      marginRight: 2,
      padding: "10px 15px",
      textDecoration: "none",

      states: [
        {
          hover: {
            backgroundColor: "#eee",
            borderColor: "#eee #eee #ddd",
            color: "#23527c"
          }
        }
      ],

      modifiers: [
        {
          activeTab: {
            backgroundColor: "#fff",
            borderColor: "#ddd #ddd transparent",
            color: "#555",

            states: [
              {
                hover: {
                  backgroundColor: "#fff",
                  borderColor: "#ddd #ddd transparent",
                  color: "#555"
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
