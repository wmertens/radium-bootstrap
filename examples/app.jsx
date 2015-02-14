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
var Textarea = require('../modules/components/textarea.jsx');
var StaticControl = require('../modules/components/static-control.jsx');
var Button = require('../modules/components/button.jsx');
var HelpText = require('../modules/components/help-text.jsx');

// Examples
var fluidContainer = require('raw!./../examples/components/fluid-container.txt');
var responsiveColumn = require('raw!./../examples/components/responsive-column.txt');
var standardColumn = require('raw!./../examples/components/standard-column.txt');
var offsetColumn = require('raw!./../examples/components/offset-column.txt');
var pushedColumn = require('raw!./../examples/components/pushed-column.txt');
var nestedColumn = require('raw!./../examples/components/nested-column.txt');
var basicForm = require('raw!./../examples/components/basic-form.txt');
var inlineForm = require('raw!./../examples/components/inline-form.txt');
var horizontalForm = require('raw!./../examples/components/horizontal-form.txt');
var textarea = require('raw!./../examples/components/textarea.txt');
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

    return (
      <Container breakpoints={this.state.breakpoints}>
        <h1 id="grid" style={headingStyle}>Grid system</h1>
        <h2 id="fluid-container">Fluid container</h2>
        <Example markup={fluidContainer}>
          {convertExample(fluidContainer, this)}
        </Example>

        <h2 id="responsive-columns">Responsive columns</h2>
        <Example markup={responsiveColumn}>
          {convertExample(responsiveColumn, this)}
        </Example>

        <h2 id="standard-columns">Standard columns</h2>
        <Example markup={standardColumn}>
          {convertExample(standardColumn, this)}
        </Example>

        <h2 id="offset-columns">Offset columns</h2>
        <Example markup={offsetColumn}>
          {convertExample(offsetColumn, this)}
        </Example>

        <h2 id="responsive-columns">Pushed columns</h2>
        <Example markup={pushedColumn}>
          {convertExample(pushedColumn, this)}
        </Example>

        <h2 id="nested-columns">Nested columns</h2>
        <Example markup={nestedColumn}>
          {convertExample(nestedColumn, this)}
        </Example>

        <h1 id="forms" style={headingStyle}>Forms</h1>
        <h2 id="basic-form">Basic form</h2>
        <Example markup={basicForm}>
          {convertExample(basicForm)}
        </Example>

        <h2 id="inline-form">Inline form</h2>
        <Example markup={inlineForm}>
          {convertExample(inlineForm)}
        </Example>

        <h2 id="horizontal-form">Horizontal form</h2>
        <Example markup={horizontalForm}>
          {convertExample(horizontalForm, this)}
        </Example>

        <h2 id="textarea">Textarea</h2>
        <Example markup={textarea}>
          {convertExample(textarea)}
        </Example>

        <h2 id="static-control">Static control</h2>
        <Example markup={staticControlHorizontal}>
          {convertExample(staticControlHorizontal, this)}
        </Example>
        <Example markup={staticControlInline}>
          {convertExample(staticControlInline)}
        </Example>

        <h1 id="buttons" style={headingStyle}>Buttons</h1>
        <h2 id="button-options">Button options</h2>
        <Example markup={buttonOptions}>
          {convertExample(buttonOptions)}
        </Example>

        <h2 id="button-sizes">Button sizes</h2>
        <Example markup={buttonSizes}>
          {convertExample(buttonSizes)}
        </Example>

        <h2 id="button-states">Button states</h2>
        <Example markup={buttonStates}>
          {convertExample(buttonStates)}
        </Example>
      </Container>
    );
  }
});

React.render(<App />, document.getElementById('app'));
