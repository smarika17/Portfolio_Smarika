import Diversity1Icon from '@mui/icons-material/Diversity2'; import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import "./Resume.css";
export default function Resume() {
    return (
        <>
            <div className="education">
                <div className="education-left">
                    <div className="education-line"></div>
                    <SchoolIcon className="education-icon" />
                    <RadioButtonCheckedIcon className='education-point1' />
                    {/* <RadioButtonCheckedIcon className='education-point2' />
                    <RadioButtonCheckedIcon className='education-point3' /> */}
                </div>
                <div className="education-right">
                    <h1 className="Education-Section">AWS</h1>
                    <div className="college">
                        <h1>AWS Certified Cloud Practitioner 
                            <a href="https://drive.google.com/file/d/1TP2hO42Z0cMeCcBK9bj9TkRlgLCVYrIT/view?usp=sharing"><OpenInNewIcon style={{ color: "20a4b6", fontSize: "1rem", marginLeft: "7px" }} /></a>
                        </h1>
                        <h3>Jan 2024 - Jan 2027</h3>
                        <p>The AWS Certified Cloud Practitioner validates foundational, high-level understanding of AWS Cloud, services, and terminology.  This is a good starting point on the AWS Certification journey for individuals with no prior IT or cloud experience switching to a cloud career or for line-of-business employees looking for foundational cloud literacy. </p>
                    </div>

                    {/* <div className="class-12">
                        <h1>Hind Public Senior Secondary School, Pilani, Jhunjhunu, Rajasthan</h1>
                        <h3>2019</h3>
                        <p>RBSE | Class XII <b> (Score: 83 %) </b> </p>
                    </div>

                    <div className="class-10">
                        <h1>Hind Public Senior Secondary School, Pilani, Jhunjhunu, Rajasthan</h1>
                        <h3>2017</h3>
                        <p>RBSE | Class X <b> (Score: 91.67 %) </b> </p>
                    </div> */}
                </div>
            </div>

            <div className="education">
                <div className="education-left">
                    <div className="education-line"></div>
                    <SchoolIcon className="education-icon" />
                    <RadioButtonCheckedIcon className='education-point1' />
                    {/* <RadioButtonCheckedIcon className='education-point2' />
                    <RadioButtonCheckedIcon className='education-point3' /> */}
                </div>
                <div className="education-right">
                    <h1 className="Education-Section">Oracle</h1>
                    <div className="college">
                        <h1>Oracle Certified Professional JAVA SE-11 Developer
                        <a href="https://drive.google.com/file/d/1J43gCbU_sHMWstI0VdZN_NEcPr5gckXh/view?usp=sharing"><OpenInNewIcon style={{ color: "20a4b6", fontSize: "1rem", marginLeft: "7px" }} /></a>
                        </h1>

                        <h3>Jan 2024</h3>
                        <p>Candidates who hold this certification have demonstrated proficiency in Java (Standard Edition) software development recognized by a wide range of world-wide industries. They have also exhibited thorough and broad knowledge of the Java programming language, coding practices and utilization of new features incorporated into Java SE 11.
                        <br/>
By passing the required exam, a certified individual proves tremendous fluency in Java SE and acquisition of the valuable professional skills required to be a Java software developer. This includes a deep understanding of object-orientation, functional programming through lambda expressions and streams, and modularity. </p>
                    </div>
                </div>
            </div>

            <div className="Position-of-Responsibility">
                <div className="Por-top">
                    <SchoolIcon className="Por-icon" />
                    <h1 className="Por-Section">Other Certifications</h1>
                </div>
                <div className="Por-2">
                    <h1> <LooksOneIcon className='number-icon' />The Bits and Bytes of Computer Networking, Coursera 
                    <a href="https://www.coursera.org/account/accomplishments/certificate/A35YWFBBR5R7"><OpenInNewIcon style={{ color: "20a4b6", fontSize: "1rem", marginLeft: "7px" }} /></a>
                    </h1>
                    <h3>Jan 2023</h3>
                    {/* <p>Involved in the design and development of the institution’s website, specifically focusing on incorporating the
                        detailed information of faculties. By organizing and presenting the faculty information in a user-friendly manner, we
                        aimed to provide visitors with easy access to relevant details, fostering a seamless browsing experience.</p> */}
                </div>
                <div className="Por-2">
                    <h1><LooksTwoIcon className='number-icon' />Introduction To Internet Of Things, NPTEL, IIT Kharagpur
                        <a href="https://www.linkedin.com/in/smarika-malviya-288677227/overlay/1716196062666/single-media-viewer/?profileId=ACoAADjfn8gBW1lX0chEE_EIftf2SYTgVLvgDiA"><OpenInNewIcon style={{ color: "20a4b6", fontSize: "1rem", marginLeft: "7px" }} /></a>
                    </h1>
                    <h3>April 2024</h3>
                    {/* <p>Managed multiple events for Aayaam a Student’s Society that aims to promote diversity of Northern India within the
                        Campus. Aayaam organizes Hindi literary competitions at inter-college and intra-college levels, promoting creativity
                        in Hindi writing and Led cultural celebrations for festivals like Holi, Hindi Diwas, Navratri, Diwali, and more.</p> */}
                </div>
            </div>
        </>
    );
}