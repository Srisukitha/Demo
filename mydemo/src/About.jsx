import React, { useState } from "react"; 

import { Container, Row, Col, Button } from "react-bootstrap";
import "./About.css"; 
import sliderImg from "./assets/slider-img.png" 

function About() {
  const [showText, setShowText] = useState(false); 
  const [bgColor, setBgColor] = useState("orange");

  const changeColor = () => {
    setBgColor(bgColor === "orange" ? "green" : "orange");
  };
  return (
    <section className="slider_section d-flex align-items-center">
      <Container>
        <Row>
        <Col md={6} className="box1 d-flex flex-column justify-content-center align-items-center text-center">
            <div className="detail-box">
              <h1 className="fw-bold">
                Repair and <br />
                Maintenance <br />
                Services
              </h1>
              
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                harum voluptatem adipisci. Quos molestiae saepe dicta nobis
                pariatur, tempora iusto, ad possimus soluta hic praesentium
                mollitia consequatur beatae, aspernatur culpa.
              </p>
              <Button 
                style={{ backgroundColor: bgColor, color: 'white' }} 
                className="btn-lg mb-2"
                onClick={changeColor}
              >
                Change Color
              </Button>
              <br />
              <Button 
                className="btn-lg text-white button1 mb-2" 
                onClick={() => setShowText(!showText)} 
              >
                {showText ? "Hide Message" : "Show Message"}
              </Button>

          
              {showText && <p className="fw-bold text-success">Welcome to Our Service!</p>}
              
            </div>
          </Col>

  
          <Col md={6}>
            <div className="img-box">
              <img src={sliderImg} alt="Repair and Maintenance" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;


