import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Crypto from "../../Assets/Projects/CryptoProject.png";
import Sugar from "../../Assets/Projects/SugarCostmatic.png";
import News from "../../Assets/Projects/NewsProject.png";
import Movie from "../../Assets/Projects/MovieProject.png";
import Wheather from "../../Assets/Projects/WheatherApp.png";
import ToDoApp from "../../Assets/Projects/ToDoApp.png";

function Projects() {
  return (
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
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              demoLink="https://cryptocurrencydashboard-ggswowgpx-saini9485-s-team.vercel.app/dashboard"
              ghLink="https://github.com/MOFIJULHAQUE/React_Crypto_Dashboard/tree/dev_rajesh"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sugar}
              isBlog={false}
              title="SugarCostematic"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              demoLink="https://marvelous-jalebi-16f62a.netlify.app/"
              ghLink="https://github.com/saini9485/sugar-cosmetics-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={News}
              isBlog={false}
              title="CurrentNews"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              demoLink="https://rsnews95.netlify.app/"    
              ghLink="https://github.com/saini9485/CurrentNewsApp-React"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Movie}
              isBlog={false}
              title="Movie App"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              demoLink="https://saini9485.github.io/Movie_Search_App/"
              ghLink="https://github.com/saini9485/Movie_Search_App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Wheather}
              isBlog={false}
              title="Whether App"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              demoLink="https://saini9485.github.io/Wheather_APP-API/" 
              ghLink="https://github.com/saini9485/Wheather_APP-API"
               
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDoApp}
              isBlog={false}
              title="ToDo App"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              demoLink="#"  
              ghLink="https://github.com/saini9485/ToDo-app-React"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
