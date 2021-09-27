import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import emailIcon from '../../assets/images/email-icon.png';
import GitIcon from '../../assets/images/Github-icon.png';

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
        setFormState({ [e.target.name]: e.target.value });
        console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
            setErrorMessage('Your email is invalid.');
        } else {
            setErrorMessage('');
        }
        } else {
        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
        } else {
            setErrorMessage('');
        }
        }
    };


    return (
        <section id="contact-me">
        <h2 class="secondary-title">Contact Me</h2>
      {/* <h1 data-testid="h1tag">Contact me</h1> */}
      <form id="contact-form" className="container" onSubmit={handleSubmit}>
        <div className="row">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className="row">
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className="row">
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" className="btn btn-secondary my-2" type="submit">Submit</button>
      </form>
        <div>
            <h2 className="reach-out">Reach out to me through
                the following contact methods:
            </h2>
        </div>
        <div className="contact-info container">
            <div className="row">
                    <div className="col-md">
                        <a href="mailto:briagasdavid@yahoo.com">
                            briagasdavid@yahoo.com  <img className="emailIcon" src={emailIcon} alt="email me"/>
                        </a>
                    </div>
                    <div className="col-md">
                    <a href="https://github.com/BriagasD98">
                        BriagasD98  <img className="emailIcon" src={GitIcon} alt="GitHub" />
                    </a>
                    </div>
            </div>
        </div>
    </section>
    )
};

export default Contact;