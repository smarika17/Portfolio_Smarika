import "./Project.css";
import React, { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';


import IcognitoInsights from "./projects/icognitoInsights";

import JavaChat from "./projects/javaChat";
import Secret from "./projects/secret";
import Listify from "./projects/listify";
import Dynamo from "./projects/dynamo";
import Bill from "./projects/bill";

export default function Projects() {
    const [activeProject, setActiveProject] = useState<string>("");
    const [animation, setAnimation] = useState<string>("");

    const showProject = (project: string) => {
        setAnimation("zoom-out full-page-animation");
        setTimeout(() => {
            setActiveProject(project);
            setAnimation("zoom-in full-page-animation");
        }, 10);
    }

    const goBack = () => {
        setAnimation("zoom-out full-page-animation");
        setTimeout(() => {
            setActiveProject("");
            setAnimation("zoom-in full-page-animation");
        }, 10);
    }

    return (
        <div className={animation}>
            {activeProject === "" ? (
                <div className="project-main">
                    <h1 className="software-projects">Fullstack Projects</h1>
                    <div className="wrapper">
                        <div className="project">
                            <div className="project-box"
                                onClick={() => showProject("icognitoInsights")}>
                                <div className="img-div">
                                    <img src="./bg.jpg" alt="icognito" />
                                </div>
                                <h1>Echoes Anon</h1>
                                <p>Nodejs, ExpressJs, MongoDB, Next.js, Typescript, EmailJS, ShadCN UI, Zod, CSS</p>
                            </div>

                            <div className="project-box"
                                onClick={() => showProject("secret")}>
                                <div className="img-div">
                                    <img src="./bg.jpg" alt="blog" />
                                </div>
                                <h1>Add your Secrets</h1>
                                <p> JavaScript, Node.js, ExpressJs, MongoDB</p>
                            </div>

                            <div className="project-box"
                                onClick={() => showProject("Listify")}>
                                <div className="img-div">
                                    <img src="./bg.jpg" alt="Listify" />
                                </div>
                                <h1>Listify</h1>
                                <p>Node JS, Express JS, MongoDB, Bootstrap, CSS</p>
                            </div>

                            
                        </div>
                    </div>

                    {/* Java Projects */}
                    <div className="project-main">
                        <h1 className="software-projects">Java Projects</h1>
                        <div className="wrapper">
                            <div className="project">
                                <div className="project-box"
                                    onClick={() => showProject("javaChat")}>
                                    <div className="img-div">
                                        <img src="./javabg.png" alt="cbt1" />
                                    </div>
                                    <h1>JavaChatApplication</h1>
                                    <p> Socket Programming, OOPS, Jframe, Jbutton, Jlayout (JAVA swing concept)</p>
                                </div>

                                <div className="project-box"
                                    onClick={() => showProject("Dynamo")}>
                                    <div className="img-div">
                                        <img src="./javabg.png" alt="blog" />
                                    </div>
                                    <h1>Spring Dynamo Employee API </h1>
                                    <p>SpringBoot, DynamoDB, PostmanAPI, maven</p>
                                </div>

                                <div className="project-box"
                                    onClick={() => showProject("Bill")}>
                                    <div className="img-div">
                                        <img src="./javabg.png" alt="YouTube Bookmark 1" />
                                        {/* <img src="./ytbookmark-2.png" alt="YouTube Bookmark 2" /> */}
                                    </div>
                                    <h1>Billgenerator</h1>
                                    <p>Java, Visual studio code</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="project-explore">
                    <Button className="backbtn" onClick={goBack} variant="outlined"><ArrowBackIcon style={{ marginRight: 2 }} /> Back</Button>
                    
                    {activeProject === "icognitoInsights" && <IcognitoInsights />}
                   
                    {activeProject === "secret" && <Secret />}
                    {activeProject === "Listify" && <Listify />}
                    {activeProject === "javaChat" && <JavaChat />}
                    {activeProject === "Dynamo" && <Dynamo />}
                    {activeProject === "Bill" && <Bill />}
                </div>
            )}
        </div>
    );
}
