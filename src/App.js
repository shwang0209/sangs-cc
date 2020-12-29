import React, { Component } from 'react';
import logo from './images/logo.png';
import panel1 from './images/about/about_panel1.png';
import panel2 from './images/about/about_panel2.png';
import panel3 from './images/about/about_panel3.png';
import resumeButton from './images/about/resume_button.png';
import resumeBackButton from './images/about/resume_back.png';
import resumeDownloadButton from './images/about/resume_download.png';
import resume from './images/about/Resume_Sep2020.pdf';
import carouselButton from './images/projects/carousel_button.png';
import moreButton from './images/projects/more_button.png';
import emailButton from './images/contact/email.png';
import linkedinButton from './images/contact/linkedin.png';
import instagramButton from './images/contact/instagram.png';
import twitterButton from './images/contact/twitter.png';
import introMP4 from './images/intro.mp4';
import introWEBM from './images/intro.webm';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutPanel: "howigothere",
      showResume: false,
    };
  }

  activateNavButton(scrollPos) {
    let aboutRect = document.getElementById("about").getBoundingClientRect();
    let projectsRect = document.getElementById("projects").getBoundingClientRect();
    let contactRect = document.getElementById("contact").getBoundingClientRect();

    // user on about section
    if (scrollPos >= (aboutRect.top + scrollPos) && scrollPos <= (aboutRect.bottom + scrollPos)) {
      document.getElementById("nav-about").classList.add("active-nav");
    } else {
      document.getElementById("nav-about").classList.remove("active-nav");
    }
    // user on projects section
    if (scrollPos >= (projectsRect.top + scrollPos) && scrollPos <= (projectsRect.bottom + scrollPos)) {
      document.getElementById("nav-projects").classList.add("active-nav");
    } else {
      document.getElementById("nav-projects").classList.remove("active-nav");
    }
    // user on contact section
    if (scrollPos + 1 >= (contactRect.top + scrollPos) && scrollPos + 1<= (contactRect.bottom + scrollPos)) {
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
                  <img src={resumeBackButton} />
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
          <div className="carousel-select">
            <ul>
              <li><img src={carouselButton} /></li>
              <li><img src={carouselButton} /></li>
              <li><img src={carouselButton} /></li>
              <li><img src={carouselButton} /></li>
            </ul>
          </div>
          <button className="more"><img src={moreButton} /></button>
          <div className="project">
            <h2>American Friends of Jamaica</h2>
            <h3>Nonprofit Organization</h3>
          </div>
          <div className="project">
            <h2>American Friends of Jamaica</h2>
            <h3>Nonprofit Organization</h3>
          </div>
          <div className="project">
            <h2>American Friends of Jamaica</h2>
            <h3>Nonprofit Organization</h3>
          </div>
          <div className="project">
            <h2>American Friends of Jamaica</h2>
            <h3>Nonprofit Organization</h3>
          </div>
        </div>
        <div id="contact" className="content">
          <h1>Want something designed?</h1>
          <h2>I am available for freelance projects now, and full-time employment starting June 2021.</h2>
          <div className="contact-buttons">
            <button className="contact-email"><img src={emailButton} /></button>
            <button className="contact-linkedin"><img src={linkedinButton} /></button>
            <button className="contact-instagram"><img src={instagramButton} /></button>
            <button className="contact-twitter"><img src={twitterButton} /></button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
