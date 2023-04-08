import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import "./Contact.css";
export function Contact() {
  return (
    <div className="Contact_Main_Container">
      {/* <div className="Contact_Profile_Image">
        <img src="photo.jpeg" alt ="Profile Image"/>
        <h2>Rajesh Saini</h2>
        <h4>Front-end Developer</h4>
      </div> */}
      <div className="Contact_Card">
       
        <div className="Contact_Profile_Image">
        <img src="photo.jpeg" alt ="Profile Image"/>
        <h2 className="Rajesh">Rajesh Saini</h2>
        <h4 className="Front-end">Front-end Developer</h4>
      </div>
       <h2 className="Contact_Text">Contact us</h2>
        <div className="Contact_Icons"> 
          <h4>
            <span className="Contact_Address_Icons"><i class="fa fa-map-marker" aria-hidden="true"></i></span> Noida UP 
          </h4>
          <h4>
            <span className="Contact_Mobile_Icons"><i class="fa fa-phone" aria-hidden="true"></i></span> 8937800532
          </h4>
          <h4>
            <span className="Contact_Email_Icons"><i class="fa fa-envelope" aria-hidden="true"></i></span>saini222302@gmail.com
          </h4>
        </div>
        <div className="Contact_Card_Btn_Container">
          <a
            className="Contact_Card_Btn"
            href="https://drive.google.com/file/d/1YiudZCtDzIWoPtw6RACst3heTbU-ITQ1/view?usp=sharing"
          >
            Download Card
          </a>
        </div>
        <div className="Contact_Social_Media_Icons_Container">
          <h4 className="Contact_Social_Media_Text">Contact With Me</h4>
          <div className="Contact_Social_Media_Icons">
          {/* <img src="GithubLogo.png" alt="icons"/> 
            <img src="LinkdleLogo.png" alt="icons"/> 
            <img src="instraLogo.jpg" alt="icons"/> 
            <img src="facebookLogo.png" alt="icons"/>  */}
          
            {/* <img src="GithubLogo.png" alt="Icons"/> */}

            {/* <Col md="4" className="footer-body">
          <ul className="footer-icons">*/}
            <li className="social-icons"> 
              <a
                href="https://github.com/saini9485"
                style={{ color: "black" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/"
                style={{ color: "black" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/"
                style={{ color: "black" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              </li>
          <li className="social-icons">
              <a
                href="https://www.instagram.com/"
                style={{ color: "black" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          {/* </ul>
        </Col> */}

          </div>
        </div>
      </div>
      <div className="Contact_Form">
        <div>
          <h2 className="Sent_A_Massege">Send A Massege </h2>
          <label className="Contact_Form_Lable">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            className="Contact_Input_Box"
          ></input>
          <label className="Contact_Form_Lable">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            className="Contact_Input_Box"
          ></input>
          <label className="Contact_Form_Lable">Email Add</label>
          <input
            type="text"
            placeholder="Email Address"
            className="Contact_Input_Box"
          ></input>
          <label className="Contact_Form_Lable">Massage</label>
          <input
            type="text"
            placeholder="Write Your Massage Here "
            className="Contact_Input_Massage_Box"
          ></input>
        </div>
        <div>
          <button className="Contact_Form_Send_Btn">Send</button>
        </div>
      </div>
    </div>
  );
}