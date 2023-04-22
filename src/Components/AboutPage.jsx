import React, { useEffect } from 'react';
import './AboutPage.css'

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div id='about-page' className='start-about-page'>
            <div className='gold-box-div'>
                <div className='about-me-pic-div'>
                    <h2 className='about-me-h2'>ABOUT ME</h2>
                    <img className='portfolio-pic' src='https://drive.google.com/uc?export=view&id=1Vqvp_DNooIELcVbju_wRweselPFDuOwT' alt='me!' />
                </div>
                <div className="bio-education-div">
                    <p className='about-me-bio'>Hi, I’m Jessica!  I’m from Salt Lake City, and I’m a Web Developer.  I am also a serial learner, whether it's learning a new skill, hobby, or sport, I am always learning something new.  After working in finance and then getting a degree in Business Administration.  I decided to take a Coding Basics class and I immediately fell in love with programming.  I love the challenge and creativity that it offers.  I attended Devmountain's Web Development program where I learned the foundations of the web as well as specialized in React. </p>
                    <div className="education-div">
                        <h3>SKILLS</h3>
                        <div className="skills-div">
                            <img alt='react' className='tech-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                            <img alt='html' className='tech-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                            <img alt='css' className='tech-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                            <img alt='tailwind' className='tech-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                            <img alt='javascript' className='tech-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            <img alt='node' className='tech-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                            <img alt='postgres' className='tech-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
                            <img alt='sequelize' className='tech-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />
                            <img alt='express' className='tech-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                            <img alt='redux' className='tech-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                            <img alt='github' className='tech-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                            <img alt='bootstrap' className='tech-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                            <img alt='figma' className='tech-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                            <img alt='heroku' className='tech-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" />
                            <img alt='git' className='tech-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                            <img alt='vscode' className='tech-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                        </div>
                    </div>
                    <div className="education-div">
                        <h3>EDUCATION</h3>
                        <div className="schools">
                            <img className='school-logo' src='https://drive.google.com/uc?export=view&id=1LrHmrXl0hHNtfvByoPmeItiiAufGyhPR' alt='strayer logo' />
                            <h4 className='school'>Strayer University March 2022</h4>
                            <p className='type-of-degree'>Associates in Business Administration</p>
                            <br />
                            <img className='school-logo' src='https://drive.google.com/uc?export=view&id=1xF6gXfys9FvQunw0bbmPkLNkL5yuRaYT' alt='devmountain logo' />
                            <h4 className='school'>Devmountain December 2022</h4>
                            <p className='type-of-degree'> Web Development Program</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutPage;