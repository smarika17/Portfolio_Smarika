import './About.css';
import CodeIcon from '@mui/icons-material/Code';
export default function About() {
    return (
        <>
            <div style={{ textAlign: "start", color: "gray-700", fontSize: "1rem", marginBottom: "2rem" }}>
            I am a Fullstack Developer with a passion for problem-solving. Whether it's tackling complex challenges, engaging in tech discussions, or even 3 AM debugging sessions, I’m always open to learning and growing. With strong communication, management, and presentation skills, I enjoy building communities and collaborating to create impactful solutions.
            </div>
            <h1 style={{ fontWeight: 800, fontSize: "2rem", margin: "1rem 0rem" }}>What I'm Doing</h1>
            <div className="skills-main">
                <div className="skills">
                    <div className="ui-ux skill-box">
                        <img src="/problem.png" alt="ui" />
                        <div className="skill-discription">
                            <h1>Problem Solving</h1>
                            <p>Solved over 700+ problems on various coding platforms using Java</p>
                        </div>
                    </div>
                    <div className="webdev skill-box">
                        <img src="/server.png" alt="webDev" />
                        <div className="skill-discription">
                            <h1>Cloud computing</h1>
                            <p>Hands-on experience with AWS services and knowledge of 40+ cloud technologies</p>
                        </div>
                    </div>
                </div>
                <div className="skills">
                    <div className="research skill-box">
                        <img src="/webDev.png" alt="Research" />
                        <div className="skill-discription">
                            <h1>Fullstack developer</h1>
                            <p>Quickly adapt to any tech stack, ensuring efficient solutions for diverse development needs.</p>
                        </div>
                    </div>
                    <div className="photograph skill-box">
                        <img src="/writing.png" alt="photograph" />
                        <div className="skill-discription">
                            <h1>Technical writer</h1>
                            <p>Enjoy blogging and creating notes to simplify complex concepts and share knowledge effectively.</p>
                        </div>
                    </div>
                </div>
            </div>
            <h1 style={{ fontWeight: 800, fontSize: "2rem", margin: "1rem 0rem" }}>Technical Skills</h1>
            <div className='technology'>
                <div className="tech-details">
                    <img src="/java.png" alt="arduino" />
                    <h1>Java</h1>
                </div>

                <div className="tech-details">
                    <img src="/springboot.png" alt="aws" />
                    <h1>Spring Boot</h1>
                </div>
                <div className="tech-details">
                    <img src="/aws.png" alt="matlab" />
                    <h1>AWS</h1>
                </div>

                <div className="tech-details">
                    <img src="/java-script.png" alt="java-scrip" />
                    <h1>JavaScript</h1>
                </div>

                <div className="tech-details">
                    <img src="/react.png" alt="react" />
                    <h1>React Js</h1>
                </div>

                <div className="tech-details">
                    <img src="/nextjs.png" alt="nextjs" />
                    <h1>Next Js</h1>
                </div>

                <div className="tech-details">
                    <img src="/typescript.png" alt="typescript" />
                    <h1>TypeScript</h1>
                </div>

                <div className="tech-details">
                    <img src="/express.png" alt="express" />
                    <h1>Express Js</h1>
                </div>

                <div className="tech-details">
                    <img src="/node.png" alt="node" />
                    <h1>node Js</h1>
                </div>

                <div className="tech-details">
                    <img src="/mongobd.png" alt="mongodb" />
                    <h1>mongoDB</h1>
                </div>

                <div className="tech-details">
                    <img src="/sql-server.png" alt="sql" />
                    <h1>SQL</h1>
                </div>

                <div className="tech-details">
                    <img src="/git.png" alt="git" />
                    <h1>Git Bash</h1>
                </div>

                <div className="tech-details">
                    <img src="/github.png" alt="github" />
                    <h1>Github</h1>
                </div>

                <div className="tech-details">
                    <img src="/api.png" alt="api" />
                    <h1>API</h1>
                </div>

                <div className="tech-details">
                    <img src="/mui.png" alt="mui" />
                    <h1>Material Ui</h1>
                </div>
                <div className="tech-details">
                    <img src="/bootstrap.png" alt="bootstrap" />
                    <h1>Bootstrap</h1>
                </div>
                <div className="tech-details">
                    <img src="/html.png" alt="html" />
                    <h1>HTML</h1>
                </div>
                <div className="tech-details">
                    <img src="/css-3.png" alt="css" />
                    <h1>CSS</h1>
                </div>
            </div>
        </>
    )
}