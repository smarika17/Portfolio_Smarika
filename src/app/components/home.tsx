"use client";
import React, { useState, useEffect } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Image from "next/image";
import "./home.css";
import Contact from "./Contact";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import { dir } from "console";
import XIcon from '@mui/icons-material/X';
export default function MainPage() {
  const [activeComponent, setActiveComponent] = useState("about");
  const [transitionClass, setTransitionClass] = useState("");
  const [smallScreen, setSmallScreen] = useState(false);

  const componentsOrder = ["about", "resume", "projects", "contact"];

  const changeComponent = (component: any) => {
    if (component != activeComponent) {
      const currentIndex = componentsOrder.indexOf(activeComponent);
      const targetIndex = componentsOrder.indexOf(component);
      const direction = currentIndex > targetIndex ? "left" : "right";

      if (direction === "left") {
        setTransitionClass("transition-exit-left");
        setTimeout(() => {
          setActiveComponent(component);
          setTransitionClass("transition-enter-left");
        }, 0);
      } else if (direction === "right") {
        setTransitionClass("transition-exit-right");
        setTimeout(() => {
          setActiveComponent(component);
          setTransitionClass("transition-enter-right");
        }, 0);
      }
    }

  };

  return (
    <main className="main">
      <div className="left-main">
        <div className="left-mask"></div>
        <div className="subLeft-main">
          <div className="Image">
            <Image
              src="/my-avatar.png"
              alt="My Avatar"
              width={150}
              height={200}
            />
          </div>

          <div className="userInfo">
            <h1>Smarika Malviya</h1>
            <p>Fullstack Developer</p>
          </div>

          <div className="details">
            <div className="email details-div">
              <EmailOutlinedIcon className="detail-icon" />
              <div className="subdetails">
                <p>Email</p>
                <h5>malviyasmarika@gmail.com</h5>
              </div>
            </div>
            {/* <div className="phone details-div">
              <PhoneAndroidOutlinedIcon className="detail-icon" />
              <div className="subdetails">
                <p>Phone</p>
                <h5>+91 xxxxxx</h5>
              </div>
            </div> */}

            <div className="location details-div">
              <FmdGoodOutlinedIcon className="detail-icon" />
              <div className="subdetails">
                <p>Location</p>
                <h5>Bhopal, India</h5>
              </div>
            </div>
          </div>

          <button className="small-screen-btn"
            onClick={() => setSmallScreen(!smallScreen)}
          >
            {smallScreen ? <MenuOpenIcon /> : <MenuIcon />}
          </button>

          {smallScreen ? (
            <div className="small-screen-left">
              <div className="sm-details">
                <div className="sm-email sm-details-div">
                  <EmailOutlinedIcon className="detail-icon" />
                  <div className="sm-subdetails">
                    <p>Email</p>
                    <h5>malviyasmarika@gmail.com</h5>
                  </div>
                </div>
                {/* <div className="sm-phone sm-details-div">
                  <PhoneAndroidOutlinedIcon className="detail-icon" />
                  <div className="sm-subdetails">
                    <p>Phone</p>
                    <h5>+91 xxxxxx</h5>
                  </div>
                </div> */}

                <div className="sm-location sm-details-div">
                  <FmdGoodOutlinedIcon className="detail-icon" />
                  <div className="sm-subdetails">
                    <p>Location</p>
                    <h5>Bhopal, India</h5>
                  </div>
                </div>
              </div>
              {/* medium screen */}
              <span className="sm-socials">
                <a href="https://www.linkedin.com/in/smarika-malviya-288677227/" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon className="social-icon" />
                </a>

                <a href="https://github.com/smarika17" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon className="social-icon" /> 
                </a>

                <a href="https://x.com/smarika_17" target="_blank" rel="noopener noreferrer">
                  <XIcon className="social-icon" />
                </a>
              </span>

              <span className="smm-socials">
  
                <a href="https://www.linkedin.com/in/smarika-malviya-288677227/" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon style={{ fontSize: 20 }} />
                </a>

                <a href="https://github.com/smarika17" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon style={{ fontSize: 20 }} />
                </a>

                <a href="https://x.com/smarika_17" target="_blank" rel="noopener noreferrer">
                  <XIcon style={{ fontSize: 20 }} />
                </a>
        
              </span>
            </div>
          ) : (
            <div className="small-screen-userInfo">
              <div className="sm-Image">
                <Image
                  src="/my-avatar.png"
                  alt="My Avatar"
                  width={150}
                  height={200}
                />
              </div>

              <div className="sm-userInfo">
                <h1>Smarika Malviya</h1>
                <p>Fullstack Developer</p>
              </div>
            </div>
          )}
          {/* full screen */}
          <span className="socials">
            <a href="https://www.linkedin.com/in/smarika-malviya-288677227/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="social-icon" />
            </a>
            <a href="https://github.com/smarika17" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="social-icon" />
            </a>
            <a href="https://x.com/smarika_17" target="_blank" rel="noopener noreferrer">
                  <XIcon className="social-icon" />
            </a>
          </span>
        </div>
      </div>

      <div className="right-main">
        <div className="right-mask"></div>
        <div className="subRight-main">
          <div className="header">
            {activeComponent === "about" && <h1>About</h1>}
            {activeComponent === "resume" && <h1>Certifications</h1>}
            {activeComponent === "projects" && <h1>Projects</h1>}
            {activeComponent === "contact" && <h1>Contact</h1>}
            <div className="header-details">
              <h2 className={activeComponent === "about" ? "btn-active" : "btn-normal"} onClick={() => changeComponent("about")}>About</h2>
              <h2 className={activeComponent === "resume" ? "btn-active" : "btn-normal"} onClick={() => changeComponent("resume")}>Certified</h2>
              <h2 className={activeComponent === "projects" ? "btn-active" : "btn-normal"} onClick={() => changeComponent("projects")}>Projects</h2>
              <h2 className={activeComponent === "contact" ? "btn-active" : "btn-normal"} onClick={() => changeComponent("contact")}>Contact</h2>
            </div>
          </div>

          <div className={`content ${transitionClass}`}>
            {activeComponent === "about" && <About />}
            {activeComponent === "resume" && <Resume />}
            {activeComponent === "projects" && <Projects />}
            {activeComponent === "contact" && <Contact />}
          </div>
        </div>
      </div>
    </main>
  );
}