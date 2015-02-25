// React
var React = require('react');
var Radium = require('radium');

var { StyleResolverMixin, MatchMediaBase } = Radium;
var reactTools = require('react-tools');

var ReactStyleGuide = require('react-style-guide');
require('react-style-guide/react-style-guide.css');

var RadiumBootstrap = require('../modules/index.js');

var Container = RadiumBootstrap.Container;
var Row = RadiumBootstrap.Row;
var Col = RadiumBootstrap.Col;

var Button = RadiumBootstrap.Button;

var MEDIA_QUERIES = {
  sm: '(min-width: 768px)',
  md: '(min-width: 992px)',
  lg: '(min-width: 1200px)',
  xsMax: '(max-width: 768px)',
  smMax: '(max-width: 992px)',
  mdMax: '(max-width: 1200px)'
};

MatchMediaBase.init(MEDIA_QUERIES);

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
  mixins: [ StyleResolverMixin, MatchMediaBase ],

  render: function () {
    var headingStyles = { borderBottom: '1px solid #eee' };
    var linkStyles = {
      color: '#000',
      textDecoration: 'none'
    };

    return (
// <<<<<<< HEAD
//       <Container breakpoints={this.state.breakpoints}>
//         <h1 id='grid' style={headingStyles}>
//           <a href='#grid' style={linkStyles}>
//             Grid system
//           </a>
//         </h1>
//
//         <h2 id='fluid-container'>
//           <a href='#fluid-container' style={linkStyles}>
//             Fluid container
//           </a>
//         </h2>
//         <Example markup={fluidContainer}>
//           {convertExample(fluidContainer, this)}
//         </Example>
//
//         <h2 id='responsive-columns'>
//           <a href='#responsive-columns' style={linkStyles}>
//             Responsive columns
//           </a>
//         </h2>
//         <Example markup={responsiveColumn}>
//           {convertExample(responsiveColumn, this)}
//         </Example>
//
//         <h2 id='standard-columns'>
//           <a href='#standard-columns' style={linkStyles}>
//             Standard columns
//           </a>
//         </h2>
//         <Example markup={standardColumn}>
//           {convertExample(standardColumn, this)}
//         </Example>
//
//         <h2 id='offset-columns'>
//           <a href='#offset-columns' style={linkStyles}>
//             Offset columns
//           </a>
//         </h2>
//         <Example markup={offsetColumn}>
//           {convertExample(offsetColumn, this)}
//         </Example>
//
//         <h2 id='responsive-columns'>
//           <a href='#responsive-columns' style={linkStyles}>
//             Pushed columns
//           </a>
//         </h2>
//         <Example markup={pushedColumn}>
//           {convertExample(pushedColumn, this)}
//         </Example>
//
//         <h2 id='nested-columns'>
//           <a href='#nested-columns' style={linkStyles}>
//             Nested columns
//           </a>
//         </h2>
//         <Example markup={nestedColumn}>
//           {convertExample(nestedColumn, this)}
//         </Example>
//
//         <h1 id='forms' style={headingStyles}>
//           <a href='#forms' style={linkStyles}>
//             Forms
//           </a>
//         </h1>
//
//         <h2 id='basic-form'>
//           <a href='#basic-form' style={linkStyles}>
//             Basic form
//           </a>
//         </h2>
//         <Example markup={basicForm}>
//           {convertExample(basicForm)}
//         </Example>
//
//         <h2 id='inline-form'>
//           <a href='#inline-form' style={linkStyles}>
//             Inline form
//           </a>
//         </h2>
//         <Example markup={inlineForm}>
//           {convertExample(inlineForm)}
//         </Example>
//
//         <Example markup={inlineCheckboxForm}>
//           {convertExample(inlineCheckboxForm)}
//         </Example>
//
//         <Example markup={inlineInputGroupForm}>
//           {convertExample(inlineInputGroupForm)}
//         </Example>
//
//         <h2 id='horizontal-form'>
//           <a href='#horizontal-form' style={linkStyles}>
//             Horizontal form
//           </a>
//         </h2>
//         <Example markup={horizontalForm}>
//           {convertExample(horizontalForm, this)}
//         </Example>
//
//         <h2 id='supported-controls'>
//           <a href='#supported-controls' style={linkStyles}>
//             Supported controls
//           </a>
//         </h2>
//
//         <h3 id='inputs'>
//           <a href='#inputs' style={linkStyles}>
//             Inputs
//           </a>
//         </h3>
//         <Example markup={inputs}>
//           {convertExample(inputs)}
//         </Example>
//
//         <h3 id='textarea'>
//           <a href='#textarea' style={linkStyles}>
//             Textarea
//           </a>
//         </h3>
//         <Example markup={textarea}>
//           {convertExample(textarea)}
//         </Example>
//
//         <h3 id='checkboxes-and-radios'>
//           <a href='#checkboxes-and-radios' style={linkStyles}>
//             Checkboxes and radios
//           </a>
//         </h3>
//
//         <h4 id='default-checkboxes-and-radios'>
//           <a href='#default-checkboxes-and-radios' style={linkStyles}>
//             Default (stacked)
//           </a>
//         </h4>
//         <Example markup={checkboxesAndRadios}>
//           {convertExample(checkboxesAndRadios)}
//         </Example>
//
//         <h4 id='inline-checkboxes-and-radios'>
//           <a href='#inline-checkboxes-and-radios' style={linkStyles}>
//             Inline checkboxes and radios
//           </a>
//         </h4>
//         <Example markup={inlineCheckboxesAndRadios}>
//           {convertExample(inlineCheckboxesAndRadios)}
//         </Example>
//
//         <h4 id='checkboxes-and-radios-without-label'>
//           <a href='#checkboxes-and-radios-without-label' style={linkStyles}>
//             Checkboxes and radios without label text
//           </a>
//         </h4>
//         <Example markup={checkboxesAndRadiosWithoutLabel}>
//           {convertExample(checkboxesAndRadiosWithoutLabel)}
//         </Example>
//
//         <h3 id='selects'>
//           <a href='#selects' style={linkStyles}>
//             Selects
//           </a>
//         </h3>
//         <Example markup={selects}>
//           {convertExample(selects)}
//         </Example>
//
//         <Example markup={multipleSelect}>
//           {convertExample(multipleSelect)}
//         </Example>
//
//         <h3 id='static-control'>
//           <a href='#static-control' style={linkStyles}>
//             Static control
//           </a>
//         </h3>
//         <Example markup={staticControlHorizontal}>
//           {convertExample(staticControlHorizontal, this)}
//         </Example>
//
//         <Example markup={staticControlInline}>
//           {convertExample(staticControlInline)}
//         </Example>
//
//         <h1 id='buttons' style={headingStyles}>
//           <a href='#buttons' style={linkStyles}>
//             Buttons
//           </a>
//         </h1>
//
//         <h2 id='button-options'>
//           <a href='#button-options' style={linkStyles}>
//             Button options
//           </a>
//         </h2>
//         <Example markup={buttonOptions}>
//           {convertExample(buttonOptions)}
//         </Example>
//
//         <h2 id='button-sizes'>
//           <a href='#button-sizes' style={linkStyles}>
//             Button sizes
//           </a>
//         </h2>
//         <Example markup={buttonSizes}>
//           {convertExample(buttonSizes)}
//         </Example>
//
//         <h2 id='button-states'>
//           <a href='#button-states' style={linkStyles}>
//             Button states
//           </a>
//         </h2>
//         <Example markup={buttonStates}>
//           {convertExample(buttonStates)}
//         </Example>
//       </Container>
// =======
      <main>
        <Container fluid={true}>
          <Row>
            <Col style={colDemoStyles}>
              Fluid Container
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col
              xsSpan={12}
              smSpan={8}
              mdSpan={6}
              lgSpan={4}
              style={colDemoStyles}
            >
              Responsive Column
            </Col>

            <Col
              xsSpan={6}
              smSpan={2}
              mdSpan={3}
              lgSpan={4}
              style={colDemoStyles}
              >
              Responsive Column
            </Col>

            <Col
              xsSpan={6}
              smSpan={2}
              mdSpan={3}
              lgSpan={4}
              style={colDemoStyles}
              >
              Responsive Column
            </Col>
          </Row>

          <Row>
            <Col
              mdSpan={6}
              style={colDemoStyles}
            >
              Responsive Column
            </Col>
            <Col
              xsSpan={6}
              mdSpan={3}
              style={colDemoStyles}
            >
              Responsive Column
            </Col>
            <Col
              xsSpan={6}
              mdSpan={3}
              style={colDemoStyles}
            >
              Responsive Column
            </Col>
          </Row>

          <Row>
            <Col
              xsSpan={6}
              style={colDemoStyles}
            >
              Standard Column
            </Col>
            <Col
              xsSpan={4}
              style={colDemoStyles}
            >
              Standard Column
            </Col>
            <Col
              xsSpan={2}
              style={colDemoStyles}
            >
              Standard Column
            </Col>
          </Row>

          <Row>
            <Col
              xsSpan={3}
              colOffset={2}
              style={colDemoStyles}
            >
              Offset Column
            </Col>
            <Col
              xsSpan={4}
              style={colDemoStyles}
            >
              Standard Column
            </Col>
          </Row>

          <Row>
            <Col
              xsSpan={3}
              colPush={3}
              style={colDemoStyles}
            >
              Pushed Column
            </Col>
            <Col
              xsSpan={3}
              colPull={3}
              style={colDemoStyles}
            >
              Pulled Column
            </Col>
          </Row>

          <Row>
            <Col
              xsSpan={8}
              style={colDemoStyles}
            >
              <Row>
                <Col
                  xsSpan={6}
                  style={colDemoStyles}
                >
                  Nested Column
                </Col>
                <Col
                  xsSpan={6}
                  style={colDemoStyles}
                >
                  Nested Column
                </Col>
              </Row>
            </Col>
            <Col
              xsSpan={4}
              style={colDemoStyles}
            >
              Standard Column
            </Col>
          </Row>
        </Container>

        <Container fluid={true}>
          <ReactStyleGuide
            title="Button"
          >
            <Button>
              Default
            </Button>

            <Button
              style={{marginLeft: '0.5em'}}
              kind='primary'
            >
              Primary
            </Button>

            <Button
              style={{marginLeft: '0.5em'}}
              kind='success'
            >
              Success
            </Button>

            <Button
              style={{marginLeft: '0.5em'}}
              kind='info'
            >
              Info
            </Button>

            <Button
              style={{marginLeft: '0.5em'}}
              kind='warning'
            >
              Warning
            </Button>

            <Button
              style={{marginLeft: '0.5em'}}
              kind='danger'
            >
              Danger
            </Button>

            <Button
              style={{marginLeft: '0.5em'}}
              kind='link'
            >
              Link
            </Button>
          </ReactStyleGuide>

          <ReactStyleGuide
            title="Button Sizes"
          >
            <Button
              size='large'
              >
              Large
            </Button>

            <Button
              style={{marginLeft: '0.5em'}}
            >
              Normal
            </Button>

            <Button
              size='small'
              style={{marginLeft: '0.5em'}}
              >
              Small
            </Button>

            <Button
              size='extraSmall'
              style={{marginLeft: '0.5em'}}
              >
              Extra Small
            </Button>
          </ReactStyleGuide>

          <ReactStyleGuide
            title="Block Level Buttons"
          >
            <Button
              kind='primary'
              size='large'
              block={true}
            >
              Block Level
            </Button>
          </ReactStyleGuide>

          <ReactStyleGuide
            title="Disabled Buttons"
          >
            <Button
              kind='primary'
              disabled={true}
            >
              Disabled
            </Button>
          </ReactStyleGuide>

          <ReactStyleGuide
            title="Active Buttons"
          >
            <Button
              kind='primary'
              active={true}
              >
              Active
            </Button>

            <Button
              kind='link'
              active={true}
              style={{marginLeft: '0.5em'}}
              >
              Active
            </Button>
          </ReactStyleGuide>
        </Container>
      </main>
// >>>>>>> master
    );
  }
});

React.render(<App />, document.getElementById('app'));
