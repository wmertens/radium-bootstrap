var React = require('react');
var Radium = require('radium');
var { StyleResolverMixin } = Radium;

var Input = React.createClass({
  mixins: [ StyleResolverMixin ],

  getDefaultProps: function () {
    return {
      tagName: 'input',
      inline: false,
      type: 'text'
    };
  },

  getStyles: function () {
    return {
      standard: {
        color: 'inherit',
        font: 'inherit',
        lineHeight: 'inherit',
        margin: 0
      },
      modifiers: {
        formControl: {
          backgroundColor: '#fff',
          backgroundImage: 'none',
          border: '1px solid #ccc',
          borderRadius: 4,
          boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
          boxSizing: 'border-box',
          color: '#555',
          display: 'block',
          font: 'inherit',
          fontSize: 14,
          height: 34,
          lineHeight: '1.42857143',
          margin: 0,
          padding: '6px 12px',
          transition: 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
          width: '100%'
        },
        inline: {
          display: 'inline-block',
          marginRight: 3,
          verticalAlign: 'middle',
          width: 'auto'
        },
        type: {
          checkbox: {
            boxSizing: 'border-box',
            lineHeight: 'normal',
            margin: '4px 0 0',
            marginLeft: -20,
            padding: 0,
            position: 'absolute'
          },
          datetimeLocal: {
            lineHeight: 34
          },
          date: {
            lineHeight: 34
          },
          file: {
            display: 'block'
          },
          month: {
            lineHeight: 34
          },
          time: {
            lineHeight: 34
          }
        },
        groupedInput: {
          display: 'table-cell',
          float: 'left',
          marginBottom: 0,
          position: 'relative',
          width: '100%',
          zIndex: 2
        },
        inputLocation: {
          first: {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
          },
          middle: {
            borderRadius: 0
          },
          last: {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          }
        }
      }
    };
  },

  render: function () {
    var styles = this.buildStyles(this.getStyles());
    var TagName = this.props.tagName;

    return (
      <TagName
        {...this.props}
        style={styles}
      />
    );
  }
});

module.exports = Input;
