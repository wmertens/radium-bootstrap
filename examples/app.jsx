var React = require('react');
var Radium = require('radium');
var { StyleResolverMixin, MatchMediaMixin, MatchMediaStore } = Radium;

var Container = require('../modules/components/container.jsx');
var Row = require('../modules/components/row.jsx');
var Col = require('../modules/components/col.jsx');
var Form = require('../modules/components/form.jsx');
var FormGroup = require('../modules/components/form-group.jsx');
var Label = require('../modules/components/label.jsx');
var Input = require('../modules/components/input.jsx');

var MEDIA_QUERIES = {
  sm: '(min-width: 768px)',
  md: '(min-width: 992px)',
  lg: '(min-width: 1200px)',
  xsMax: '(max-width: 768px)',
  smMax: '(max-width: 992px)',
  mdMax: '(max-width: 1200px)'
};

MatchMediaStore.init(MEDIA_QUERIES);

var App = React.createClass({
  mixins: [ StyleResolverMixin, MatchMediaMixin ],

  render: function () {
    var colDemoStyles = {
      background: 'rgba(117,190,255,0.5)',
      border: '1px solid #0074D9',
      color: '#0074D9',
      height: 80,
      textAlign: 'center',
      paddingTop: '1em',
      paddingBottom: '1em'
    };

    return (
      <main>
        <Container
          fluid={true}
          breakpoints={this.state.breakpoints}
        >
          <Row>
            <Col
              breakpoints={this.state.breakpoints}
              style={colDemoStyles}
            >
              Fluid Container
            </Col>
          </Row>
        </Container>

        <Container
          breakpoints={this.state.breakpoints}
        >
          <Row>
            <Col
              breakpoints={this.state.breakpoints}
              xsSpan={12}
              smSpan={8}
              mdSpan={6}
              lgSpan={4}
              style={colDemoStyles}
            >
              Responsive Column
            </Col>

            <Col
              breakpoints={this.state.breakpoints}
              xsSpan={6}
              smSpan={2}
              mdSpan={3}
              lgSpan={4}
              style={colDemoStyles}
              >
              Responsive Column
            </Col>

            <Col
              breakpoints={this.state.breakpoints}
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
              breakpoints={this.state.breakpoints}
              mdSpan={6}
              style={colDemoStyles}
            >
              Responsive Column
            </Col>
            <Col
              breakpoints={this.state.breakpoints}
              xsSpan={6}
              mdSpan={3}
              style={colDemoStyles}
            >
              Responsive Column
            </Col>
            <Col
              breakpoints={this.state.breakpoints}
              xsSpan={6}
              mdSpan={3}
              style={colDemoStyles}
            >
              Responsive Column
            </Col>
          </Row>

          <Row>
            <Col
              breakpoints={this.state.breakpoints}
              xsSpan={6}
              style={colDemoStyles}
            >
              Standard Column
            </Col>
            <Col
              breakpoints={this.state.breakpoints}
              xsSpan={4}
              style={colDemoStyles}
            >
              Standard Column
            </Col>
            <Col
              breakpoints={this.state.breakpoints}
              xsSpan={2}
              style={colDemoStyles}
            >
              Standard Column
            </Col>
          </Row>

          <Row>
            <Col
              breakpoints={this.state.breakpoints}
              xsSpan={3}
              colOffset={2}
              style={colDemoStyles}
            >
              Offset Column
            </Col>
            <Col
              breakpoints={this.state.breakpoints}
              xsSpan={4}
              style={colDemoStyles}
            >
              Standard Column
            </Col>
          </Row>

          <Row>
            <Col
              breakpoints={this.state.breakpoints}
              xsSpan={3}
              colPush={3}
              style={colDemoStyles}
            >
              Pushed Column
            </Col>
            <Col
              breakpoints={this.state.breakpoints}
              xsSpan={3}
              colPull={3}
              style={colDemoStyles}
            >
              Pulled Column
            </Col>
          </Row>

          <Row>
            <Col
              breakpoints={this.state.breakpoints}
              xsSpan={8}
              style={colDemoStyles}
            >
              <Row>
                <Col
                  breakpoints={this.state.breakpoints}
                  xsSpan={6}
                  style={colDemoStyles}
                >
                  Nested Column
                </Col>
                <Col
                  breakpoints={this.state.breakpoints}
                  xsSpan={6}
                  style={colDemoStyles}
                >
                  Nested Column
                </Col>
              </Row>
            </Col>
            <Col
              breakpoints={this.state.breakpoints}
              xsSpan={4}
              style={colDemoStyles}
            >
              Standard Column
            </Col>
          </Row>
        </Container>

        <Container>
          <Form>
            <FormGroup>
              <Label>Email</Label>
              <Input placeholder="Enter email" />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input placeholder="Enter password" />
            </FormGroup>
          </Form>
        </Container>
        <Container>
          <Form inline={true}>
            <FormGroup>
              <Label>Email</Label>
              <Input placeholder="Enter email" />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input placeholder="Enter password" />
            </FormGroup>
          </Form>
        </Container>
        <Container>
          <Form horizontal={true}>
            <FormGroup>
              <Row>
                <Col xsColCount={2}>
                  <Label>Email</Label>
                </Col>
                <Col xsColCount={10}>
                  <Input placeholder="Enter email" />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col xsColCount={2}>
                  <Label>Password</Label>
                </Col>
                <Col xsColCount={10}>
                  <Input placeholder="Enter password" />
                </Col>
              </Row>
            </FormGroup>
          </Form>
        </Container>
      </main>
    );
  }
});

React.render(<App />, document.getElementById('app'));
