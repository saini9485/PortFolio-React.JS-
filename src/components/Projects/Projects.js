import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import Crypto from "../../Assets/Projects/CryptoProject.png";
import Sugar from "../../Assets/Projects/SugarCostmatic.png";
import News from "../../Assets/Projects/NewsProject.png";
import Movie from "../../Assets/Projects/MovieProject.png";
import Wheather from "../../Assets/Projects/WheatherApp.png";
import ToDoApp from "../../Assets/Projects/ToDoApp.png";

function Projects() {
  return (
    <>
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Crypto}
              isBlog={false}
              title="CryptoDashboard"
              description="Used Tech:- React.JS, API, Local Storage, Hooks, Routing"
              demoLink="https://cryptocurrencydashboard-ggswowgpx-saini9485-s-team.vercel.app/dashboard"
              ghLink="https://github.com/MOFIJULHAQUE/React_Crypto_Dashboard/tree/dev_rajesh"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sugar}
              isBlog={false}
              title="SugarCostematic"
              description="Used Tech:- HTML, CSS, JavaScript and API"
              demoLink="https://marvelous-jalebi-16f62a.netlify.app/"
              ghLink="https://github.com/saini9485/sugar-cosmetics-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={News}
              isBlog={false}
              title="CurrentNews"
              description="Used Tech:- HTML, CSS, JavaScript, React.js, API"
              demoLink="https://rsnews95.netlify.app/"    
              ghLink="https://github.com/saini9485/CurrentNewsApp-React"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Movie}
              isBlog={false}
              title="Movie App"
              description="Used Tech:-  HTML,  CSS,  JavaScript and API."
              demoLink="https://saini9485.github.io/Movie_Search_App/"
              ghLink="https://github.com/saini9485/Movie_Search_App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Wheather}
              isBlog={false}
              title="Whether App"
              description="Used Tech:- HTML, CSS, JavaScript, React.js, API."
              demoLink="https://saini9485.github.io/Wheather_APP-API/" 
              ghLink="https://github.com/saini9485/Wheather_APP-API"
               
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDoApp}
              isBlog={false}
              title="ToDo App"
              description="Used Tech:- HTML, CSS, JavaScript."
              demoLink="#"  
              ghLink="https://github.com/saini9485/ToDo-app-React"
            />
          </Col>
        </Row>
      </Container>
      <div style={{display:"flex", justifyContent:"end", }}>
                                <Link to="/Project">
                                    <button style={{cursor:"pointer",color:"white",background:"#f03939"}}>
                                        View All  
                                    </button>
                                </Link>
                            </div>
    </Container>
    </>
  );
}

export default Projects;
