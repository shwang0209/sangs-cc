import React, { Component } from 'react';
import logo from './images/logo.png';
import panel1 from './images/about/about_panel1.png';
import panel2 from './images/about/about_panel2.png';
import panel3 from './images/about/about_panel3.png';
import resumeButton from './images/about/resume_button.png';
import carouselButton from './images/projects/carousel_button.png';
import moreButton from './images/projects/more_button.png';
import emailButton from './images/contact/email.png';
import linkedinButton from './images/contact/linkedin.png';
import instagramButton from './images/contact/instagram.png';
import twitterButton from './images/contact/twitter.png';
import './styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <header className="intro">
                    <img src={logo} />
                    <h1>Hey, I'm Sang.</h1>
                    <h2>Graphic Designer</h2>
                    <nav>
                        <ul>
                            <li>About</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                </header>
                <div className="side-nav">
                    <ul>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="about">
                    <div className="about-pictures">
                        <div>
                            <img src={panel1} />
                            <h2>How I got here.</h2>
                        </div>
                        <div>
                            <img src={panel2} />
                            <h2>What I Want to See.</h2>
                        </div>
                        <div>
                            <img src={panel3} />
                            <h2>My Passions.</h2>
                        </div>
                    </div>
                    <div className="about-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec felis eget urna fringilla rutrum eu sit amet dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In sit amet sapien fringilla, vulputate quam fermentum, tempus lectus. Maecenas vitae mollis elit. Praesent at nisl condimentum, maximus magna quis, vestibulum neque. Fusce eu bibendum enim. Pellentesque a tortor feugiat, convallis sem quis, sagittis nisl.</p>
                        <p>Nam vitae feugiat felis, eget aliquet lectus. Curabitur consequat sagittis neque eu imperdiet. Suspendisse ultrices sapien eget rhoncus volutpat. Morbi gravida quis eros eget volutpat. Aliquam non felis facilisis, porttitor tellus vitae, euismod erat. Donec fermentum venenatis ultricies. Mauris eget libero augue. Nunc id felis at leo laoreet volutpat. Fusce nunc erat, aliquam vel nunc vitae, eleifend fringilla dui.</p>
                        <p>Ut dapibus, arcu in molestie cursus, nisi augue tristique ante, quis mollis libero orci a dui. Phasellus hendrerit metus ut tortor pretium viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vel pharetra arcu, eu lacinia magna. In hac habitasse platea dictumst. Donec elit elit, accumsan eu malesuada in, tristique vel dolor. Curabitur finibus neque id lectus ullamcorper finibus. Pellentesque eu justo lectus. Vestibulum fermentum feugiat lacus, in condimentum eros tincidunt non. Phasellus eu eros elit. In eleifend cursus mauris, non luctus enim iaculis quis. Nullam volutpat at quam sit amet cursus. Sed vitae ornare est. Nulla sed tortor in velit iaculis venenatis.</p>
                        <div className="resume">
                            <button className="resume-button"><img src={resumeButton} /></button>
                            <span>Resume</span>
                        </div>
                    </div>
                </div>
                <div className="projects">
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
                <div className="contact">
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
