var React = require('react');
var Radium = require('radium');
var { StyleResolverMixin, BrowserStateMixin } = Radium;
var color = require('color');

// The darken method exposed by `color` darkens by relatively adjusting
// the lightness by a percentage. For example, if a color `foo` has a
// lightness of `50%`, `color(foo).darken(0.5)` converts the lightness to
// `25%`. This function darkens by adjusting absolute darkness, like LESS
// and Sass. Given the same color `foo`, `absoluteDarken(foo, 10)` will
// convert the lightness to `40%`.
var absoluteDarken = function (colorValue, value) {
  var colorObj = color(colorValue);
  var darkenedColor = colorObj.lightness(colorObj.hsl().l - value);

  return darkenedColor.hexString();
};

var hoverBg = function (styles) {
  return {
    backgroundColor: absoluteDarken(styles.backgroundColor, 10)
  };
};

var hoverBorder = function (styles) {
  return {
    borderColor: absoluteDarken(styles.borderColor, 12)
  };
};

var Button = React.createClass({
  mixins: [ StyleResolverMixin, BrowserStateMixin ],

  getDefaultProps: function () {
    return {
      tagName: 'button',
      kind: 'standard'
    }
  },

  getStyles: function () {
    return {
      standard: {
        backgroundImage: 'none',
        border: '1px solid transparent',
        borderRadius: 4,
        color: '#fff',
        cursor: 'pointer',
        display: 'inline-block',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 1.42857143,
        marginBottom: 0,
        padding: '6px 12px',
        textAlign: 'center',
        touchAction: 'manipulation',
        userSelect: 'none',
        verticalAlign: 'middle',
        whiteSpace: 'nowrap',

        states: {
          hover: {
            textDecoration: 'none',

            computedBackgroundColor: hoverBg,
            computedBorderColor: hoverBorder
          },
          focus: {
            outline: 'thin dotted',
            outline: '5px auto -webkit-focus-ring-color',
            outlineOffset: -2,
            textDecoration: 'none',

            computedBackgroundColor: hoverBg,
            computedBorderColor: hoverBorder
          },
          active: {
            backgroundImage: 'none',
            boxShadow: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
            outline: 0,

            computedBackgroundColor: hoverBg,
            computedBorderColor: hoverBorder
          }
        }
      },
      modifiers: {
        kind: {
          standard: {
            backgroundColor: '#fff',
            borderColor: '#ccc',
            color: '#333'
          },
          primary: {
            backgroundColor: '#337ab7',
            borderColor: '#2e6da4'
          },
          success: {
            backgroundColor: '#5cb85c',
            borderColor: '#4cae4c'
          },
          info: {
            backgroundColor: '#5bc0de',
            borderColor: '#46b8da'
          },
          warning: {
            backgroundColor: '#f0ad4e',
            borderColor: '#eea236'
          },
          danger: {
            backgroundColor: '#d9534f',
            borderColor: '#d43f3a'
          },
          link: {
            backgroundColor: 'transparent',
            borderRadius: 0,
            color: '#337ab7',

            states: function () {
              var hoverStyles = {
                color: '#23527c',
                textDecoration: 'underline',

                computedBackgroundColor: null,
                computedBorderColor: null
              };

              return {
                hover: hoverStyles,
                focus: hoverStyles,
                active: {
                  boxShadow: 'none',
                  color: '#23527c',
                  textDecoration: 'underline',

                  computedBackgroundColor: null,
                  computedBorderColor: null
                }
              };
            }()
          }
        },
        size: {
          large: {
            borderRadius: 6,
            fontSize: 18,
            lineHeight: 1.3333333,
            padding: '10px 16px'
          },
          small: {
            borderRadius: 3,
            fontSize: 12,
            lineHeight: 1.5,
            padding: '5px 10px'
          },
          extraSmall: {
            borderRadius: 3,
            fontSize: 12,
            lineHeight: 1.5,
            padding: '1px 5px'
          }
        },
        block: {
          display: 'block',
          width: '100%'
        },
        disabled: {
          boxShadow: 'none',
          cursor: 'not-allowed',
          filter: 'alpha(opacity=65)',
          opacity: 0.65,
          pointerEvents: 'none',

          states: null
        }
      }
    };
  },

  render: function () {
    var styles = this.buildStyles(this.getStyles());
    var TagName = this.props.tagName;

    return (
      <TagName
        {...this.getBrowserStateEvents()}
        style={styles}
        disabled={this.props.disabled}
      >
        {this.props.children}
      </TagName>
    );
  }
});

module.exports = Button;
