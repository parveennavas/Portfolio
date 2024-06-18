import React, { useRef } from 'react';
import './cont.css';
import emailjs from '@emailjs/browser';

const Cont = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ipor6ei', 'template_npqdqwg', form.current, {
            publicKey: '6kKx5-lkSrdj-eGYP',
          })
          .then(
            () => {
                alert('Form submitted');
                e.target.reset()
              console.log('SUCCESS!');
             
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
   
  return (
    <div className="cont">
      <h1 className="cont-heading">Contact<span className='yel' >Me</span> </h1>
      <p className='des'>Please fill out  the form to discuss any work oppurtunities</p>
      <form className="cont-form" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name"  name="from_name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email" >Your Email</label>
          <input type="email" id="email" name="from_email"  required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="5" required name="message"></textarea>
        </div>
        <button type="submit" className="submit-button" >Send Message</button>
       
      </form>
     
    </div>
   
  );
}

export default Cont;
