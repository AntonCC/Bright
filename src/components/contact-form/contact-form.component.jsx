import React from 'react'
import './contact-form.styles.scss'
import CtaButton from '../cta-button/cta-button.component'

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="container">
        <div className="side-a">
          <h3>Get in Touch</h3>
          <p>Fill out the form below, and we will quickly get in touch.</p>
          <form>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Message" cols="30" rows="10"></textarea>
            <CtaButton text="Submit" textColor="#fff" bgColor="#0d4d4d"/>
          </form>
        </div>
        <div className="side-b">

        </div>
      </div>
    </div>
  )
}
export default ContactForm