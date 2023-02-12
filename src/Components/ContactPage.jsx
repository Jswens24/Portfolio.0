import React, { useEffect } from 'react';
import './ContactPage.css';

const ContactPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const copyEmailHandler = () => {
        // navigator.clipboard.writeText('jessica.swenson.dev@gmail.com')
        window.prompt('Copy to clipboard:', 'jessica.swenson.dev@gmail.com')
        // alert('copied to clipboard')
    }

    return (
        <div id='contact-page' className='start-contact-page'>
            <div className='gold-box-div'>
                <div className="contact-buttons-flex">
                    <h2 className='contact-me-h2'>CONTACT</h2>
                    <div className='contact-btn-container'>
                        <form>
                            <button formAction='https://github.com/Jswens24' className='github-btn'>
                                <i class="devicon-github-original-wordmark colored"></i>
                            </button>
                        </form>
                        <form>
                            <button formAction='https://www.linkedin.com/in/jessica-swenson-9a8b85194/' className='github-btn'>
                                <i class="devicon-linkedin-plain"></i>
                            </button>
                        </form>
                        <button type='button' className='github-btn' onClick={copyEmailHandler}>
                            <img className='letter' alt='email logo' src='https://drive.google.com/uc?export=view&id=1qBO76ahBiGPs7UOCp0soBEq_K3NX4suz' />
                        </button>
                    </div>
                </div>
                <div className='gold-box-div contact-form-div'>
                    <form action="https://formsubmit.co/jessica.swenson.dev@gmail.com" method="POST" className="contact-form">
                        <input type="hidden" name="_subject" value="New contact submission!" />
                        <input type="hidden" name="_next" value="https://jessica-swenson.com/"></input>
                        <input type="hidden" name="_autoresponse" value="Thank you for reaching out, I will be contacting you soon!" />
                        <div className="name-email-label">
                            <label>NAME: <input type='text' name='name' required /> </label>
                            <label>EMAIL: <input type='text' name='email' required /> </label>
                        </div>
                        <div className="textarea-flex">
                            <label>MESSAGE: <textarea name='message' required></textarea> </label>
                        </div>
                        <button type='submit' className='contact-btn submit-btn'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>

    )
};

export default ContactPage;