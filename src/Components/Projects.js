import React, { Component, Fragment } from "react";
import { projects } from '../Portfolio';
import project from '../assets/images/project.svg';
import './Projects.css';
import { Fade } from 'react-reveal';
import { Card, CardBody, Badge, Container } from 'reactstrap';

class Projects extends Component {

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
                      <strong className="brand-name"> {projects.subtitle} </strong>
                    </h1>
                    <div className="row sub-heading">
                      <p style={{ fontFamily: "cursive", fontSize: "1.5em", textAlign: "center" }}>
                        | WEB-DEVELOPEMENT |
                      </p >
                    </div>
                    <p style={{ fontFamily: "cursive", fontSize: "1.2em", textAlign: "center" }}>
                      {projects.description}
                    </p>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img
                      src={project}
                      className="img-fluid animated"
                      alt="Commom img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className=" section pb-0 bg-gradient-info my-5 ">
          <Container>
            <div className=" grid-container" >
            {
                projects.sections.map((section) => {
                  return <Fade right duration={2000} distance="80px">
                    <Card className="flex-child card-lift--hover shadow mt-4 project-card" >
                      <CardBody >
                        <div className="d-flex px-3">
                          <div className="pl-4">
                            <h5 className="text-info">
                              {section.title}
                            </h5>
                            <h6>{section.subTitle}</h6>
                            <Badge color="info" className="duration">
                              {section.duration}
                            </Badge>
                            <p className="description mt-3">
                              <ul>
                                {
                                  section.description ?
                                    section.description.map((desc) => {
                                      return <li key={desc}>{desc}</li>
                                    }) : null
                                }
                                <Fragment >
                                {
                                  section.link ?
                                    <a href={section.link} alt={section.linktitle}>
                                      <h6  style={{paddingTop:"1em"}}>{section.linktitle} </h6>
                                    </a> : null
                                }
                                </Fragment>
                              </ul>
                            </p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Fade>
                })
              }
              
            </div>
          </Container>

        </section>
      </>
    );

  }
};



export default Projects;
