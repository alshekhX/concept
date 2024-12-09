import ContactForm from '@/components/contact/ContactForm'
import ContactHero from '@/components/contact/ContactHero'
import VisitUS from '@/components/contact/VisitUS'
import WhyUs from '@/components/contact/WhyUs'
import React from 'react'


const ContactUs = () => {
  return (
    <div>
<ContactHero
  />
  <WhyUs/>
  <ContactForm/>
  <VisitUS/>

    </div>
  )
}

export default ContactUs