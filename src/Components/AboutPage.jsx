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