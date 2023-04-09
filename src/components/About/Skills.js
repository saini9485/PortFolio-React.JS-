import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import html from '../../Assets/assets/svg/skills/html.svg'
import css from '../../Assets/assets/svg/skills/css.svg'
import javascript from '../../Assets/assets/svg/skills/javascript.svg'
import react from '../../Assets/assets/svg/skills/react.svg'
import figma from '../../Assets/assets/svg/skills/figma.svg'
import bootstrap from '../../Assets/assets/svg/skills/bootstrap.svg'
import mysql from '../../Assets/assets/svg/skills/mysql.svg'
import mongoDB from '../../Assets/assets/svg/skills/mongoDB.svg'
import tailwind from '../../Assets/assets/svg/skills/tailwind.svg'
import typescript from '../../Assets/assets/svg/skills/typescript.svg'
import materialui from '../../Assets/assets/svg/skills/materialui.svg'

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <>
    
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        {/* <CgCPlusPlus /> */}
        <img src={html}  style={{ height: "80px"}} alt="no"/><h3>html</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <DiJavascript1 /> */}
        <img src={css}  style={{ height: "80px"}} alt="no"/><h3>CSS</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={javascript}  style={{ height: "80px"}} alt="no"/><h3>javascript</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={react}  style={{ height: "80px"}} alt="no"/><h3>React</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={bootstrap}  style={{ height: "80px"}} alt="no"/><h3>bootstrap</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={mysql}  style={{ height: "80px"}} alt="no"/><h3>mysql</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={mongoDB}  style={{ height: "80px"}} alt="no"/><h3>mongoDB</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={tailwind}  style={{ height: "80px"}} alt="no"/><h3>tailwind</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={typescript}  style={{ height: "80px"}} alt="no"/><h3>typescript</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={materialui}  style={{ height: "80px"}} alt="no"/><h3>materialui</h3>
      </Col>
    </Row>
    </>
  );
}

export default Techstack;
