import { Link } from 'react-router-dom'
import './LandingPage.css'
import React from 'react'

const LandingPage = () => {
    return (
        <div className='home-computer-div'>
            <Link to='/about'>
                <img className='home-computer' alt='computer' src='https://drive.google.com/uc?export=view&id=1jfu0OHtWfi5s714et1YFlv_orY-D-yXr' />
            </Link>
        </div>
    )
}

export default LandingPage