var React = require('react');
var Radium = require('radium');
var { StyleResolverMixin, BrowserStateMixin } = Radium;

var Input = React.createClass({
  mixins: [ StyleResolverMixin, BrowserStateMixin ],

  getDefaultProps: function () {
    return {
      tagName: 'input',
      inline: false,
      type: 'text',
      dangerouslyDisableLabel: false
    };
  },

  getInputStyles: function () {
    var stateStyles = {
      borderColor: '#66afe9',
      boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)',
      outline: 0
    };
    var typeLineHeight = { lineHeight: 34 };

    return {
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'inherit',
      margin: 0,

      modifiers: [
        {
        formControl: {
          backgroundColor: '#fff',
          backgroundImage: 'none',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#ccc',
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
          width: '100%',

          states: [
            { focus: stateStyles },
            { active: stateStyles }
          ]
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
          datetimeLocal: typeLineHeight,
          date: typeLineHeight,
          file: {
            display: 'block'
          },
          month: typeLineHeight,
          time: typeLineHeight
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
      ]
    };
  },

  getLabelStyles: function () {
    return {
      display: 'inline-block',
      fontWeight: 700,
      marginBottom: 5,
      maxWidth: '100%',

      modifiers: [
        {
          inline: {
            marginRight: 3
          },
          hidden: {
            border: 0,
            clip: 'rect(0,0,0,0)',
            height: 1,
            margin: -1,
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            width: 1
          },
          horizontal: {
            marginBottom: 0,
            paddingTop: 7,
            textAlign: 'right',
            width: '100%'
          }
        }
      ]
    };
  },

  propTypes: {
    label: function (props, propName, componentName) {
      if (!props.dangerouslyDisableLabel && typeof props.label !== "string") {
        return new Error(
          "Required prop `" + propName + "` was not specified in `" +
          componentName + "`. Set `" + propName +
          "` to a string describing the input. If you are implementing your " +
          "own label, set `dangerouslyDisableLabel` to `true`. For more " +
          "information on labels, see " +
          "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label."
        );
      }
    }
  },

  getInputElement: function () {
    return this.refs.input.getDOMNode();
  },

  buildInput: function () {
    var styles = this.buildStyles(
      this.getInputStyles()
    );

    var input = (
      <input
        ref="input"
        style={styles}
        {...this.props}
      />
    );

    return input;
  },

  render: function () {
    var styles = this.buildStyles(this.getLabelStyles());

    var inputEl = this.buildInput();

    if (this.props.dangerouslyDisableLabel) {
      return inputEl;
    }

    console.log(this.props);

    return (
      <label
        {...this.getBrowserStateEvents()}
        {...this.props}
      >
        <span style={styles}>
          {this.props.label}
        </span>
        {inputEl}
      </label>
    );
  }
});

module.exports = Input;
