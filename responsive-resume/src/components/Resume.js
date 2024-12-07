import React from 'react';
import './Resume.css'; // นำเข้าไฟล์สไตล์
import GGEWImage from './img/GGEW.jpg'; // นำเข้ารูปภาพ

const Resume = () => {
    return (
        <div className="container">
            {/* Left Column */}
            <div className="left-column">
                <div className="row profile-img">
                    {/* ใช้รูปภาพที่นำเข้า */}
                    <img src={GGEWImage} alt="Profile of Jirayut" className="circle-img" />
                </div>
                <div className="row about-me">
                    <h2>About Me</h2>
                    <p>I am a computer science student with a strong desire to learn and develop my skills in technology and programming. I have a solid foundation in web development, programming, and data analysis. I am also skilled in teamwork and problem-solving. I am seeking an internship opportunity to gain hands-on experience and apply my knowledge in real-world situations.</p>
                </div>
                <div className="row personal-info">
                    <h2>Personal Information</h2>
                    <ul>
                        <p>Birthdate</p>
                        <li>- 26 Sep 2002</li>
                        <p>Nationality</p>
                        <li>- Thai</li>
                    </ul>
                </div>
                <div className="row hobbies">
                    <h2>Hobbies</h2>
                    <ul>
                        <li>Reading books</li>
                        <li>Listening to music</li>
                        <li>Playing games</li>
                    </ul>
                </div>
                <div className="row languages">
                    <h2>Languages</h2>
                    <ul>
                        <li>Thai (Native)</li>
                        <li>English (Intermediate)</li>
                    </ul>
                </div>
            </div>

            {/* Right Column */}
            <div className="right-column">
                <div className="row header">
                    <div className="name">
                        <ul>
                            <h1 style={{ fontSize: '3rem' }}>Jirayut Maneejunsuk</h1>
                            <h1 style={{ fontSize: '2rem' }}>Student</h1>
                        </ul>
                    </div>
                    <div className="contact">
                        <h2>Contact</h2>
                        <ul>
                            <li>Phone: 094-452-3900</li>
                            <li>Email: <a href="mailto:jirayut.mane@gmail.com">jirayut.mane@gmail.com</a></li>
                            <li>linkedin.com: <a href="https://linkedin.com/in/jirayut-maneejunsuk-03129232b">linkedin.com</a></li>
                            <li>github.com: <a href="https://github.com/Jirayut053">github.com/Jirayut053</a></li>
                            <p>Bang Rai, Phra Nakhon Si Ayutthaya 13290</p>
                        </ul>
                    </div>
                </div>
                <div className="row education">
                    <h2>Education</h2>
                    <ul>
                        <p>(2564 -2567)</p>
                        <li>Suan Sunandha Rajabhat University Computer Science</li>
                        <p>3.41</p>
                        <h1> </h1>
                        <p>(2564 -2567)</p>
                        <li>Bang Pa-In "Rachanukroh 1" School </li>
                        <p>3.38</p>
                    </ul>
                </div>
                <div className="row experience">
                    <h2>Experience</h2>
                    <p>(Sep 2024 - Sep 2024)</p>
                    <li>Developed a responsive BMI Calculator with HTML, CSS, and JavaScript, using conditional logic to display BMI ranges</li>
                    <p>(Oct 2023 - Nov 2023)</p>
                    <li>Developed a Python model to predict natural rubber production in Thailand using environmental data, with statistical analysis and visualizations</li>
                </div>
                <div className="row skills">
                    <h2>Skills</h2>
                    <div className="skills">
                        <ul>
                            <li>Java</li>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>drawing</li>
                            <li>blender modeling</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
