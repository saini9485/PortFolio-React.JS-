import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rajesh Saini </span>
            from <span className="purple">Noida, India.</span>
            <br />I am a  pursuing B.Tech from JP Institute Engineering College Meerut 
            <br />I am very passionate Engineer. I enjoy problem solving and building tech products. 
            <br />
            Apart from coding, some other activities that I love to do!!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Listing Music 
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Book
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>"Enjoy your on life without comapring it with that of other" </p>
          <footer className="blockquote-footer">Rajesh Saini</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
