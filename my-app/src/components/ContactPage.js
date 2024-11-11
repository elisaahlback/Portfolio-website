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
        <div class="row">
            <div className="col d-flex justify-content-center contact-page-title">
                Let's talk!
            </div>
        </div>

        <div class="row contact-row align-items-center justify-content-center flex-wrap">
            <div className="col-7 flex-column">
                <form ref={form} id="contact-form" onSubmit={sendEmail}>
                    <div className="row send-message-row justify-content-center mb-3">
                        <div class="col-6 name-label">
                            Name
                            <input class="form-control" type="text" name="name" required />
                        </div>
                    </div>
                    <div className="row send-message-row justify-content-center mb-3">
                        <div class="col-6 email-label">
                            E-mail
                            <input class="form-control" type="email" name="email" required />
                        </div>
                    </div>
                    <div class="row send-message-row justify-content-center mb-3">
                        <div class="col-6">
                            Message
                            <textarea class="form-control text-start" name="message" required />
                        </div>
                    </div>
                    <div class="row send-button-row justify-content-end">
                        <div class="col-6 text-end">
                            <button type="submit" class="send-button">Send</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-5 contact-info-box d-flex flex-column align-items-center justify-content-center my-auto">
                    <div className="row contact-info-row mb-4">
                        <div className="col-1 d-flex justify-content-center align-items-center">
                            <EmailIcon id="contact-icon" />
                        </div>
                        <div className="col-11 d-flex align-items-center">
                            ahlbackelisa@gmail.com
                        </div>
                    </div>
                    <div className="row contact-info-row mb-4">
                        <div className="col-1 d-flex justify-content-center align-items-center">
                            <PhoneIcon id="contact-icon" />
                        </div>
                        <div className="col-11 d-flex align-items-center">
                            0034620122058
                        </div>
                    </div>
                    <div className="row contact-info-row">
                        <div className="col-1 d-flex justify-content-center align-items-center">
                            <LinkedInIcon id="contact-icon" />
                        </div>
                        <div className="col-11 d-flex align-items-center">
                            <a href="https://www.linkedin.com/in/elisa-ahlbäck-norris-1102991b6" target="_blank" id="name-linkedin">Elisa Ahlbäck Norris</a>
                        </div>
                </div>
            </div>
        </div>

    </div>
  );
};

export default Contact;