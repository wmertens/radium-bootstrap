var React = require('react');
var Radium = require('radium');
var { StyleResolverMixin, MatchMediaMixin, MatchMediaStore } = Radium;

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

MatchMediaStore.init(MEDIA_QUERIES);

var App = React.createClass({
  mixins: [ StyleResolverMixin, MatchMediaMixin ],

  render: function () {
    var colDemoStyles = {
      background: 'rgba(117,190,255,0.5)',
      border: '1px solid #0074D9',
      color: '#0074D9',
      minHeight: 80,
      textAlign: 'center',
      paddingTop: '1em',
      paddingBottom: '1em'
    };

    return (
      <main>

        <Container
          fluid={true}
          mediaQueries={this.state.mediaQueries}
        >
          <Row>
            <Col
              mediaQueries={this.state.mediaQueries}
              style={colDemoStyles}
            >
              Fluid Container
            </Col>
          </Row>
        </Container>

        <Container
          mediaQueries={this.state.mediaQueries}
        >
          <Row>
            <Col
              mediaQueries={this.state.mediaQueries}
              xsSpan={12}
              smSpan={8}
              mdSpan={6}
              lgSpan={4}
              style={colDemoStyles}
            >
              Responsive Column
            </Col>

            <Col
              mediaQueries={this.state.mediaQueries}
              xsSpan={6}
              smSpan={2}
              mdSpan={3}
              lgSpan={4}
              style={colDemoStyles}
              >
              Responsive Column
            </Col>

            <Col
              mediaQueries={this.state.mediaQueries}
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
              mediaQueries={this.state.mediaQueries}
              mdSpan={6}
              style={colDemoStyles}
            >
              Responsive Column
            </Col>
            <Col
              mediaQueries={this.state.mediaQueries}
              xsSpan={6}
              mdSpan={3}
              style={colDemoStyles}
            >
              Responsive Column
            </Col>
            <Col
              mediaQueries={this.state.mediaQueries}
              xsSpan={6}
              mdSpan={3}
              style={colDemoStyles}
            >
              Responsive Column
            </Col>
          </Row>

          <Row>
            <Col
              mediaQueries={this.state.mediaQueries}
              xsSpan={6}
              style={colDemoStyles}
            >
              Standard Column
            </Col>
            <Col
              mediaQueries={this.state.mediaQueries}
              xsSpan={4}
              style={colDemoStyles}
            >
              Standard Column
            </Col>
            <Col
              mediaQueries={this.state.mediaQueries}
              xsSpan={2}
              style={colDemoStyles}
            >
              Standard Column
            </Col>
          </Row>

          <Row>
            <Col
              mediaQueries={this.state.mediaQueries}
              xsSpan={3}
              colOffset={2}
              style={colDemoStyles}
            >
              Offset Column
            </Col>
            <Col
              mediaQueries={this.state.mediaQueries}
              xsSpan={4}
              style={colDemoStyles}
            >
              Standard Column
            </Col>
          </Row>

          <Row>
            <Col
              mediaQueries={this.state.mediaQueries}
              xsSpan={3}
              colPush={3}
              style={colDemoStyles}
            >
              Pushed Column
            </Col>
            <Col
              mediaQueries={this.state.mediaQueries}
              xsSpan={3}
              colPull={3}
              style={colDemoStyles}
            >
              Pulled Column
            </Col>
          </Row>

          <Row>
            <Col
              mediaQueries={this.state.mediaQueries}
              xsSpan={8}
              style={colDemoStyles}
            >
              <Row>
                <Col
                  mediaQueries={this.state.mediaQueries}
                  xsSpan={6}
                  style={colDemoStyles}
                >
                  Nested Column
                </Col>
                <Col
                  mediaQueries={this.state.mediaQueries}
                  xsSpan={6}
                  style={colDemoStyles}
                >
                  Nested Column
                </Col>
              </Row>
            </Col>
            <Col
              mediaQueries={this.state.mediaQueries}
              xsSpan={4}
              style={colDemoStyles}
            >
              Standard Column
            </Col>
          </Row>
        </Container>

        <Container
          fluid={true}
          mediaQueries={this.state.mediaQueries}
        >
          <p>
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
          </p>

          <p>
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
          </p>

          <p>
            <Button
              kind='primary'
              size='large'
              block={true}
            >
              Block Level
            </Button>
          </p>

          <p>
            <Button
              kind='primary'
              disabled={true}
            >
              Disabled
            </Button>
          </p>

          <p>
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
          </p>
        </Container>
      </main>
    );
  }
});

React.render(<App />, document.getElementById('app'));
