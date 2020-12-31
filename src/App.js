import React, { Component } from 'react';
import logo from './images/logo.png';
import panel1 from './images/about/about_panel1.png';
import panel2 from './images/about/about_panel2.png';
import panel3 from './images/about/about_panel3.png';
import resumeButton from './images/about/resume_button.png';
import backButtonHover from './images/back_button_hover.png';
import resumeDownloadButton from './images/about/resume_download.png';
import resume from './images/about/Resume_Sep2020.pdf';
import moreButton from './images/projects/more_button.png';
import emailButton from './images/contact/email.svg';
import linkedinButton from './images/contact/linkedin.svg';
import instagramButton from './images/contact/instagram.svg';
import twitterButton from './images/contact/twitter.svg';
import introMP4 from './images/intro.mp4';
import introWEBM from './images/intro.webm';
import afj from './images/projects/afj.png';
import chelsea from './images/projects/chelsea.png';
import ecst from './images/projects/ecst.png';
import logoProject from './images/projects/logo_project.png';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutPanel: "howigothere",
      showResume: false,
      projectDisplayFormat: "carousel",
      displayedProject: "afj",
      displayProjectInfo: false,
    };
  }

  activateNavButton(scrollPos) {
    let aboutRect = document.getElementById("about").getBoundingClientRect();
    let projectsRect = document.getElementById("projects").getBoundingClientRect();
    let contactRect = document.getElementById("contact").getBoundingClientRect();

    // user on about section
    if (scrollPos >= (aboutRect.top + scrollPos) && scrollPos < (aboutRect.bottom + scrollPos)) {
      document.getElementById("nav-about").classList.add("active-nav");
    } else {
      document.getElementById("nav-about").classList.remove("active-nav");
    }
    // user on projects section
    if (scrollPos >= (projectsRect.top + scrollPos) && scrollPos < (projectsRect.bottom + scrollPos)) {
      document.getElementById("nav-projects").classList.add("active-nav");
    } else {
      document.getElementById("nav-projects").classList.remove("active-nav");
    }
    // user on contact section
    if (scrollPos + 1 >= (contactRect.top + scrollPos) && scrollPos + 1 < (contactRect.bottom + scrollPos)) {
      document.getElementById("nav-contact").classList.add("active-nav");
    } else {
      document.getElementById("nav-contact").classList.remove("active-nav");
    }
  }

  componentDidMount() {
    let scrollPos = window.scrollY;

    this.activateNavButton(scrollPos);

    document.addEventListener('scroll', () => {
      scrollPos = window.scrollY;
      this.activateNavButton(scrollPos);
    });
  }

  render() {
    return (
      <div className="container">
        <header id="intro">
          <video playsInline autoPlay muted loop>
            <source src={introWEBM} type="video/webm" />
            <source src={introMP4} type="video/mp4" />
          </video>
          <div className="logo-container">
            <img src={logo} />
          </div>
          <div className="intro-content">
            <h1>Hey, I'm Sang.</h1>
            <h2>Graphic Designer</h2>
            <nav>
              <ul>
                <li onClick={() => document.getElementById("about").scrollIntoView({behavior: 'smooth'})}>About</li>
                <li onClick={() => document.getElementById("projects").scrollIntoView({behavior: 'smooth'})}>Projects</li>
                <li onClick={() => document.getElementById("contact").scrollIntoView({behavior: 'smooth'})}>Contact</li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="side-nav">
          <div id="nav-about" onClick={() => document.getElementById("about").scrollIntoView({behavior: 'smooth'})}><span>About</span></div>
          <div id="nav-projects" onClick={() => document.getElementById("projects").scrollIntoView({behavior: 'smooth'})}><span>Projects</span></div>
          <div id="nav-contact" onClick={() => document.getElementById("contact").scrollIntoView({behavior: 'smooth'})}><span>Contact</span></div>
          {
            this.state.displayProjectInfo &&
            <div id="projects-back" onClick={() => this.setState({displayProjectInfo: false})}><span>Back</span></div>
          }
        </div>
        <div id="about" className="content">
          <div className="about-pictures">
            <div className={this.state.aboutPanel === "howigothere" && "active-about-panel"} onClick={() => this.setState({ aboutPanel: "howigothere" })}>
              <img src={panel1} />
              <h2>How I got here.</h2>
            </div>
            <div className={this.state.aboutPanel === "whatiwanttosee" && "active-about-panel"} onClick={() => this.setState({ aboutPanel: "whatiwanttosee" })}>
              <img src={panel2} />
              <h2>What I Want to See.</h2>
            </div>
            <div className={this.state.aboutPanel === "mypassions" && "active-about-panel"} onClick={() => this.setState({ aboutPanel: "mypassions" })}>
              <img src={panel3} />
              <h2>My Passions.</h2>
            </div>
          </div>
          <div className="about-content">
            {
              this.state.aboutPanel === "howigothere" &&
              <p>how i got here</p>
            }
            {
              this.state.aboutPanel === "whatiwanttosee" &&
              <p>what i want to see</p>
            }
            {
              this.state.aboutPanel === "mypassions" &&
              <p>my passions</p>
            }

            {
              this.state.showResume &&
              <a href={resume} download="resume.pdf" target="_blank" className="download-resume">
                <img src={resumeDownloadButton} />
                <span>Download</span>
              </a>
            }
            {
              this.state.showResume &&
              <div class="resume-modal">
                <div class="resume-modal-content">
                  <embed id="resume-preview" src={resume} height="100%" width="100%"/>
                </div>
              </div>
            }
            <div className="resume" onClick={() => this.setState(prevState => ({showResume: !prevState.showResume}))}>
              { this.state.showResume ?
                <div style={{position: "fixed"}}>
                  <img src={backButtonHover} />
                  <span>Back</span>
                </div>
                :
                <div>
                  <img src={resumeButton} />
                  <span>Resume</span>
                </div>
              }
            </div>
          </div>
        </div>
        <div id="projects" className="content">
          <div className={"carousel-select" + (this.state.displayProjectInfo ? " hidden" : "")}>
            <div
              className={"carousel-button" + (this.state.displayedProject === "afj" ? " active-project" : "")}
              onClick={() => this.setState({displayedProject: "afj"})}
            />
            <div
              className={"carousel-button" + (this.state.displayedProject === "ecst" ? " active-project" : "")}
              onClick={() => this.setState({displayedProject: "ecst"})}
            />
            <div
              className={"carousel-button" + (this.state.displayedProject === "chelsea" ? " active-project" : "")}
              onClick={() => this.setState({displayedProject: "chelsea"})}
            />
            <div
              className={"carousel-button" + (this.state.displayedProject === "logo" ? " active-project" : "")}
              onClick={() => this.setState({displayedProject: "logo"})}
            />
          </div>
          <div className={"more" + (this.state.displayProjectInfo ? " hidden" : "")} onClick={() => this.setState(prevState => ({displayProjectInfo: true}))}><img src={moreButton} /></div>
          {
            this.state.displayedProject === "afj" &&
            <div className="project">
              <img className={this.state.displayProjectInfo && "more-info"}src={afj} />
              <h2 className={this.state.displayProjectInfo && "more-info"}>American Friends of Jamaica</h2>
              <h3 className={this.state.displayProjectInfo && "more-info"}>Nonprofit Organization</h3>
              {
                this.state.displayProjectInfo &&
                <p>afj</p>
              }
            </div>
          }
          {
            this.state.displayedProject === "ecst" &&
            <div className="project">
              <img className={this.state.displayProjectInfo && "more-info"} src={ecst} />
              <h2 className={this.state.displayProjectInfo && "more-info"}>East Coast Surf Tribe</h2>
              <h3 className={this.state.displayProjectInfo && "more-info"}>Nonprofit Organization</h3>
              {
                this.state.displayProjectInfo &&
                <p>ecst</p>
              }
            </div>
          }
          {
            this.state.displayedProject === "chelsea" &&
            <div className="project">
            <img className={this.state.displayProjectInfo && "more-info"} src={chelsea} />
            <h2 className={this.state.displayProjectInfo && "more-info"}>Infographics</h2>
            <h3 className={this.state.displayProjectInfo && "more-info"}>Nonprofit Organization</h3>
            {
                this.state.displayProjectInfo &&
                <p>chels</p>
              }
          </div>
          }
          {
            this.state.displayedProject === "logo" &&
            <div className="project">
              <img className={this.state.displayProjectInfo && "more-info"} src={logoProject} />
              <h2 className={this.state.displayProjectInfo && "more-info"}>Logo Designs</h2>
              <h3 className={this.state.displayProjectInfo && "more-info"}>Nonprofit Organization</h3>
              {
                this.state.displayProjectInfo &&
                <p>logo</p>
              }
            </div>
          }
        </div>
        <div id="contact" className="content">
          <h1>Want something designed?</h1>
          <h2>I am available for freelance projects now, and full-time employment starting June 2021.</h2>
          <h3>The best place to contact me is at my email!</h3>
          <div className="contact-buttons">
            <svg className="contact-email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.42 141.42">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <a onClick={() => navigator.clipboard.writeText("sangs.contact@gmail.com")}>
                      <rect style={{fill: "#ff4a4f"}} x="20.71" y="20.71" width="100" height="100" transform="translate(-29.29 70.71) rotate(-45)"/>
                      <path style={{fill: "#f3f3f5"}} d="M74,42.71c15.11,0,24.92,11.07,24.92,24.2,0,13.29-8.78,19.54-15.66,19.54-4.75,0-7.2-2.85-7.67-5.85l-.08-.48a14.5,14.5,0,0,1-11.39,6.33c-7.68,0-12.26-5.61-12.26-13.29,0-10.6,8.7-19.38,17.87-19.38,4.75,0,8.23,2.3,9.89,5.3l.87-4.19h8.94l-4,19.3a15.39,15.39,0,0,0-.23,1.9c0,2.45,1.26,3.56,2.92,3.56,3.09,0,7.44-3.72,7.44-12.74,0-12.49-8.54-21.11-21.83-21.11-15,0-28,13.13-28,27.92,0,12.41,9.49,22,22.3,22a26.86,26.86,0,0,0,14.48-4.36l1.66,2.38a30.49,30.49,0,0,1-16.45,5c-14.4,0-25.08-10.84-25.08-24.84C42.55,57,57.5,42.71,74,42.71ZM78.3,64.94a7.11,7.11,0,0,0-6.4-4C65.57,60.9,61,66.6,61,72.37c0,4.11,2.53,7,6.57,7s7-2.77,8.78-5.14Z"/>
                    </a>
                  </g>
                </g>
            </svg>
            <svg className="contact-linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.42 141.42">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <a className="contact-linkedin" href="https://linkedin.com/in/sanghoon-hwang/" target="_blank">
                    <polygon style={{fill: "#4521aa"}} points="65.27 5.44 45.33 25.38 25.38 45.33 5.44 65.27 0 70.71 5.44 76.15 45.33 116.04 50.05 120.76 50.05 120.76 65.27 135.98 70.71 141.42 76.15 135.98 116.04 96.09 129.17 82.96 135.98 76.15 141.42 70.71 135.98 65.27 116.04 45.33 76.15 5.44 70.71 0 65.27 5.44"/>
                    <path style={{fill: "#f3f3f5"}} d="M92.43,91.57c0,.69-.22.87-.89.86q-3.63,0-7.26,0c-.65,0-.86-.19-.86-.84,0-4.92,0-9.85,0-14.77a4.87,4.87,0,0,0-2-4.19A4.22,4.22,0,0,0,77,72.07a4.6,4.6,0,0,0-2.84,3.7,11.47,11.47,0,0,0-.09,1.66q0,7,0,14.11c0,.66-.16.9-.86.89q-3.7,0-7.38,0c-.58,0-.76-.18-.76-.75q0-12.93,0-25.85c0-.53.16-.74.71-.73q3.78,0,7.57,0c.54,0,.74.19.72.73,0,.71,0,1.43,0,2.14,0,.21-.08.44.11.61.19,0,.24-.13.33-.24,4-5,10.47-4.91,14.75-.64a10.29,10.29,0,0,1,3.12,7.55C92.43,80.69,92.41,86.13,92.43,91.57Z"/>
                    <path style={{fill: "#f3f3f5"}} d="M59.78,54.33a5.45,5.45,0,0,1-5.4,5.45A5.36,5.36,0,0,1,49,54.37,5.28,5.28,0,0,1,54.38,49,5.36,5.36,0,0,1,59.78,54.33Z"/>
                    <path style={{fill: "#f3f3f5"}} d="M58.86,65.84q0,12.93,0,25.84c0,.58-.22.75-.77.75-2.47,0-4.93,0-7.38,0-.65,0-.87-.17-.87-.84,0-4.28,0-8.57,0-12.85s0-8.54,0-12.81c0-.67.22-.84.87-.84q3.67,0,7.38,0C58.65,65.09,58.86,65.26,58.86,65.84Z"/>
                  </a>
                </g>
              </g>
            </svg>
            <svg className="contact-instagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.42 141.42">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <a className="contact-instagram" href="https://www.instagram.com/sangs_cc/" target="_blank">
                    <polygon style={{fill: "#4521aa"}} points="65.27 5.44 45.33 25.38 25.38 45.33 5.44 65.27 0 70.71 5.44 76.15 45.33 116.04 50.05 120.76 50.05 120.75 65.27 135.98 70.71 141.42 76.15 135.98 116.04 96.09 129.17 82.96 135.98 76.15 141.42 70.71 135.98 65.27 116.04 45.33 76.15 5.44 70.71 0 65.27 5.44"/>
                    <path style={{fill: "#f3f3f5"}} d="M98.18,56.81V84.67c-.05.28-.11.56-.16.84a15,15,0,0,1-8.34,11.17,16.22,16.22,0,0,1-5,1.49H56.82a15.88,15.88,0,0,1-5.14-1.56c-5.22-2.81-8.23-7.15-8.35-13.09-.17-8.51,0-17,0-25.55a13.67,13.67,0,0,1,.72-4.2A15.3,15.3,0,0,1,58.63,43.25c8.09.06,16.17,0,24.26,0a14,14,0,0,1,2.14.11,15.12,15.12,0,0,1,11.69,8.47A16.48,16.48,0,0,1,98.18,56.81ZM48.28,70.74h0V82.58a13.85,13.85,0,0,0,.13,2.13A10.17,10.17,0,0,0,58,93.2c8.43,0,16.86,0,25.29,0a10,10,0,0,0,1.44-.12,10.15,10.15,0,0,0,8.48-9.6c0-8.43,0-16.86,0-25.29a10,10,0,0,0-.13-1.44,10.14,10.14,0,0,0-9.6-8.48c-8.43,0-16.86,0-25.28,0a9.88,9.88,0,0,0-1.44.13A10.18,10.18,0,0,0,48.29,58C48.25,62.24,48.28,66.49,48.28,70.74Z"/>
                    <path style={{fill: "#f3f3f5"}} d="M70.8,84.92A14.18,14.18,0,1,1,84.93,70.7,14.19,14.19,0,0,1,70.8,84.92Zm9.14-14.16a9.19,9.19,0,1,0-9.22,9.16A9.17,9.17,0,0,0,79.94,70.76Z"/>
                    <path style={{fill: "#f3f3f5"}} d="M85.51,59.65a3.6,3.6,0,0,1-3.65-3.57,3.63,3.63,0,1,1,7.25,0A3.61,3.61,0,0,1,85.51,59.65Z"/>
                  </a>
                </g>
              </g>
            </svg>
            <svg className="contact-twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.42 141.42">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <a className="contact-twitter" href="https://twitter.com/Sangs_cc" target="_blank">
                    <polygon style={{fill: "#4521aa"}} points="65.27 5.44 45.33 25.38 25.38 45.33 5.44 65.27 0 70.71 5.44 76.15 45.33 116.04 50.05 120.76 50.05 120.75 65.27 135.98 70.71 141.42 76.15 135.98 116.04 96.09 129.17 82.96 135.98 76.15 141.42 70.71 135.98 65.27 116.04 45.33 76.15 5.44 70.71 0 65.27 5.44"/>
                    <path style={{fill: "#f3f3f5"}} d="M45.72,86.44a6.85,6.85,0,0,1,1.36.06,20.67,20.67,0,0,0,13.31-4l.22-.19a3,3,0,0,0-1.15-.22,10.2,10.2,0,0,1-8-6.52c-.22-.53-.18-.58.4-.5a10.15,10.15,0,0,0,3.82-.21,10.22,10.22,0,0,1-4.14-2,10.08,10.08,0,0,1-3.81-7.12c0-.21-.05-.42-.07-.63,0-.39.11-.47.46-.29a9.35,9.35,0,0,0,2.76.92c.37.07.74.11,1.15.16,0-.22-.2-.27-.31-.36a10.1,10.1,0,0,1-3.9-7.22,10,10,0,0,1,1.06-5.53c.31-.61.32-.62.76-.1a28.8,28.8,0,0,0,7.4,6.24,28.36,28.36,0,0,0,10.86,3.76q.9.12,1.8.18c.52,0,.58-.05.5-.54a9.7,9.7,0,0,1,.86-6.09,10.32,10.32,0,0,1,16.49-3,.78.78,0,0,0,.79.2,20.72,20.72,0,0,0,5.59-2.14.62.62,0,0,1,.48-.13,10.33,10.33,0,0,1-4.25,5.51,20.61,20.61,0,0,0,5.48-1.51c.12.22,0,.3-.09.4A19.65,19.65,0,0,1,91.3,60a1.33,1.33,0,0,0-.58,1.23,29.56,29.56,0,0,1-6.56,19.12A27.26,27.26,0,0,1,66.24,90.74a29.39,29.39,0,0,1-18.73-3.19,19.59,19.59,0,0,0-1.79-1Z"/>
                  </a>
                </g>
              </g>
            </svg>
          </div>
          <h3 className="purple">... but let's connect on other platforms as well!</h3>
          <span class="imprint">IMPRINT</span>
        </div>
      </div>
    );
  }
}

export default App;
