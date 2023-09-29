import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/socion.jpeg";
import projImg2 from "../assets/img/flipkart.png";
import projImg3 from "../assets/img/stanza2.png";
import projImg4 from "../assets/img/homzhib.png";
import projImg5 from "../assets/img/Athletes.jpeg";
import projImg6 from "../assets/img/shuttle.jpeg";
import awardImg1 from "../assets/img/aug.jpeg";
import awardImg2 from "../assets/img/june.jpeg";
import awardImg3 from "../assets/img/above.jpeg";
import awardImg4 from "../assets/img/Gollavelli Jaya Naveen Sai (1).jpg";
import awardImg5 from "../assets/img/june2021.jpeg";
import awardImg6 from "../assets/img/sportlight.jpeg";
import awardImg7 from "../assets/img/codemonks.jpg";

import certificate1 from "../assets/img/machine learning.jpg";
import certificate2 from "../assets/img/bit.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Socion",
      description: "Societal challenges are outpacing our ability to solve! We partner with development and aid agencies that are committed to resolving societal challenges at scale, and work together to reach and deliver impact with at (population) scale",
      imgUrl: projImg1,
    },
    {
      title: "Flipkart",
      description: "Influencer program in flipkart’s project is devised to make use of influencers in Instagram or YouTube to raise awareness about the products. They can avail certain commissions for their reviews and sharing of the product in their timelines/social media platforms. To facilitate this process, we have created new flows creator studio in the Flipkart app",
      imgUrl: projImg2,
    },
    {
      title: "Stanza Living",
      description: "Estate is a project in which the user can exhibit his property for sale. It is all about answering the questions given by the customer via a question template on the website. The user will be asked to answer some questions regarding the property and our application is a medium for that",
      imgUrl: projImg3,
    },
    {
      title: "Homzhub",
      description: 'Homzhub Application offers services related to leasing, tenant management, agreement registration, property inspection and property maintenance. users can sale the property and rent their property',
      imgUrl: projImg4,
    },
    {
      title: "Athletes Untapped",
      description: "We connect parents and young athletes with elite private sports coaches for 1on1, in-person training. Follow us on our mission to provide young athletes with better opportunities to succeed",
      imgUrl: projImg5,
    },
    {
      title: "Shuttle Service",
      description: "Shuttle Service is a service provided by Nineleaps for the employees, to commute to their respective client location on time and without any hassle! The application helps in the easy booking of a cab according to their convenience. It also helps in making an advance booking, so that an employee can reserve a seat for the upcoming days without any trouble. ",
      imgUrl: projImg6,
    },
  ];

  const awards = [
    {
      title: "Feather on the Hat",
      description: "August 2023",
      imgUrl: awardImg1,
    },
    {
      title: "Feather on the Hat",
      description: "June 2023",
      imgUrl: awardImg2,
    },
    {
      title: "Above and Beyond Award ",
      description: "9th Foundation Day of Nineleaps",
      imgUrl: awardImg3,
    },
    {
      title: "Feather on the Hat",
      description: "September 2021",
      imgUrl: awardImg4,
    },
    {
      title:  "Feather on the Hat",
      description: "June 2021",
      imgUrl: awardImg5,
    },
    {
      title: "virtual Hackathon 4.0 - Code Monks",
      description: "Billion Dollar Idea title for the year 2020!!",
      imgUrl: awardImg7,
    },
    {
      title: "Spotlight",
      description: "8th Foundation Day of Nineleaps",
      imgUrl: awardImg6,
    },
  
  ];

  const certifications = [
    {
      title: "Socion",
      description: "web & mobile Development",
      imgUrl: certificate1,
    },
    {
      title: "Flipkart",
      description: "web & mobile Development",
      imgUrl: certificate2,
    },

  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>I have a strong portfolio of projects developed using React and React Native, showcasing my expertise in creating engaging and responsive user interfaces. In the world of web development, I've built a range of dynamic applications, from e-commerce platforms to data visualization tools, harnessing the power of React's component-based architecture and state management. My proficiency extends to mobile app development, </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Awards</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Certifications</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                // <div >
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                                // </div>
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            awards.map((project, index) => {
                              return (
                                // <div >
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                                // </div>
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">

                        <Row>
                          {
                            certifications.map((project, index) => {
                              return (
                                // <div >
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                                // </div>
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
