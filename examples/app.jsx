// React
var React = require('react');
var Radium = require('radium');
var { StyleResolverMixin, MatchMediaMixin, MatchMediaStore } = Radium;
var reactTools = require('react-tools');

// Radium components
var Example = require('../modules/components/example.jsx');
var Container = require('../modules/components/container.jsx');
var Row = require('../modules/components/row.jsx');
var Col = require('../modules/components/col.jsx');
var Form = require('../modules/components/form.jsx');
var FormGroup = require('../modules/components/form-group.jsx');
var Label = require('../modules/components/label.jsx');
var Input = require('../modules/components/input.jsx');
var InputGroup = require('../modules/components/input-group.jsx');
var InputGroupAddon = require('../modules/components/input-group-addon.jsx');
var Textarea = require('../modules/components/textarea.jsx');
var StaticControl = require('../modules/components/static-control.jsx');
var Button = require('../modules/components/button.jsx');
var HelpText = require('../modules/components/help-text.jsx');
var Checkbox = require('../modules/components/checkbox.jsx');
var Radio = require('../modules/components/radio.jsx');

// Examples
var fluidContainer = require('raw!./../examples/components/fluid-container.txt');
var responsiveColumn = require('raw!./../examples/components/responsive-column.txt');
var standardColumn = require('raw!./../examples/components/standard-column.txt');
var offsetColumn = require('raw!./../examples/components/offset-column.txt');
var pushedColumn = require('raw!./../examples/components/pushed-column.txt');
var nestedColumn = require('raw!./../examples/components/nested-column.txt');
var basicForm = require('raw!./../examples/components/basic-form.txt');
var inlineForm = require('raw!./../examples/components/inline-form.txt');
var inlineCheckboxForm = require('raw!./../examples/components/inline-checkbox-form.txt');
var inlineInputGroupForm = require('raw!./../examples/components/inline-input-group-form.txt');
var horizontalForm = require('raw!./../examples/components/horizontal-form.txt');

// Supported Controls
var inputs = require('raw!./../examples/components/inputs.txt');
var textarea = require('raw!./../examples/components/textarea.txt');
var checkboxesAndRadios = require('raw!./../examples/components/checkboxes-and-radios.txt');
var inlineCheckboxesAndRadios =
  require('raw!./../examples/components/inline-checkboxes-and-radios.txt');
var checkboxesAndRadiosWithoutLabel =
  require('raw!./../examples/components/checkboxes-and-radios-without-label.txt');
var staticControlHorizontal = require('raw!./../examples/components/static-control-horizontal.txt');
var staticControlInline = require('raw!./../examples/components/static-control-inline.txt');
var buttonOptions = require('raw!./../examples/components/button-options.txt');
var buttonSizes = require('raw!./../examples/components/button-sizes.txt');
var buttonStates = require('raw!./../examples/components/button-states.txt');

var MEDIA_QUERIES = {
  sm: '(min-width: 768px)',
  md: '(min-width: 992px)',
  lg: '(min-width: 1200px)',
  xsMax: '(max-width: 768px)',
  smMax: '(max-width: 992px)',
  mdMax: '(max-width: 1200px)'
};

MatchMediaStore.init(MEDIA_QUERIES);

var colDemoStyles = {
  background: 'rgba(117,190,255,0.5)',
  border: '1px solid #0074D9',
  color: '#0074D9',
  minHeight: 80,
  paddingBottom: '1em',
  paddingTop: '1em',
  textAlign: 'center'
};

var convertExample = function (component, context) {
  return function () {
    return eval(reactTools.transform(component));
  }.call(context);
};

