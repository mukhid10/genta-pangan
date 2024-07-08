import React from 'react';
import logo from './logo.jpeg';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row className="vh-100">
        <Col xs={12} md={3} className="d-flex justify-content-center align-items-center flex-column text-center">
          <img src={logo} alt="Pasuruan Raya Logo" className="img-fluid" style={{ maxWidth: '300px', objectFit: 'contain' }} />
          <h2 className="font-weight-bold mt-3">Pasuruan Raya</h2>
        </Col>
        <Col xs={12} md={9} className="d-flex justify-content-center align-items-start flex-column">
          <div>
            <h3 className="font-weight-bold">GERAKAN NASIONAL TANI UNTUK KEDAULATAN PANGAN</h3>

            <div className="d-flex align-items-center mt-3">
              <div className="font-weight-bold" style={{ minWidth: '100px', fontWeight:'bold' }}>Alamat:</div>
              <div>Jl. SMPN 01 Dsn. Sengkan RT. 3 / RW. 6 Kel. Sukorejo Kec. Sukorejo Kab. Pasuruan 67161 JATIM</div>
            </div>

            <div className="d-flex align-items-center mt-3">
              <div className="font-weight-bold" style={{ minWidth: '100px', fontWeight:'bold' }}>Telepon:</div>
              <div>085791567569, 081233960068, 085645727779</div>
            </div>

            <div className="d-flex align-items-center mt-3">
              <div className="font-weight-bold" style={{ minWidth: '100px', fontWeight:'bold' }}>Email:</div>
              <div>gentapanganpasuruanraya@gmail.com</div>
            </div>

            <div className="d-flex align-items-center mt-3">
              <div className="font-weight-bold" style={{ minWidth: '100px', fontWeight:'bold' }}>Website:</div>
              <div>https://genta-pangan-pasuruan-raya1189.vercel.app/</div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
