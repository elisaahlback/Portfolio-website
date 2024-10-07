import '.././styles/ContactPage.css';
import React from "react";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { ReactComponent as PhoneIcon } from '.././assets/phone.svg';
import { ReactComponent as EmailIcon } from '.././assets/mail.svg';
import { ReactComponent as LinkedInIcon } from '.././assets/linkedin.svg';
import { ReactComponent as GitHubIcon } from '.././assets/github.svg';

function Contact() {
  return (
    <div className="App" id="contact-page">
        <NavBar />
        <div class="row">
            <div className="col d-flex justify-content-start contact-page-title">
                Let's talk!
            </div>
        </div>

        <div class="row contact-row align-items-start justify-content-center flex-wrap">
            <div class="col-7 flex-column align-items-start">
                <div class="row send-message-row justify-content-center mb-3">
                    <div class="col-6 name-label">
                        Name
                        <input class="form-control" type="text" id="name-input"/>
                    </div>
                    <div class="col-6 email-label">
                        E-mail
                        <input class="form-control" type="text" id="email-input"/>
                    </div>
                </div>
                <div class="row send-message-row justify-content-center mb-3">
                    <div class="col-12">
                        Message
                        <input class="form-control text-start" type="text" id="message-input"/>
                    </div>
                </div>
                <div class="row send-button-row justify-content-end">
                    <div class="col-12 text-end">
                        <a class="send-button">Send</a>
                    </div>
                </div>
            </div>
            <div class="col-5 d-flex flex-column align-items-center justify-content-center my-auto">
                <div className="contact-info-box">
                    <div className="row contact-info-row mb-4">
                        <div className="col-3 d-flex justify-content-center align-items-center">
                            <EmailIcon id="contact-icon" />
                        </div>
                        <div className="col-9 d-flex align-items-center">
                            ahlbackelisa@gmail.com
                        </div>
                    </div>
                    <div className="row contact-info-row mb-4">
                        <div className="col-3 d-flex justify-content-center align-items-center">
                            <PhoneIcon id="contact-icon" />
                        </div>
                        <div className="col-9 d-flex align-items-center">
                            0034620122058
                        </div>
                    </div>
                    <div className="row contact-info-row">
                        <div className="col-3 d-flex justify-content-center align-items-center">
                            <LinkedInIcon id="contact-icon" />
                        </div>
                        <div className="col-9 d-flex align-items-center">
                            <a href="https://www.linkedin.com/in/elisa-ahlbäck-norris-1102991b6" target="_blank" id="name-linkedin">Elisa Ahlbäck Norris</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  );
};

export default Contact;