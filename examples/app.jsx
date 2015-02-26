// React
var React = require('react');
var Radium = require('radium');
var { StyleResolverMixin, MatchMediaBase } = Radium;

var ReactStyleGuide = require('react-style-guide');
require('react-style-guide/react-style-guide.css');

var RadiumBootstrap = require('../modules/index.js');

var Container = RadiumBootstrap.Container;
var Row = RadiumBootstrap.Row;
var Col = RadiumBootstrap.Col;

var Button = RadiumBootstrap.Button;
var Form = RadiumBootstrap.Form;
var Input = RadiumBootstrap.Input;
var HelpText = RadiumBootstrap.HelpText;
var InputGroup = RadiumBootstrap.InputGroup;
var InputGroupAddon = RadiumBootstrap.InputGroupAddon;
var Textarea = RadiumBootstrap.Textarea;
var StaticControl = RadiumBootstrap.StaticControl;

var MEDIA_QUERIES = {
  sm: '(min-width: 768px)',
  md: '(min-width: 992px)',
  lg: '(min-width: 1200px)',
  xsMax: '(max-width: 768px)',
  smMax: '(max-width: 992px)',
  mdMax: '(max-width: 1200px)'
};

MatchMediaBase.init(MEDIA_QUERIES);

var App = React.createClass({
  mixins: [ StyleResolverMixin, MatchMediaBase ],

  render: function () {
    var colDemoStyles = {
      background: 'rgba(117,190,255,0.5)',
      border: '1px solid #0074D9',
      color: '#0074D9',
      minHeight: 80,
      paddingBottom: '1em',
      paddingTop: '1em',
      textAlign: 'center'
    };

    return (
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

        <Container fluid={true}>
          <ReactStyleGuide
            title="Basic form"
          >
            <Form>
              <Input
                label='Email'
                type='text'
                formControl={true}
                placeholder='Email'
              />
              <Input
                label='Password'
                type='password'
                formControl={true}
                placeholder='Password'
              />
              <Input
                label='File input'
                type='file'
              />
              <HelpText value='Example block-level help text here.' />
              <Button
                type='submit'
              >
                Submit
              </Button>
            </Form>
          </ReactStyleGuide>

          <ReactStyleGuide
            title="Inline form"
          >
            <Form
              inline={true}
            >
              <Input
                label='Name'
                type='text'
                formControl={true}
                placeholder='Jane Doe'
              />
              <Input
                label='Email'
                type='email'
                formControl={true}
                placeholder='jane.doe@example.com'
              />
              <Button
                type='submit'
              >
                Send invitation
              </Button>
            </Form>
          </ReactStyleGuide>

          <ReactStyleGuide
            title="Disabled labels"
          >
            <Form
              inline={true}
            >
              <Input
                ariaLabel='Email'
                type='email'
                formControl={true}
                placeholder='Enter email'
                dangerouslyDisableLabel={true}
              />
              <Input
                ariaLabel='Password'
                type='password'
                formControl={true}
                placeholder='Password'
                dangerouslyDisableLabel={true}
              />
              <Button
                type='submit'
              >
                Sign in
              </Button>
            </Form>
          </ReactStyleGuide>

          <ReactStyleGuide
            title="Input groups"
          >
            <Form
              inline={true}
            >
              <InputGroup>
                <InputGroupAddon>$</InputGroupAddon>
                <Input
                  ariaLabel='Amount (in dollars)'
                  type='text'
                  formControl={true}
                  placeholder='Amount'
                  dangerouslyDisableLabel={true}
                />
                <InputGroupAddon>.00</InputGroupAddon>
              </InputGroup>
              <Button
                type='submit'
                kind='primary'
              >
                Transfer cash
              </Button>
            </Form>
          </ReactStyleGuide>

          <ReactStyleGuide
            title="Textarea"
          >
            <Textarea
              rows='3'
              placeholder='Textarea'
            />
          </ReactStyleGuide>

          <ReactStyleGuide
            title="Static controls"
          >
            <Form
              inline={true}
            >
              <StaticControl>email@example.com</StaticControl>
              <Input
                ariaLabel='Password'
                type='password'
                formControl={true}
                placeholder='Password'
                dangerouslyDisableLabel={true}
              />
              <Button>Confirm identity</Button>
            </Form>
          </ReactStyleGuide>
        </Container>
      </main>
    );
  }
});

React.render(<App />, document.getElementById('app'));
