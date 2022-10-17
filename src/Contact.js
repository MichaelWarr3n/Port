import './Contact.css';
import React from 'react';
import phone from './phone.png';
import github from './github.png';
import email from './envelope.png';
import linkedIn from './linked-in.png';

function Contact() {

    return (
        <div className="page contactPage">
            <div className="contactContainer">
                <figure className="contactIconText">
                    <a className="anchorReset" href="https://github.com/MichaelWarr3n" target="_blank" aria-label='Michael Warrens Github'>
                        <img src={github} className="contactIcon" alt='' />
                        <figcaption className="contactText bold">michaelwarr3n</figcaption>
                    </a>
                </figure>
                <figure className="contactIconText">
                    <a className="anchorReset" href="tel:+447936326348" target="_blank" aria-label='Michael Warrens Phone Number'>
                        <img src={phone} className="contactIcon" alt='' />
                        <figcaption className="contactText bold">+447936326348</figcaption>
                    </a>
                </figure>
                <figure className="contactIconText">
                    <a className="anchorReset" href="mailto:mjwarren96@yahoo.co.uk" target="_blank" aria-label='Michael Warrens Email Address'>
                        <img src={email} className="contactIcon" alt='' />
                        <figcaption className="contactText bold">mjwarren96@yahoo.co.uk</figcaption>
                    </a>
                </figure>
                <figure className="contactIconText">
                    <a className="anchorReset" href="https://www.linkedin.com/in/michael-warren-b03367176/" target="_blank" aria-label='Michael Warrens Linkedin profile'>
                        <img src={linkedIn} className="contactIcon" alt='' />
                        <figcaption className="contactText bold">Michael Warren</figcaption>
                    </a>
                </figure>
            </div>
        </div>
    );
}

export default Contact;