var App = React.createClass({
  mixins: [ StyleResolverMixin, MatchMediaMixin ],

  render: function () {
    var headingStyle = { borderBottom: '1px solid #eee' };
    var linkStyle = {
      color: '#000',
      textDecoration: 'none',
    };

    return (
      <Container breakpoints={this.state.breakpoints}>
        <h1 id='grid' style={headingStyle}>
          <a href="#grid" style={linkStyle}>
            Grid system
          </a>
        </h1>

        <h2 id='fluid-container'>
          <a href="#fluid-container" style={linkStyle}>
            Fluid container
          </a>
        </h2>
        <Example markup={fluidContainer}>
          {convertExample(fluidContainer, this)}
        </Example>

        <h2 id='responsive-columns'>
          <a href="#responsive-columns" style={linkStyle}>
            Responsive columns
          </a>
        </h2>
        <Example markup={responsiveColumn}>
          {convertExample(responsiveColumn, this)}
        </Example>

        <h2 id='standard-columns'>
          <a href="#standard-columns" style={linkStyle}>
            Standard columns
          </a>
        </h2>
        <Example markup={standardColumn}>
          {convertExample(standardColumn, this)}
        </Example>

        <h2 id='offset-columns'>
          <a href="#offset-columns" style={linkStyle}>
            Offset columns
          </a>
        </h2>
        <Example markup={offsetColumn}>
          {convertExample(offsetColumn, this)}
        </Example>

        <h2 id='responsive-columns'>
          <a href="#responsive-columns" style={linkStyle}>
            Pushed columns
          </a>
        </h2>
        <Example markup={pushedColumn}>
          {convertExample(pushedColumn, this)}
        </Example>

        <h2 id='nested-columns'>
          <a href="#nested-columns" style={linkStyle}>
            Nested columns
          </a>
        </h2>
        <Example markup={nestedColumn}>
          {convertExample(nestedColumn, this)}
        </Example>

        <h1 id='forms' style={headingStyle}>
          <a href="#forms" style={linkStyle}>
            Forms
          </a>
        </h1>

        <h2 id='basic-form'>
          <a href="#basic-form" style={linkStyle}>
            Basic form
          </a>
        </h2>
        <Example markup={basicForm}>
          {convertExample(basicForm)}
        </Example>

        <h2 id='inline-form'>
          <a href="#inline-form" style={linkStyle}>
            Inline form
          </a>
        </h2>
        <Example markup={inlineForm}>
          {convertExample(inlineForm)}
        </Example>

        <Example markup={inlineCheckboxForm}>
          {convertExample(inlineCheckboxForm)}
        </Example>

        <Example markup={inlineInputGroupForm}>
          {convertExample(inlineInputGroupForm)}
        </Example>

        <h2 id='horizontal-form'>
          <a href="#horizontal-form" style={linkStyle}>
            Horizontal form
          </a>
        </h2>
        <Example markup={horizontalForm}>
          {convertExample(horizontalForm, this)}
        </Example>

        <h2 id='supported-controls'>
          <a href="#supported-controls" style={linkStyle}>
            Supported controls
          </a>
        </h2>

        <h3 id='inputs'>
          <a href="#inputs" style={linkStyle}>
            Inputs
          </a>
        </h3>
        <Example markup={inputs}>
          {convertExample(inputs)}
        </Example>

        <h3 id='textarea'>
          <a href="#textarea" style={linkStyle}>
            Textarea
          </a>
        </h3>
        <Example markup={textarea}>
          {convertExample(textarea)}
        </Example>

        <h3 id='checkboxes-and-radios'>
          <a href="#checkboxes-and-radios" style={linkStyle}>
            Checkboxes and radios
          </a>
        </h3>

        <h4 id='default-checkboxes-and-radios'>
          <a href="#default-checkboxes-and-radios" style={linkStyle}>
            Default (stacked)
          </a>
        </h4>
        <Example markup={checkboxesAndRadios}>
          {convertExample(checkboxesAndRadios)}
        </Example>

        <h4 id='inline-checkboxes-and-radios'>
          <a href="#inline-checkboxes-and-radios" style={linkStyle}>
            Inline checkboxes and radios
          </a>
        </h4>
        <Example markup={inlineCheckboxesAndRadios}>
          {convertExample(inlineCheckboxesAndRadios)}
        </Example>

        <h4 id='checkboxes-and-radios-without-label'>
          <a href="#checkboxes-and-radios-without-label" style={linkStyle}>
            Checkboxes and radios without label text
          </a>
        </h4>
        <Example markup={checkboxesAndRadiosWithoutLabel}>
          {convertExample(checkboxesAndRadiosWithoutLabel)}
        </Example>

        <h3 id='static-control'>
          <a href="#static-control" style={linkStyle}>
            Static control
          </a>
        </h3>
        <Example markup={staticControlHorizontal}>
          {convertExample(staticControlHorizontal, this)}
        </Example>

        <Example markup={staticControlInline}>
          {convertExample(staticControlInline)}
        </Example>

        <h1 id='buttons' style={headingStyle}>
          <a href="#buttons" style={linkStyle}>
            Buttons
          </a>
        </h1>

        <h2 id='button-options'>
          <a href="#button-options" style={linkStyle}>
            Button options
          </a>
        </h2>
        <Example markup={buttonOptions}>
          {convertExample(buttonOptions)}
        </Example>

        <h2 id='button-sizes'>
          <a href="#button-sizes" style={linkStyle}>
            Button sizes
          </a>
        </h2>
        <Example markup={buttonSizes}>
          {convertExample(buttonSizes)}
        </Example>

        <h2 id='button-states'>
          <a href="#button-states" style={linkStyle}>
            Button states
          </a>
        </h2>
        <Example markup={buttonStates}>
          {convertExample(buttonStates)}
        </Example>
      </Container>
    );
  }
});

React.render(<App />, document.getElementById('app'));
