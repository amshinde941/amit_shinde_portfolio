import React from "react";
import { contactPageData, socialMediaLinks } from '../Portfolio';
import profile from '../assets/images/Profile.jpg';
import './Projects.css';
import { Container } from 'reactstrap';
import { NavLink } from "react-router-dom";
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import './Contact.css';

const Contact = () => {

  return (
    <div>
      <section className=" section pb-0 bg-gradient-info my-5 ">
        <Container>
          <div className=" grid-container" >
            <div className="contact-heading-img-div">
              <img
                src={profile}
                alt=""
                style={{ height: "30em", width: "20em" }}
              />
            </div>
            <div className="contact-heading-text-div">
              <h1 className="heading">
                <strong className="brand-name" style={{color:"#3498db"}}> {contactPageData.contactSection.title} </strong>
              </h1>

              <p className="contact-header-detail-text subTitle" style={{ fontFamily: "cursive", fontSize: "1.2em", textAlign: "center" }}>
                {contactPageData.contactSection.description}
              </p>
              <div className="row social-media-div">
                <a href={socialMediaLinks.linkedin} className="icon-button">
                  <AiFillLinkedin style={{ color: "#0e76a8" }} />
                </a>
                <a href={socialMediaLinks.github} className="icon-button">
                  <AiFillGithub style={{ color: "black" }} />
                </a>
                <a href={socialMediaLinks.gmail} className="icon-button">
                  <FaEnvelopeOpenText style={{ color: "#3498db" }} />
                </a>
              </div>
              <div className="mt-3">
                <NavLink to={socialMediaLinks.resume} className="btn-get-started">
                  see my resume
                    </NavLink>
              </div>
              <div className="row" style={{padding:"2em"}}>
                <h4 style={{fontFamily:"georgia"}}>{contactPageData.addressSection.title}</h4>
                <p>{contactPageData.addressSection.subtitle}</p>
              </div>
            </div>

          </div>
        </Container>

      </section>
    </div>

  );
};

export default Contact;
