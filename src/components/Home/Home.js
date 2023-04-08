import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Rajesh.jpeg";
import Particle from "../Particle";
// import Home2 from "./Home2";
import About from "../About/About";
import Type from "./Type";
import { Button } from "./Button";
import Projects from "../Projects/Projects";
import { Contact } from "../Contact/Contact";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Rajesh Saini</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
                <Button/>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 10 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px",borderRadius:"50%" }}
                
              />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}
         
      <About/>
      <Projects/>
      <Contact/>
    </section>
  );
}

export default Home;
