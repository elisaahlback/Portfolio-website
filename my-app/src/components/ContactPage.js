import '.././styles/ContactPage.css';
import React, { useRef, useEffect } from "react";
import NavBar from './NavBar';
import Footer from './Footer';
import { ReactComponent as PhoneIcon } from '.././assets/phone.svg';
import { ReactComponent as EmailIcon } from '.././assets/mail.svg';
import { ReactComponent as LinkedInIcon } from '.././assets/linkedin.svg';
import { ReactComponent as GitHubIcon } from '.././assets/github.svg';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_1a7yfhn', 'template_hsdydij', form.current, {
            publicKey: 'Fiw-zOtmspoiilNGQ',
        })
          .then(
            () => {
            console.log('Email sent!');
            alert('Email sent successfully!');
          }, (error) => {
            console.error('Error sending email:', error.text);
            alert('Oops! Something went wrong.');
          },
        );
    };


  return (
    <div id="contact-page">
        <div className="contact-page-title">Let's talk!</div>

            <div className="contact-container">
                {/* Left: Form */}
                <form ref={form} onSubmit={sendEmail} className="contact-form-box">
                <label className="contact-label">
                    Full Name
                    <input className="contact-form" type="text" name="name" required />
                </label>

                <label className="contact-label">
                    E-mail
                    <input className="contact-form" type="email" name="email" required />
                </label>

                <label className="contact-label">
                    Message
                    <textarea className="contact-form" name="message" required />
                </label>

                <button type="submit" className="send-button">Send</button>
                </form>

                {/* Right: Contact info */}
                <div className="contact-info-box">
                <div className="info-section">
                    <h3>Contact</h3>
                    <p>ahlbackelisa@gmail.com</p>
                    <p>+34620122058</p>
                </div>

                <div className="info-section">
                    <h3>Based in</h3>
                    <p>Gothenburg, Sweden</p>
                    <p>& Copenhagen, Denmark</p>
                    <p>Open to relocating</p>
                </div>
                </div>
            </div>
        </div>
  );
};

export default Contact;