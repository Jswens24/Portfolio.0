import React from 'react';
import './ContactPage.css';

const ContactPage = () => {

    const copyEmailHandler = () => {
        // navigator.clipboard.writeText('jessica.swenson.dev@gmail.com')
        window.prompt('Copy to clipboard:', 'jessica.swenson.dev@gmail.com')
        // alert('copied to clipboard')
    }

    return (
        <div id='contact-page' className='start-contact-page'>
            <div className='gold-box-div'>
                <h2 className='contact-me-h2'>CONTACT</h2>
                <div className='contact-btn-container'>
                    <form>
                        <button formAction='https://github.com/Jswens24' className='contact-btn'>GITHUB</button>
                    </form>
                    <form>
                        <button formAction='https://www.linkedin.com/in/jessica-swenson-9a8b85194/' className='contact-btn'>LINKEDIN</button>
                    </form>
                    <button type='button' className='contact-btn' onClick={copyEmailHandler}>EMAIL</button>
                </div>
                <div className='gold-box-div contact-form-div'>
                    <form action="https://formsubmit.co/jessica.swenson.dev@gmail.com" method="POST" className="contact-form">
                        <input type="hidden" name="_subject" value="New contact submission!" />
                        <input type="hidden" name="_next" value="http://localhost:3000/#contact-page"></input>
                        <input type="hidden" name="_autoresponse" value="Thank you for reaching out, I will be contacting you soon!" />
                        <label>NAME: <input type='text' name='name' required /> </label>
                        <label>EMAIL: <input type='text' name='email' required /> </label>
                        <div className="textarea-flex">
                            <label>MESSAGE: <textarea name='message' required></textarea> </label>
                        </div>
                        <button type='submit' className='contact-btn submit-btn'>SUBMIT</button>
                    </form>
                </div>
            </div>
            <div className="about-arrow-div">
                <a href="#landing-page"><div className='arrow up'></div></a>
                <a href="#landing-page"><div className='arrow up'></div></a>
                <a href="#landing-page"><div className='arrow up'></div></a>
            </div>
        </div>
    )
};

export default ContactPage;