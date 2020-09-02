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
            <CtaButton text="Submit" textColor="#fff" bgColor="#0d4d4d" align="flex-start"/>
          </form>
        </div>
        <div className="side-b">
          <h3>Connect with us</h3>
          <p>For any questions or support:</p>
          <p>Email us at <span className="color">example@test.com</span></p>
          <p>Call us at <span className="color">1.999.888.7777</span></p>
          <div className="address">
            <p className="bold">Bright USA</p>
            <p>1202 Example Road, Suite 706</p>
            <p>New Bloomfield, PA, 15608</p>
            <p>USA</p>
          </div>
          <div className="address">
            <p className="bold">Bright UK</p>
            <p>1508 Example Road, Suite 304</p>
            <p>London, 13908</p>
            <p>UK</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactForm