import React from 'react';
import logo from './logo.jpeg';
import './App.css';
import { Button, Col, Container, Row } from 'react-bootstrap';

function App() {
  const latitude = -7.729111;
  const longitude = 112.717750;
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

  return (
    <Container>
      <Row className="vh-100">
        <Col xs={12} md={4} className="d-flex justify-content-center align-items-center flex-column text-center">
          <img src={logo} alt="Pasuruan Raya Logo" className="img-fluid" style={{ maxWidth: '300px', objectFit: 'contain' }} />
          <h2 className="font-weight-bold mt-3">Pasuruan Raya</h2>
        </Col>
        <Col xs={12} md={8} className="d-flex justify-content-center align-items-start flex-column">
          <div>
            <h3 className="text-bold-600" style={{fontWeight:'bold'}}>Gentapangan Pasuruan Raya 1189</h3>

            <div className="mt-2">
              <div className="font-weight-bold" style={{ minWidth: '100px', fontWeight:'bold' }}>Contact Person</div>

              <div className='d-flex align-items-center'>
                <Button className='mr-1'>085791567569</Button>
                <Button variant='warning ms-1'>081233960068</Button>
              </div>
            </div>

            <div className="d-flex align-items-center mt-2">
              <div className="font-weight-bold" style={{ minWidth: '100px', fontWeight:'bold' }}>Email:</div>
              <div>gentapanganpasuruanraya@gmail.com</div>
            </div>

            <div className="d-flex align-items-center mt-2">
              <div className="font-weight-bold" style={{ minWidth: '100px', fontWeight:'bold' }}>Website:</div>
              <a style={{color:'blue', cursor:'pointer', textDecoration:'underlined'}}
              href='https://genta-pangan-pasuruan-raya1189.vercel.app/'
              >https://genta-pangan-pasuruan-raya1189.vercel.app/</a>
            </div>

            <div className="d-flex align-items-center mt-2">
              <div className="font-weight-bold" style={{ minWidth: '100px', fontWeight:'bold' }}>Alamat:</div>
              <div>Jl. SMPN 01 Dsn. Sengkan RT. 3 / RW. 6 Kel. Sukorejo Kec. Sukorejo Kab. Pasuruan 67161 JATIM</div>
            </div>
            <iframe
              title="google-map"
              width="100%"
              height="350"
              style={{ border: 0, marginTop:10 }}
              src={googleMapsUrl}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
