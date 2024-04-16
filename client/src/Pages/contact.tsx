import React from 'react'
import "./contact.css"
import Form from '../components/navabr/form/Form'

import { FaPhone,FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
const Contact = () => {
  return (
    <div>
      <div className='first-partt'>
    

    <p className='first-p'>Let's get in touch!</p>
  
    <div className='support-contact'>
      <div className='support-contact-container'>
        
        <div className='contact-with-icon'>
         <FaPhone className='icon' size={24} style={{color:"gray"}}/>
          <p>phone</p>
        </div>
        <p>Mobile : (+88) 872-670-780</p>
        <p>Mobile : (+88) 872-670-780</p>
      </div>
      <div className='support-contact-container'>
          <div className='contact-with-icon'>
            <FaEnvelope className='icon' size={24} style={{color:"gray"}}/>
            <p>Email</p>
          </div>
          <p>Info@example.com</p>
          <p>Info@example.com</p>
      </div>
      <div className='support-contact-container'>
        <div className='contact-with-icon'>
        <FaMapMarkerAlt className="icon" size={24} style={{color:"gray"}}/>
        <p>Location</p>
        </div>
        <p>Addis Ababa, Ethiopia</p>
      </div>
      </div>

      </div>

      <div className='second-partt'>
      Don't be afraid to contact us!
      </div>

<div className='third-partt'>
  <Form/>
</div>
</div>
  )
}

export default Contact