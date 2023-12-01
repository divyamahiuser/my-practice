import React, { useState } from 'react';
import Home17 from '../Assets/Home5-17.png';
import Vec03 from '../Assets/vec03.png';
import Home15 from '../Assets/Home5-15.png';
import Ban14 from '../Assets/Ban14.png';
import '../App.css';
import './HomePart11.css';
import '../Animation.css'
import emailjs from '@emailjs/browser';

export default function HomePart11() {

    const [form, setForm] = useState({
        userName: "",
        mobileNumber: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prevForm => {
            return {
                ...prevForm,
                [name] : value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)

        // My EmailJS ServiceID, TemplateID, publicKey
        const serviceID = "service_emgjrrq";
        const templateID = "template_d7rghk9";
        const publicKey = "1xVt2DFv_jhqhMeUV";

        // create a new object that creates dynamic template params
        const templateParams = {
            from_name: form.userName,
            from_mobileNumber: form.mobileNumber,
            from_email: form.email,
            message: form.message
        }

        emailjs.send(serviceID, templateID, templateParams, publicKey) 
            .then((response) => {
                console.log('Email Sent Successfully', response)
            })
            .catch((error) => {
                console.log("Error Occured when sending emails", error)
            })
        
    }

  return (
    <div className='homepart11-maincontainer'>
      <img className='movingImage Ban14img' src={Ban14} alt="Ban14" />
    <div className='homepart11container'>
      <div>
      <img className='Vec03img' src={Vec03} alt="Ban14" />
      </div>
      <div className='Home17img-div'>
        <img className='movingImage Home17img' src={Home17} alt="Home17" />
      </div>
      <div>
      <div className='textandform'>
        <h6 style={{paddingBottom: '13px'}} className='h6'>Get in Touch</h6>
        <h3 style={{paddingBottom: '32px'}} className='h3'>We Provide Best Software Services. Need Help?</h3>
        <form className='formdata-container' onSubmit={handleSubmit}>
            <div className='formdata-inputdiv'>
            <input 
              className='formdata-inputs'
              type="text" 
              placeholder='Your Name*'
              name='userName'
              value={form.userName}
              onChange={handleChange}
            />
            </div>
            <div className='formdata-inputdiv'>
            <input 
              className='formdata-inputs'
              type="text" 
              placeholder='Your Mobile Number'
              name='mobileNumber'
              value={form.mobileNumber}
              onChange={handleChange}
            />
            </div>
            <div className='formdata-inputdiv'>
            <input 
              className='formdata-inputs'
              type="text" 
              placeholder='Your Email*'
              name='email'
              value={form.email}
              onChange={handleChange}
            />
            </div>
            <div className='formdata-textarea'>
            <textarea 
              className='formdata-inputmessage'
              placeholder='Message*'
              name='message'
              value={form.message}
              onChange={handleChange}
            />
            </div>
            <button style={{marginTop: "5px"}} className='orange-btn'>Send Message</button>
            <img className='movingImage Home15img' src={Home15} alt="Ban14" />
        </form>
        
      </div>
      </div>
    </div>
    </div>
  )
}
