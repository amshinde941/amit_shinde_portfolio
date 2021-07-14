import React, { Component, Fragment } from "react";
import { college, webjourney, additionals } from '../Portfolio';
import edu from '../assets/images/edu.svg';
import pict from '../assets/images/Pict_logo.png';
import web from '../assets/images/pngegg.png';
import './Education.css';
import { Fade } from 'react-reveal';

class Education extends Component {

  render() {
    return (
      <>
        <section id="header" className="d-flex align-items-center" >
          <div className="container-fluid ">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1 className="heading">
                      <strong className="brand-name"> MY EDUCATION </strong>
                    </h1>
                    <div className="row sub-heading">
                      <p style={{ fontFamily: "cursive", fontSize: "1.5em" }}>
                        DEGREE | WEB-DEVELOPEMENT | ADDITIONALS
                      </p >

                    </div>
                    <p style={{ fontFamily: "cursive", fontSize: "1.2em", textAlign: "center" }}>
                      I have learnt latest technologies in tech world , willing to learn and contribute more.
                      </p>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img
                      src={edu}
                      className="img-fluid animated"
                      alt="Education img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Fade left duration={2000} distance="80px">
          <div className="row education-card">
            <div
              className="edu-card"
              style={{ border: " 1px solid black" }}
            >
              <div className="edu-card-logo-div">
                <img
                  className="edu-card-logo"
                  src={pict}
                  alt=""
                />
              </div>
              <div className="edu-card-body-div">
                <div className="edu-card-header-div">
                  <div className="edu-card-heading-left">
                    <h3 className="edu-card-title " style={{ color: "#0dcaf0" }}>{college.title}</h3>
                  </div>
                  <div className="edu-card-heading-right">
                    <p className="edu-card-duration"
                      style={{ color: "grey" }}>{college.duration}
                    </p>
                  </div>
                </div>
                <p className="edu-card-description" style={{ color: "black" }}>
                  <h4>{college.subtitle}</h4>
                  {college.marks}<br />
                  <a href={college.website_link} alt="pict.edu">
                    {college.website_link}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Fade>
        <Fade left duration={2000} distance="80px">
          <div className="row education-card">
            <div
              className="edu-card"
              style={{ border: " 1px solid black" }}
            >
              <div className="edu-card-logo-div">
                <img
                  className="edu-card-logo"
                  src={web}
                  alt=""
                />
              </div>
              <div className="edu-card-body-div">
                <div className="edu-card-header-div">
                  <div className="edu-card-heading-left">
                    <h3 className="edu-card-title " style={{ color: "#0dcaf0" }}>{webjourney.title}</h3>
                  </div>

                </div>
                <p className="edu-card-description" style={{ color: "black" }}>
                  <h5>{webjourney.subTitle}</h5>
                  <h6>{webjourney.description}</h6>
                </p>
                <div className="row edu-card-description d-flex align-items-center" style={{ color: "black" }}>
                  <h5> - Certifications - </h5>
                  <div className="certificates">
                    {
                      webjourney.certifications.map((certificate) => {
                        return <Fragment key={certificate.title}>
                          <p>
                            <a href={certificate.certificate_link} alt={certificate.title}>
                              <h6>{certificate.title} - {certificate.platform} </h6>
                            </a>
                          </p>
                        </Fragment>
                      })
                    }

                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <Fade left duration={2000} distance="80px">
          <div className="row education-card">
            <div
              className="edu-card"
              style={{ border: " 1px solid black" }}
            >
              <div className="edu-card-body-div">
                <div className="row edu-card-description d-flex align-items-center" style={{ color: "black" }}>
                  <div className="additionals" >
                    {
                      additionals.map((additional) => {
                        return <Fragment key={additional.title} >
                          {

                            additional.link?
                            <a href={additional.link} alt={additional.title} >
                              <h6>{additional.title} </h6>
                            </a>:
                            <h6 >{additional.title}</h6>
                      }
                        </Fragment>
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </>
    );

  }
};



export default Education;
