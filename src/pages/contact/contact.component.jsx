import React from 'react'
import FullScreenContact from '../../components/full-screen-contact/full-screen-contact.component'
import ContactForm from '../../components/contact-form/contact-form.component'
import PageBottomInfo from '../../components/page-bottom-info/page-bottom-info.component'

const bottomInfo = {
  title: 'Thank you for your interest in Bright',
  subTitle: 'Together we can pave a new way for education',
  link: '/try',
  btnText: 'Try Bright'
}

const Contact = () => {
  return (
    <div>
      <FullScreenContact />
      <ContactForm />
      <PageBottomInfo {...bottomInfo}/>
    </div>
  )
}
export default Contact