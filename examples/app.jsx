var React = require('react');

var Container = require('../modules/components/container.jsx');
var Row = require('../modules/components/row.jsx');
var Col = require('../modules/components/col.jsx');

var App = React.createClass({
  render: function () {
    var colDemoStyles = {
      background: 'rgba(117,190,255,0.5)',
      border: '1px solid #0074D9',
      color: '#0074D9',
      textAlign: 'center',
      paddingTop: '1em',
      paddingBottom: '1em'
    };

    return (
      <main>
        <div>
          <Container>
            <p>A standard container</p>
          </Container>

          <Container fluid={true}>
            <p>A fluid container</p>
          </Container>

          <Container tagName='section'>
            <p>A container with a custom tagname</p>
          </Container>
        </div>

        <div>
          <Container>
            <Row>
              <Col style={colDemoStyles}>
                Full-width Column
              </Col>

              <Col xsColCount={6} style={colDemoStyles}>
                Standard Column
              </Col>
              <Col xsColCount={4} style={colDemoStyles}>
                Standard Column
              </Col>
              <Col xsColCount={2} style={colDemoStyles}>
                Standard Column
              </Col>
            </Row>

            <Row>
              <Col xsColCount={3} colOffset={2} style={colDemoStyles}>
                Offset Column
              </Col>
              <Col xsColCount={4} style={colDemoStyles}>
                Standard Column
              </Col>
            </Row>

            <Row>
              <Col xsColCount={3} colPush={3} style={colDemoStyles}>
                Pushed Column
              </Col>
              <Col xsColCount={3} colPull={3} style={colDemoStyles}>
                Pulled Column
              </Col>
            </Row>

            <Row>
              <Col xsColCount={8} style={colDemoStyles}>
                <Row>
                  <Col xsColCount={6} style={colDemoStyles}>
                    Nested Column
                  </Col>
                  <Col xsColCount={6} style={colDemoStyles}>
                    Nested Column
                  </Col>
                </Row>
              </Col>
              <Col xsColCount={4} style={colDemoStyles}>
                Standard Column
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    );
  }
});

React.render(<App />, document.getElementById('app'));
