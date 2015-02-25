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
var FormGroup = RadiumBootstrap.FormGroup;
var Label = RadiumBootstrap.Label;
var Input = RadiumBootstrap.Input;
var Checkbox = RadiumBootstrap.Checkbox;
var HelpText = RadiumBootstrap.HelpText;
var InputGroup = RadiumBootstrap.InputGroup;
var InputGroupAddon = RadiumBootstrap.InputGroupAddon;
var Textarea = RadiumBootstrap.Textarea;
var Radio = RadiumBootstrap.Radio;
var Select = RadiumBootstrap.Select;
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

var colDemoStyles = {
  background: 'rgba(117,190,255,0.5)',
  border: '1px solid #0074D9',
  color: '#0074D9',
  minHeight: 80,
  paddingBottom: '1em',
  paddingTop: '1em',
  textAlign: 'center'
};

var App = React.createClass({
  mixins: [ StyleResolverMixin, MatchMediaBase ],

  render: function () {
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
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type='email'
                  formControl={true}
                  placeholder='Email'
                />
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  type='password'
                  formControl={true}
                  placeholder='Password'
                />
              </FormGroup>
              <FormGroup>
                <Label>File input</Label>
                <Input
                  type='file'
                />
                <HelpText value='Example block-level help text here.' />
              </FormGroup>
              <Checkbox>Check me out</Checkbox>
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
              <FormGroup>
                <Label>Name</Label>
                <Input
                  type='text'
                  formControl={true}
                  placeholder='Jane Doe'
                />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type='email'
                  formControl={true}
                  placeholder='jane.doe@example.com'
                />
              </FormGroup>
              <Button
                type='submit'
              >
                Send invitation
              </Button>
            </Form>
          </ReactStyleGuide>

          <ReactStyleGuide>
            <Form
              inline={true}
            >
              <FormGroup>
                <Label
                  hidden={true}
                >
                  Email
                </Label>
                <Input
                  type='email'
                  formControl={true}
                  placeholder='Enter email'
                />
              </FormGroup>
              <FormGroup>
                <Label
                  hidden={true}
                >
                  Password
                </Label>
                <Input
                  type='password'
                  formControl={true}
                  placeholder='Password'
                />
              </FormGroup>
              <Checkbox>Remember me</Checkbox>
              <Button
                type='submit'
              >
                Sign in
              </Button>
            </Form>
          </ReactStyleGuide>

          <ReactStyleGuide>
            <Form
              inline={true}
            >
              <FormGroup>
                <Label
                  hidden={true}
                >
                  Amount (in dollars)
                </Label>
                <InputGroup>
                  <InputGroupAddon>$</InputGroupAddon>
                  <Input
                    type='text'
                    formControl={true}
                    placeholder='Amount'
                  />
                  <InputGroupAddon>.00</InputGroupAddon>
                </InputGroup>
                <Button
                  type='submit'
                  kind='primary'
                >
                  Transfer cash
                </Button>
              </FormGroup>
            </Form>
          </ReactStyleGuide>

          <ReactStyleGuide
            title="Horizontal form"
          >
            <Form
              horizontal={true}
            >
              <FormGroup>
                <Col
                  xsSpan={2}
                >
                  <Label>Email</Label>
                </Col>
                <Col
                  xsSpan={10}
                >
                  <Input
                    type='email'
                    formControl={true}
                    placeholder='Email'
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col
                  xsSpan={2}
                >
                  <Label>Password</Label>
                </Col>
                <Col
                  xsSpan={10}
                >
                  <Input
                    type='password'
                    formControl={true}
                    placeholder='Password'
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col
                  xsSpan={10}
                  colPush={2}
                >
                  <Checkbox>Remember me</Checkbox>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col
                  xsSpan={10}
                  colPush={2}
                >
                  <Button
                    type='submit'
                  >
                    Sign in
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </ReactStyleGuide>

          <ReactStyleGuide
            title="Inputs"
          >
            <Input
              type='text'
              formControl={true}
              placeholder='Text input'
            />
          </ReactStyleGuide>

          <ReactStyleGuide
            title="Textarea">
            <Textarea
              rows='3'
              placeholder='Textarea'
            />
          </ReactStyleGuide>

          <ReactStyleGuide
            title="Checkboxes and radios - Default (stacked)"
          >
            <Form>
              <Checkbox>
                Option one — click me!
              </Checkbox>
              <Checkbox
                disabled={true}
              >
                Option two is disabled.
              </Checkbox>
              <br />
              <Radio
                name='optionsRadios'
                value='option1'
                checked={true}
              >
                Option one — preselected with the 'checked' prop set to true.
              </Radio>
              <Radio
                name='optionsRadios'
                value='option2'
              >
                Option two — selecting it will deselect option one.
              </Radio>
              <Radio
                name='optionsRadios'
                value='option3'
                disabled={true}
              >
                Option three is disabled.
              </Radio>
            </Form>
          </ReactStyleGuide>

          <ReactStyleGuide
            title="Inline checkboxes and radios"
          >
            <Form
              inline={true}
            >
              <Checkbox
                checkboxInline={true}
              >
                1
              </Checkbox>
              <Checkbox
                checkboxInline={true}
              >
                2
              </Checkbox>
              <Checkbox
                checkboxInline={true}
              >
                3
              </Checkbox>
              <br />
              <Radio
                name='optionsRadios'
                value='option1'
                radioInline={true}
              >
                1
              </Radio>
              <Radio
                name='optionsRadios'
                value='option2'
                radioInline={true}
              >
                2
              </Radio>
              <Radio
                name='optionsRadios'
                value='option3'
                radioInline={true}
              >
                3
              </Radio>
            </Form>
          </ReactStyleGuide>

          <ReactStyleGuide
            title="Checkboxes and radios without label text"
          >
            <Form>
              <Checkbox
                ariaLabel='...'
              >
              </Checkbox>
              <Radio
                name='optionsRadios'
                value='option1'
                ariaLabel='...'
              >
              </Radio>
            </Form>
          </ReactStyleGuide>

          <ReactStyleGuide
            title="Selects">
            <Select
              formControl={true}
              options={[
                { value: '1', label: 1 },
                { value: '2', label: 2 },
                { value: '3', label: 3 },
                { value: '4', label: 4 },
                { value: '5', label: 5 }
              ]}
            />
          </ReactStyleGuide>

          <ReactStyleGuide
            title="Static controls"
          >
            <Container
              fluid={true}
            >
              <Form
                horizontal={true}
              >
                <FormGroup>
                  <Row>
                    <Col
                      xsSpan={2}
                    >
                      <Label>Email</Label>
                    </Col>
                    <Col
                      xsSpan={10}
                    >
                      <StaticControl>email@example.com</StaticControl>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col
                      xsSpan={2}
                    >
                      <Label>Password</Label>
                    </Col>
                    <Col
                      xsSpan={10}
                    >
                      <Input
                        type='password'
                        formControl={true}
                        placeholder='Password'
                      />
                    </Col>
                  </Row>
                </FormGroup>
              </Form>
            </Container>
          </ReactStyleGuide>
          <ReactStyleGuide>
            <Form>
              <FormGroup
                inline={true}
              >
                <Label
                  hidden={true}
                >
                  Email
                </Label>
                <StaticControl>email@example.com</StaticControl>
              </FormGroup>
              <FormGroup
                inline={true}
              >
                <Label
                  hidden={true}
                >
                  Email
                </Label>
                <Input
                  type='password'
                  formControl={true}
                  placeholder='Password'
                />
                <Button>Confirm identity</Button>
              </FormGroup>
            </Form>
          </ReactStyleGuide>
        </Container>
      </main>
    );
  }
});

React.render(<App />, document.getElementById('app'));
