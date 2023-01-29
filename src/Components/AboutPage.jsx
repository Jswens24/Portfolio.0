import React from 'react';
import './AboutPage.css'

const AboutPage = () => {

    return (
        <div id='about-page' className='start-about-page'>
            <div className='gold-box-div'>
                <div className='about-me-pic-div'>
                    <h2 className='about-me-h2'>ABOUT ME</h2>
                    <img className='portfolio-pic' src='https://drive.google.com/uc?export=view&id=1Vqvp_DNooIELcVbju_wRweselPFDuOwT' alt='picture of me!' />
                </div>
                <div className="bio-education-div">
                    <p className='about-me-bio'>Hi, I’m Jessica!  I’m from Salt Lake City, and I’m a Web Developer.  I am also a serial learner, whether it's learning a new skill, hobby, or sport, I am always learning something new.  After working in finance and then getting a degree in Business Administration.  I decided to take a Coding Basics class and I immediately fell in love with programming.  I love the challenge and creativity that it offers.  I attended Devmountain's Web Development program where I learned the foundations of the web as well as specialized in React. </p>
                    <div className="education-div">
                        <h3>EDUCATION</h3>
                        <h4 className='school'>Strayer University March 2022</h4>
                        <p className='type-of-degree'>Associates in Business Administration</p>
                        <br />
                        <h4 className='school'>Devmountain December 2022</h4>
                        <p className='type-of-degree'> Web Development Program</p>
                    </div>
                </div>
            </div>
            <div className="about-arrow-div">
                <a href="#project-page"><div className='arrow down'></div></a>
                <a href="#project-page"><div className='arrow down'></div></a>
                <a href="#project-page"><div className='arrow down'></div></a>
            </div>
        </div>
    )
};

export default AboutPage;