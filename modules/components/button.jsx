var React = require('react');
var Radium = require('radium');
var settings = require('../settings.js');
var { StyleResolverMixin, BrowserStateMixin } = Radium;
var { absoluteDarken } = require('../util/color.js');

var hoverBg = function (styles) {
  return absoluteDarken(styles.backgroundColor, 10);
};

var hoverBorder = function (styles) {
  return absoluteDarken(styles.borderColor, 12);
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
    var computedHoverStyles = {
      backgroundColor: hoverBg,
      borderColor: hoverBorder
    };

    var activeStyles = {
      backgroundImage: 'none',
      boxShadow: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
      outline: 0,

      computed: computedHoverStyles,
      states: null
    };

    var activeLinkStyles = {
      boxShadow: 'none',
      color: '#23527c',
      textDecoration: 'underline',

      computed: null
    };

    return {
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

      states: [
        {
          hover: {
            textDecoration: 'none',

            computed: computedHoverStyles
          }
        },
        {
          focus: {
            outline: 'thin dotted',
            outline: '5px auto -webkit-focus-ring-color',
            outlineOffset: -2,
            textDecoration: 'none',

            computed: computedHoverStyles
          }
        },
        {
          active: activeStyles
        }
      ],

      modifiers: [
        {
          kind: {
            standard: {
              backgroundColor: settings.btnDefaultBg,
              borderColor: settings.btnDefaultBorder,
              color: settings.btnDefaultColor
            },
            primary: {
              backgroundColor: settings.btnPrimaryBg,
              borderColor: settings.btnPrimaryBorder,
              color: settings.btnPrimaryColor
            },
            success: {
              backgroundColor: settings.btnSuccessBg,
              borderColor: settings.btnSuccessBorder,
              color: settings.btnSuccessColor
            },
            info: {
              backgroundColor: settings.btnInfoBg,
              borderColor: settings.btnInfoBorder,
              color: settings.btnInfoColor
            },
            warning: {
              backgroundColor: settings.btnWarningBg,
              borderColor: settings.btnWarningBorder,
              color: settings.btnWarningColor
            },
            danger: {
              backgroundColor: settings.btnDangerBg,
              borderColor: settings.btnDangerBorder,
              color: settings.btnDangerColor
            },
            link: {
              backgroundColor: 'transparent',
              borderRadius: 0,
              color: '#337ab7',

              // TODO: Figure out a good, idiomatic way of applying the same
              // styles to multiple states, because this is a hack.
              states: function () {
                var hoverStyles = {
                  color: '#23527c',
                  textDecoration: 'underline',

                  computed: null
                };

                return [
                  {
                    hover: hoverStyles
                  },
                  {
                    focus: hoverStyles
                  },
                  {
                    active: activeLinkStyles
                  }
                ]; 
              }()
            }
          }
        },
        {
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
          }
        },
        {
          block: {
            display: 'block',
            width: '100%'
          }
        },
        {
          disabled: {
            boxShadow: 'none',
            cursor: 'not-allowed',
            filter: 'alpha(opacity=65)',
            opacity: 0.65,
            pointerEvents: 'none',

            states: null
          }
        },
        {
          active: activeStyles,
        },
        {
          activeLink: activeLinkStyles
        }
      ]
    };
  },

  render: function () {
    var TagName = this.props.tagName;

    var additionalModifiers = {
      activeLink: this.props.active && this.props.kind === 'link'
    };

    var styles = this.buildStyles(this.getStyles(), additionalModifiers);

    return (
      <TagName
        {...this.getBrowserStateEvents()}
        disabled={this.props.disabled}
        style={styles}
      >
        {this.props.children}
      </TagName>
    );
  }
});

module.exports = Button;
