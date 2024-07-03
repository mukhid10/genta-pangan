import logo from './logo.jpeg';
import './App.css';
import { Button, Col, Container, Row } from 'react-bootstrap';

function App() {

  let lebar = window.innerWidth;
  
  return (
    <>
      <Container>
        <Row>
          <Col md={lebar <= 1000 ? 12 : 2} className='d-flex justify-content-center'>
            <img src={logo} style={lebar <= 1000 ? {width:'19%', rotate:'90deg', marginTop:'-9rem'} : {height:'100vh'}}/>
          </Col>
          <Col md={10}>
            <div style={lebar <= 1000 ? {marginTop:'-10rem'} : null}>
              <h3 style={{marginTop:15, fontWeight:'bold'}}>Gentapangan Pasuruan raya 1189</h3>

              <div>
                <h5 style={{marginTop:15, fontWeight:'bold'}}>Contact Person</h5>
                <Button variant="primary" size="lg">
                    CP 1 : 085791567569
                </Button>
                <Button variant="warning" size="lg" style={lebar <= 1000 ? {marginTop:5} : {marginLeft:5}}>
                    CP 2 : 081233960068
                </Button>
              </div>

              <div>
                <h5 style={{marginTop:15, fontWeight:'bold'}}>Alamat</h5>

                <div>
                  <iframe
                    width="100%"
                    height="450rem"
                    id="gmap_canvas"
                    src={
                      'https://maps.google.com/maps?q=-7.729111,112.71775&z=15&output=embed'
                    }
                    className="mt-2 maps"
                  />
                </div>
                
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
