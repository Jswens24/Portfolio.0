import React from 'react';
import './LandingPage.css';

const LandingPage = () => {

    return (
        <div className='landing-page-main-div'>
            <div className='name-circle'>
                <h1>JESSICA SWENSON</h1>
                <h3 className='web-dev-h3'>web developer</h3>
            </div>
            <div className='scroll-landing-div'>
                <p className='scroll-landing-p'>scroll</p>
                <a href="#about-page"><div className='arrow down'></div></a>
                <a href="#about-page"><div className='arrow down'></div></a>
                <a href="#about-page"><div className='arrow down'></div></a>
            </div>
        </div>
    );
}

export default LandingPage;