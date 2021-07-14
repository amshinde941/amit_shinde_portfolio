import React from "react";
import { NavLink } from "react-router-dom";
import { socialMediaLinks } from "../Portfolio"
import home from "../assets/images/home.svg";
import { Skills } from './Skills';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import './Home.css';
const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center ">
        <div className="container-fluid ">
          <div className="row ">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    <strong className="brand-name"> Hi all, I'm Amit Shinde </strong>
                  </h1>
                  <div className="row">
                    <p style={{ fontFamily: "cursive", fontSize: "1.5em" }}>
                      A passionate Full Stack Web Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.
                    </p >
                  </div>
                  <div className="row social-media-div">
                    <a href={socialMediaLinks.linkedin} className="icon-button">
                      <AiFillLinkedin style={{color:"#0e76a8"}}/>
                    </a>
                    <a href={socialMediaLinks.github} className="icon-button">
                      <AiFillGithub style={{color:"black"}}/>
                    </a>
                    <a href={socialMediaLinks.gmail} className="icon-button">
                      <FaEnvelopeOpenText style={{color:"#3498db"}}/>
                    </a>
                  </div>
                  <div className="mt-3">
                    <NavLink to={socialMediaLinks.resume} className="btn-get-started ">
                      see my resume
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={home}
                    className="img-fluid animated"
                    alt="Commom img"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <div className="row" style={{ paddingTop: "2em" }}>
        <Skills />
      </div>
    </>
  );
};

export default Home;
