import React, { Component } from 'react';
import logo from './images/logo.png';
import panel1 from './images/about/about_panel1.png';
import panel2 from './images/about/about_panel2.png';
import panel3 from './images/about/about_panel3.png';
import resumeButton from './images/about/resume_button.png';
import backButtonHover from './images/back_button_hover.png';
import resumeDownloadButton from './images/about/resume_download.png';
import resume from './images/about/Resume_Jan2021.pdf';
import moreButton from './images/projects/more_button.svg';
import introMP4 from './images/intro.mp4';
import introWEBM from './images/intro.webm';
import afj from './images/projects/afj/afj.png';
import soccer from './images/projects/soccer/soccer.png';
import ecst from './images/projects/logo/ecst.png';
import motionGraphics from './images/projects/motion_graphics/motion_graphics.png';
import emailExpanded from './images/contact/email_expanded.svg';
import instagramExpanded from './images/contact/instagram_expanded.svg';
import linkedinExpanded from './images/contact/linkedin_expanded.svg';
import twitterExpanded from './images/contact/twitter_expanded.svg';
import afj1_1 from './images/projects/afj/AFJ_1_1.png';
import afj1_2 from './images/projects/afj/AFJ_1_2.png';
import afj1_3 from './images/projects/afj/AFJ_1_3.png';
import afj1_4 from './images/projects/afj/AFJ_1_4.png';
import afj1_5 from './images/projects/afj/AFJ_1_5.png';
import afj1_6 from './images/projects/afj/AFJ_1_6.png';
import afj2_1 from './images/projects/afj/AFJ_2_1.png';
import afj2_2 from './images/projects/afj/AFJ_2_2.png';
import afj2_3 from './images/projects/afj/AFJ_2_3.png';
import afj2_4 from './images/projects/afj/AFJ_2_4.png';
import afj2_5 from './images/projects/afj/AFJ_2_5.png';
import afj3_1 from './images/projects/afj/AFJ_3_1.png';
import afj3_2 from './images/projects/afj/AFJ_3_2.png';
import afj3_3 from './images/projects/afj/AFJ_3_3.png';
import logo1_1 from './images/projects/logo/Logo_1_1.png';
import logo1_2 from './images/projects/logo/Logo_1_2.png';
import logo1_3 from './images/projects/logo/Logo_1_3.png';
import logo1_4 from './images/projects/logo/Logo_1_4.png';
import logo1_5 from './images/projects/logo/Logo_1_5.png';
import logo2_1 from './images/projects/logo/Logo_2_1.png';
import logo2_2 from './images/projects/logo/Logo_2_2.png';
import logo2_3 from './images/projects/logo/Logo_2_3.jpg';
import logo2_4 from './images/projects/logo/Logo_2_4.jpg';
import logo3_1 from './images/projects/logo/Logo_3_1.png';
import logo3_2 from './images/projects/logo/Logo_3_2.png';
import logo3_3 from './images/projects/logo/Logo_3_3.png';
import logo3_4 from './images/projects/logo/Logo_3_4.png';
import soccer1_1 from './images/projects/soccer/SoccerPosters_1_1.png';
import soccer1_2 from './images/projects/soccer/SoccerPosters_1_2.png';
import soccer1_3 from './images/projects/soccer/SoccerPosters_1_3.jpg';
import soccer1_4 from './images/projects/soccer/SoccerPosters_1_4.jpg';
import soccer1_5 from './images/projects/soccer/SoccerPosters_1_5.png';
import soccer1_6 from './images/projects/soccer/SoccerPosters_1_6.png';
import soccer2_1 from './images/projects/soccer/SoccerPosters_2_1.png';
import soccer2_2 from './images/projects/soccer/SoccerPosters_2_2.png';
import soccer2_3 from './images/projects/soccer/SoccerPosters_2_3.png';
import soccer2_4 from './images/projects/soccer/SoccerPosters_2_4.jpg';
import soccer3_1 from './images/projects/soccer/SoccerPosters_3_1.png';
import soccer3_2 from './images/projects/soccer/SoccerPosters_3_2.jpg';
import soccer3_3 from './images/projects/soccer/SoccerPosters_3_3.jpg';
import soccer3_4 from './images/projects/soccer/SoccerPosters_3_4.jpg';
import motion2_1 from './images/projects/motion_graphics/MotionGraphics_2_1.png'
import motion2_2 from './images/projects/motion_graphics/MotionGraphics_2_2.png'
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
    let aboutHeight = aboutRect.top - aboutRect.bottom;
    let projectsRect = document.getElementById("projects").getBoundingClientRect();
    let projectsHeight = projectsRect.top - projectsRect.bottom;
    let contactRect = document.getElementById("contact").getBoundingClientRect();
    let contactHeight = contactRect.top - contactRect.bottom;

    // user on about section
    if (scrollPos >= (aboutRect.top + scrollPos + (aboutHeight/2)) && scrollPos < (aboutRect.bottom + scrollPos) + (aboutHeight/2)) {
      document.getElementById("nav-about").classList.add("active-nav");
    } else {
      document.getElementById("nav-about").classList.remove("active-nav");
    }
    // user on projects section
    if (scrollPos >= (projectsRect.top + scrollPos + (projectsHeight/2)) && scrollPos < (projectsRect.bottom + scrollPos  + (projectsHeight/2))) {
      document.getElementById("nav-projects").classList.add("active-nav");
    } else {
      document.getElementById("nav-projects").classList.remove("active-nav");
    }
    // user on contact section
    if (scrollPos + 1 >= (contactRect.top + scrollPos + (contactHeight/2)) && scrollPos < (contactRect.bottom + scrollPos)) {
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
            <img src={logo} alt="Personal logo"/>
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
              <img src={panel1} alt="How I got here."/>
              <h2>How I got here.</h2>
            </div>
            <div className={this.state.aboutPanel === "whatiwanttosee" && "active-about-panel"} onClick={() => this.setState({ aboutPanel: "whatiwanttosee" })}>
              <img src={panel2} alt="What I want to see."/>
              <h2>What I Want to See.</h2>
            </div>
            <div className={this.state.aboutPanel === "mypassions" && "active-about-panel"} onClick={() => this.setState({ aboutPanel: "mypassions" })}>
              <img src={panel3} alt="My passions."/>
              <h2>My Passions.</h2>
            </div>
          </div>
          <div className="about-content">
            {
              this.state.aboutPanel === "howigothere" &&
              <div className="about-description">
                <p>My venture into the world of graphic design actually started when my high school French teacher made an offhand comment about a website called Piktochart. Later that week I made an account and started messing around with the tools that they give you. Before I knew it, I spent 2 years making over 50 posters and infographics on my free time.</p>
                <p>Upon entering college, I decided to take my interest in graphic design to the next level and started self-learning Photoshop and Illustrator. I’m sure all of us have been here before; there were moments where I would feel incredibly frustrated by my own lack of knowledge, yet filled with excitement knowing what I’ll be able to do in the future. I just needed to put in a little more effort.</p>
                <p>So just a little more effort I put in. Since then, my design skills have taken me places that I would never have dreamt of a few years ago. To this day, it feels unreal that I actually made a Gala banner for the one and only Usain Bolt. I can only continue to dream what I will be able to make in the future.</p>
              </div>
            }
            {
              this.state.aboutPanel === "whatiwanttosee" &&
              <div className="about-description">
                <p>My time living in New York City has taught me so many things about design. Every day, I was surrounded by millions of design choices made over the decades. A lot of them were good decisions that I could take inspiration from. However, a lot of them also left me asking “Why would you make it like that? Why keep it that way? Are others okay with this?”</p>
                <p>That is why when I make something now, I aspire to create something I personally want to see out in the real world. Hopefully when I make something that I can be truly proud of, others will see it in the same positive manner.</p>
              </div>
            }
            {
              this.state.aboutPanel === "mypassions" &&
              <div className="about-description">
                <p>The one thing I absolutely cannot live without is soccer. Ever since the 2002 World Cup in my home country of South Korea, soccer has been engraved deep into my life. I have been playing ever since, going on to captaining my high school soccer team one year. My love for soccer is probably really evident from all the personal projects I work on!</p>
                <p>Other than soccer, I’m an avid fan of video games. I’ve been playing games for a long time now, but it’s actually been fascinating to see the number of people playing games grow ever since quarantine started. Staying at home more also meant that it was easier to invest to build a computer from scratch for both gaming and design purposes!</p>
              </div>
            }

            {
              this.state.showResume &&
              <a href={resume} download="Resume_Sanghoon_Hwang.pdf" target="_blank" rel="noreferrer" className="download-resume">
                <img src={resumeDownloadButton} alt="Resume download button"/>
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
                  <img src={backButtonHover} alt="Back button"/>
                  <span>Back</span>
                </div>
                :
                <div>
                  <img src={resumeButton} alt="Resume button"/>
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
              className={"carousel-button" + (this.state.displayedProject === "motion" ? " active-project" : "")}
              onClick={() => this.setState({displayedProject: "motion"})}
            />
            <div
              className={"carousel-button" + (this.state.displayedProject === "logo" ? " active-project" : "")}
              onClick={() => this.setState({displayedProject: "logo"})}
            />
            <div
              className={"carousel-button" + (this.state.displayedProject === "soccer" ? " active-project" : "")}
              onClick={() => this.setState({displayedProject: "soccer"})}
            />
          </div>
          <div className={"more" + (this.state.displayProjectInfo ? " hidden" : "")} onClick={() => this.setState({displayProjectInfo: true})}><img src={moreButton} alt="More info button"/></div>
          {
            this.state.displayedProject === "afj" &&
            <div className="project">
              <img className={"project-banner" + (this.state.displayProjectInfo ? " more-info" : "")} src={afj} alt="American Friends of Jamaica"/>
              <div className="project-info">
                <h2 className={this.state.displayProjectInfo && "more-info"}>American Friends of Jamaica</h2>
                {
                  this.state.displayProjectInfo &&
                  <div className="project-description">
                    <h3>Honoree/Entertainer Intros</h3>
                    <p>In 2019, I stumbled upon the great opportunity of creating something great. Whilst I was working as a social media intern at the nonprofit organization American Friends of Jamaica, I was able to showcase my design skills to the executive director and was effectively made a graphic design intern. The most exciting project I undertook that summer was designing for the 2019 Hummingbird Gala.</p>
                    <div className="afj1">
                      <img src={afj1_1} />
                      <img src={afj1_3} />
                    </div>
                    <div className="afj2">
                      <img src={afj1_2} />
                      <img src={afj1_4} />
                    </div>
                    <p>The gala held greater meaning than the years prior, as the one and only World Record holder and Olympic Gold Medalist Usain Bolt would be honored at the event. To announce the honorees and the entertainers for 2019’s gala, I created a series of introductions to be posted on The AFJ’s social media platforms, as seen here.</p>
                    <p>The identity of the 2019 Hummingbird Gala was an elegant mix of black and gold; however, I wanted these introduction cards to stand out from the rest of the promotion materials that were created. I made a bold choice incorporating high contrasting accents to ensure they caught the audiences’ eyes and directed the attention to Usain Bolt, which had the highest chance to catch someone’s attention.</p>
                    <div className="afj3">
                      <img src={afj1_6} />
                      <img src={afj1_5} />
                    </div>
                    <p>I took a more traditional approach to the entertainer introduction cards, sticking with the gala’s identity of black and gold. Some adjustments were made to the source photos and backgrounds to keep a uniform feel across the two posts.</p>
                    <h3>Hummingbird 2019 Identity</h3>
                    <div className="afj4">
                      <img src={afj2_1} />
                    </div>
                    <p>I am personally excited to talk about these because this design is the one that Usain Bolt personally said he liked. They highlighted the presence of Usain Bolt using a silhouette of his signature pose. These banners were used for various social media platforms, as well as at the end of every email that was sent out from our email system, in order to promote the 2019 Hummingbird Gala.</p>
                    <div className="afj5">
                      <img src={afj2_2} />
                      <img src={afj2_3} />
                    </div>
                    <div className="afj6">
                      <img src={afj2_4} />
                      <img src={afj2_5} />
                    </div>
                    <p>These were preliminary designs for merchandise to be sold at the gala. Each design featured all three organizations vital to making this gala happen, as well as a simple design of a hummingbird or the silhouette of Usain Bolt previously used on the social media banners.</p>
                    <h3>Annual Report Booklet</h3>
                    <div className="afj7">
                      <img src={afj3_1} />
                      <div>
                        <img src={afj3_2} />
                        <img src={afj3_3} />
                      </div>
                    </div>
                    <p>This booklet serves as The AFJ’s annual report for potential investors who are considering donating to the communities in need in Jamaica. It is used to highlight the impact that the nonprofit organization made over the previous year and provide insight for the investors. Using the colors of the Jamaican Flag was considered at one point; however, I decided in the end that basing the palette around hues of blue would provide a more pleasurable reading experience for the viewers.</p>
                  </div>
                }
              </div>
            </div>
          }
          {
            this.state.displayedProject === "motion" &&
            <div className="project">
              <img className={"project-banner" + (this.state.displayProjectInfo ? " more-info" : "")} src={motionGraphics} alt="Motion Graphics 3D Animation"/>
              <div className="project-info">
                <h2 className={this.state.displayProjectInfo && "more-info"}>Motion Graphics/3D Animation</h2>
                {
                  this.state.displayProjectInfo &&
                  <div className="project-description">
                    <h3>Stamford Bridge Video</h3>
                    <div className="motion1">
                      <iframe  width="712" height="400" src="https://www.youtube.com/embed/lV65jreWZ5Q" />
                    </div>
                    <p>This video is my first venture into Cinema4D and the world of 3D in general. The video tells a story from Timo Werner’s perspective, a newly recruited soccer player from Germany. The camera alternates between POV shots and Television views, showing the game in which Timo Werner scored his first goal for his new team, Chelsea FC. The decision to leave most of the area largely untextured was a conscious choice to highlight the mental focus of the player.</p>
                    <p>This project initially started in AfterEffects, but ultimately the decision to use 3D objects led to the shift to Cinema 4D. Cinema 4D allowed for new layers of dynamism to be added to the project, as physics and character animations were now possible. This project was largely a learning experience as I got used to the program but I was still able to create something rather elaborate, especially with the post-compositing in AfterEffects. Most of the textures used in Cinema 4D, as well as the motion graphics present, were initially created using Adobe Illustrator.</p>
                    <h3>Logo Motion Video</h3>
                    <div className="motion2">
                      <img src={motion2_1} />
                      <img src={motion2_2} />
                    </div>
                    <p>This brand’s logo is a semi-symmetric, geometric “S” shape encased in a border sharing the same gradient fill. This logo was designed to be able to elegantly spin as a 3D object, all while cleanly presenting itself in 2D. This logo also works in two-tone settings, which is vital for many situations in digital interfaces.</p>
                    <div className="motion1">
                      <iframe  width="712" height="400" src="https://www.youtube.com/embed/D3JXx7oylTw" />
                    </div>
                    <p>My first venture into AfterEffects served as an advertisement of sorts for this branding. The two main themes of this video was the use of lens flares and the use of diamond-shaped panels resembling the border of the logo.</p>
                    <p>A concept storyboard was also created for an alternative animation. In this concept, the logo would fold itself like an origami. This origami is actually foldable in real life using the steps listed above.</p>
                  </div>
                }
              </div>
            </div>
          }
          {
            this.state.displayedProject === "logo" &&
            <div className="project">
              <img className={"project-banner" + (this.state.displayProjectInfo ? " more-info" : "")} src={ecst} alt="East Coast Surf Tribe Logo"/>
              <div className="project-info">
                <h2 className={this.state.displayProjectInfo && "more-info"}>Logo Designs</h2>
                {
                  this.state.displayProjectInfo &&
                  <div className="project-description">
                    <h3>ECST Logo/Packaging</h3>
                    <div className="afj4">
                      <img src={logo1_1} />
                    </div>
                    <p>The logo of East Coast Surf Tribe invokes what it strives to invoke in its practices. Free-flowing, clean waves of the ocean. The negative space found within the letters of “ECST” is reminiscent of designs found in surf culture, adding a layer of depth to the logo.</p>
                    <div className="afj2">
                      <img src={logo1_2} />
                      <img src={logo1_3} />
                    </div>
                    <p>Some variants of the main logo, keeping the same motif of the waves of the ocean.</p>
                    <div className="afj2">
                      <img src={logo1_4} />
                      <img src={logo1_5} />
                    </div>
                    <p>This packaging design was used for ECST merchandise such as shirts and stickers. It incorporates the blue color scheme reminiscent of the logo, present in the center of the package design. At the bottom of the design, ECST’s slogan, “Souls to Seas,” is written in a script font that resonates with the waves of the ocean.</p>
                    <h3>Number Logos</h3>
                    <div className="logo1">
                      <img className="first-logo" src={logo2_1} />
                      <img className="second-logo" src={logo2_2} />
                    </div>
                    <p>These two logos were created for personal use. They were based on two numbers that are deemed “lucky” in many cultures, especially those of the Eastern countries.</p>
                    <p>For instance, this geometric logo is created by combining elements of the numbers 2 and 9, and how they can be combined to create the number 7.</p>
                    <div className="logo1">
                      <img className="first-logo" src={logo2_3} />
                      <img className="second-logo" src={logo2_4} />
                    </div>
                    <p>This logo’s motif is based on two things: a mobius strip and a whip. Using the fluid shape of the number 8 and its unending nature of it, this logo breaks away from the emerging trend of geometric logos, while being able to be used in a two-tone color scheme.</p>
                    <h3>Lush Logo Redesign</h3>
                    <div className="afj4">
                      <img src={logo3_1} />
                    </div>
                    <p>This is a conceptual redesign of the cosmetic brand Lush’s logo. Currently, Lush is known for their stark black and white identity, which contrasts with their extremely colorful products. The most appealing part of their branding to me is this contrast, which I wanted to incorporate into the logo itself. Taking into account their belief for environmentally friendly products, I incorporated a set of leaves that contrast with the main part of the logo.</p>
                    <div className="logo2">
                      <img src={logo3_2} />
                      <img src={logo3_3} />
                      <img src={logo3_4} />
                    </div>
                    <p>Here are some variants that can potentially be used. For example, the storefront can have LED signages that change the color of the leaves as needed. Perhaps, the colors can represent the season or the new products they are promoting at the time.</p>
                  </div>
                }
              </div>
            </div>
          }
          {
            this.state.displayedProject === "soccer" &&
            <div className="project">
              <img className={"project-banner" + (this.state.displayProjectInfo ? "  more-info" : "")} src={soccer} alt="Chelsea Infographic" />
              <div className="project-info">
                <h2 className={this.state.displayProjectInfo && "more-info"}>Soccer Posters</h2>
                {
                  this.state.displayProjectInfo &&
                  <div className="project-description">
                    <h3>Chelsea Posters</h3>
                    <div className="soccer1">
                      <div>
                        <img src={soccer1_1} />
                        <img src={soccer1_2} />
                        <img src={soccer1_3} />
                        <img src={soccer1_4} />
                      </div>
                      <img src={soccer1_5} />
                    </div>
                    <p>If there was a series of projects to look back upon to see the development of my graphic design skills, it would be this one. Ever since my first interactions with digital creation tools, I made a tradition of making annual roster posters for various soccer teams. To showcase this development, here is the lineup of posters for the team I support, Chelsea FC. The first few posters were made using an online website called Piktochart, before moving on to Adobe Photoshop and Adobe Illustrator. Every year, I would try to implement a new technique I learned over the last year to improve upon the last iteration.</p>
                    <div className="soccer2">
                      <img src={soccer1_6} />
                    </div>
                    <p>This is the most recent version of the poster, which I turned more into an infographic over the previous iterations. By implementing panel designs prevalent in many modern UIs, I was able to present more information to provide a more in-depth view of the team.</p>
                    <h3>Premier League Posters</h3>
                    <div className="soccer3">
                      <img src={soccer2_3} />
                      <div>
                        <img src={soccer2_1} />
                        <img src={soccer2_2} />
                      </div>
                      <img src={soccer2_4} />
                    </div>
                    <p>Here are some of the other teams’ posters created over the years. Each poster incorporated themes of the teams they are representing.</p>
                    <h3>Korea Posters</h3>
                    <div className="soccer4">
                      <img src={soccer3_1} />
                      <img src={soccer3_2} />
                    </div>
                    <p>Occasionally, I would venture outside club teams and make similar posters for the Korean National Team.</p>
                    <div className="soccer5">
                      <img src={soccer3_3} />
                      <img src={soccer3_4} />
                    </div>
                    <p>To celebrate the roster selection that decided which players will be representing my home country, I created posters for each of the 23 players chosen to take the trip to Russia. I incorporated the colors prevalent on the jersey that Korea would be wearing the tournament, as well as tiger claw marks that represent the national fauna.</p>
                  </div>
                }
              </div>
            </div>
          }
        </div>
        <div id="contact" className="content">
          <h1>Want something designed?</h1>
          <h2>I am available for freelance projects now, and full-time employment starting June 2021.</h2>
          <h3>The best place to contact me is at my email!</h3>
          <div className="contact-buttons">
            <img id="email-expanded" src={emailExpanded} alt="Email expanded banner" />
            <svg
              onMouseOver={() => document.getElementById('email-expanded').style.display = "block"}
              onMouseOut={() => document.getElementById('email-expanded').style.display = "none"}
              className="contact-email"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 141.42 141.42"
            >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <rect onClick={() => navigator.clipboard.writeText("sangs.contact@gmail.com")} style={{fill: "#ff4a4f", cursor: "pointer"}} x="20.71" y="20.71" width="100" height="100" transform="translate(-29.29 70.71) rotate(-45)"/>
                    <path onClick={() => navigator.clipboard.writeText("sangs.contact@gmail.com")} style={{fill: "#f3f3f5", cursor: "pointer"}} d="M74,42.71c15.11,0,24.92,11.07,24.92,24.2,0,13.29-8.78,19.54-15.66,19.54-4.75,0-7.2-2.85-7.67-5.85l-.08-.48a14.5,14.5,0,0,1-11.39,6.33c-7.68,0-12.26-5.61-12.26-13.29,0-10.6,8.7-19.38,17.87-19.38,4.75,0,8.23,2.3,9.89,5.3l.87-4.19h8.94l-4,19.3a15.39,15.39,0,0,0-.23,1.9c0,2.45,1.26,3.56,2.92,3.56,3.09,0,7.44-3.72,7.44-12.74,0-12.49-8.54-21.11-21.83-21.11-15,0-28,13.13-28,27.92,0,12.41,9.49,22,22.3,22a26.86,26.86,0,0,0,14.48-4.36l1.66,2.38a30.49,30.49,0,0,1-16.45,5c-14.4,0-25.08-10.84-25.08-24.84C42.55,57,57.5,42.71,74,42.71ZM78.3,64.94a7.11,7.11,0,0,0-6.4-4C65.57,60.9,61,66.6,61,72.37c0,4.11,2.53,7,6.57,7s7-2.77,8.78-5.14Z"/>
                  </g>
                </g>
            </svg>
            <img id="linkedin-expanded" src={linkedinExpanded} alt="LinkedIn expanded banner" />
            <svg
              onMouseOver={() => document.getElementById('linkedin-expanded').style.display = "block"}
              onMouseOut={() => document.getElementById('linkedin-expanded').style.display = "none"}
              className="contact-linkedin"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 141.42 141.42"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <a className="contact-linkedin" href="https://linkedin.com/in/sanghoon-hwang/" target="_blank" rel="noreferrer">
                    <polygon style={{fill: "#4521aa"}} points="65.27 5.44 45.33 25.38 25.38 45.33 5.44 65.27 0 70.71 5.44 76.15 45.33 116.04 50.05 120.76 50.05 120.76 65.27 135.98 70.71 141.42 76.15 135.98 116.04 96.09 129.17 82.96 135.98 76.15 141.42 70.71 135.98 65.27 116.04 45.33 76.15 5.44 70.71 0 65.27 5.44"/>
                    <path style={{fill: "#f3f3f5"}} d="M92.43,91.57c0,.69-.22.87-.89.86q-3.63,0-7.26,0c-.65,0-.86-.19-.86-.84,0-4.92,0-9.85,0-14.77a4.87,4.87,0,0,0-2-4.19A4.22,4.22,0,0,0,77,72.07a4.6,4.6,0,0,0-2.84,3.7,11.47,11.47,0,0,0-.09,1.66q0,7,0,14.11c0,.66-.16.9-.86.89q-3.7,0-7.38,0c-.58,0-.76-.18-.76-.75q0-12.93,0-25.85c0-.53.16-.74.71-.73q3.78,0,7.57,0c.54,0,.74.19.72.73,0,.71,0,1.43,0,2.14,0,.21-.08.44.11.61.19,0,.24-.13.33-.24,4-5,10.47-4.91,14.75-.64a10.29,10.29,0,0,1,3.12,7.55C92.43,80.69,92.41,86.13,92.43,91.57Z"/>
                    <path style={{fill: "#f3f3f5"}} d="M59.78,54.33a5.45,5.45,0,0,1-5.4,5.45A5.36,5.36,0,0,1,49,54.37,5.28,5.28,0,0,1,54.38,49,5.36,5.36,0,0,1,59.78,54.33Z"/>
                    <path style={{fill: "#f3f3f5"}} d="M58.86,65.84q0,12.93,0,25.84c0,.58-.22.75-.77.75-2.47,0-4.93,0-7.38,0-.65,0-.87-.17-.87-.84,0-4.28,0-8.57,0-12.85s0-8.54,0-12.81c0-.67.22-.84.87-.84q3.67,0,7.38,0C58.65,65.09,58.86,65.26,58.86,65.84Z"/>
                  </a>
                </g>
              </g>
            </svg>
            <img id="instagram-expanded" src={instagramExpanded} alt="Instagram expanded banner" />
            <svg
              onMouseOver={() => document.getElementById('instagram-expanded').style.display = "block"}
              onMouseOut={() => document.getElementById('instagram-expanded').style.display = "none"}
              className="contact-instagram"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 141.42 141.42"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <a className="contact-instagram" href="https://www.instagram.com/sangs_cc/" target="_blank" rel="noreferrer">
                    <polygon style={{fill: "#4521aa"}} points="65.27 5.44 45.33 25.38 25.38 45.33 5.44 65.27 0 70.71 5.44 76.15 45.33 116.04 50.05 120.76 50.05 120.75 65.27 135.98 70.71 141.42 76.15 135.98 116.04 96.09 129.17 82.96 135.98 76.15 141.42 70.71 135.98 65.27 116.04 45.33 76.15 5.44 70.71 0 65.27 5.44"/>
                    <path style={{fill: "#f3f3f5"}} d="M98.18,56.81V84.67c-.05.28-.11.56-.16.84a15,15,0,0,1-8.34,11.17,16.22,16.22,0,0,1-5,1.49H56.82a15.88,15.88,0,0,1-5.14-1.56c-5.22-2.81-8.23-7.15-8.35-13.09-.17-8.51,0-17,0-25.55a13.67,13.67,0,0,1,.72-4.2A15.3,15.3,0,0,1,58.63,43.25c8.09.06,16.17,0,24.26,0a14,14,0,0,1,2.14.11,15.12,15.12,0,0,1,11.69,8.47A16.48,16.48,0,0,1,98.18,56.81ZM48.28,70.74h0V82.58a13.85,13.85,0,0,0,.13,2.13A10.17,10.17,0,0,0,58,93.2c8.43,0,16.86,0,25.29,0a10,10,0,0,0,1.44-.12,10.15,10.15,0,0,0,8.48-9.6c0-8.43,0-16.86,0-25.29a10,10,0,0,0-.13-1.44,10.14,10.14,0,0,0-9.6-8.48c-8.43,0-16.86,0-25.28,0a9.88,9.88,0,0,0-1.44.13A10.18,10.18,0,0,0,48.29,58C48.25,62.24,48.28,66.49,48.28,70.74Z"/>
                    <path style={{fill: "#f3f3f5"}} d="M70.8,84.92A14.18,14.18,0,1,1,84.93,70.7,14.19,14.19,0,0,1,70.8,84.92Zm9.14-14.16a9.19,9.19,0,1,0-9.22,9.16A9.17,9.17,0,0,0,79.94,70.76Z"/>
                    <path style={{fill: "#f3f3f5"}} d="M85.51,59.65a3.6,3.6,0,0,1-3.65-3.57,3.63,3.63,0,1,1,7.25,0A3.61,3.61,0,0,1,85.51,59.65Z"/>
                  </a>
                </g>
              </g>
            </svg>
            <img id="twitter-expanded" src={twitterExpanded} alt="Twitter expanded banner" />
            <svg
              onMouseOver={() => document.getElementById('twitter-expanded').style.display = "block"}
              onMouseOut={() => document.getElementById('twitter-expanded').style.display = "none"}
              className="contact-twitter"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 141.42 141.42"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <a className="contact-twitter" href="https://twitter.com/Sangs_cc" target="_blank" rel="noreferrer">
                    <polygon style={{fill: "#4521aa"}} points="65.27 5.44 45.33 25.38 25.38 45.33 5.44 65.27 0 70.71 5.44 76.15 45.33 116.04 50.05 120.76 50.05 120.75 65.27 135.98 70.71 141.42 76.15 135.98 116.04 96.09 129.17 82.96 135.98 76.15 141.42 70.71 135.98 65.27 116.04 45.33 76.15 5.44 70.71 0 65.27 5.44"/>
                    <path style={{fill: "#f3f3f5"}} d="M45.72,86.44a6.85,6.85,0,0,1,1.36.06,20.67,20.67,0,0,0,13.31-4l.22-.19a3,3,0,0,0-1.15-.22,10.2,10.2,0,0,1-8-6.52c-.22-.53-.18-.58.4-.5a10.15,10.15,0,0,0,3.82-.21,10.22,10.22,0,0,1-4.14-2,10.08,10.08,0,0,1-3.81-7.12c0-.21-.05-.42-.07-.63,0-.39.11-.47.46-.29a9.35,9.35,0,0,0,2.76.92c.37.07.74.11,1.15.16,0-.22-.2-.27-.31-.36a10.1,10.1,0,0,1-3.9-7.22,10,10,0,0,1,1.06-5.53c.31-.61.32-.62.76-.1a28.8,28.8,0,0,0,7.4,6.24,28.36,28.36,0,0,0,10.86,3.76q.9.12,1.8.18c.52,0,.58-.05.5-.54a9.7,9.7,0,0,1,.86-6.09,10.32,10.32,0,0,1,16.49-3,.78.78,0,0,0,.79.2,20.72,20.72,0,0,0,5.59-2.14.62.62,0,0,1,.48-.13,10.33,10.33,0,0,1-4.25,5.51,20.61,20.61,0,0,0,5.48-1.51c.12.22,0,.3-.09.4A19.65,19.65,0,0,1,91.3,60a1.33,1.33,0,0,0-.58,1.23,29.56,29.56,0,0,1-6.56,19.12A27.26,27.26,0,0,1,66.24,90.74a29.39,29.39,0,0,1-18.73-3.19,19.59,19.59,0,0,0-1.79-1Z"/>
                  </a>
                </g>
              </g>
            </svg>
          </div>
          <h3 className="purple">... but let's connect on other platforms as well!</h3>
          <span class="credit">Website designed by Sang, built by <a href="https://github.com/gnaww" target="_blank" rel="noreferrer">Will</a></span>
        </div>
      </div>
    );
  }
}

export default App;
