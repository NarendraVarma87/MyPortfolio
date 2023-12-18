import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      alert('Details Submitted');
  
      emailjs.sendForm('service_zr1dfbr', 'template_fp18t5q', form.current, 'Wrl7ek6Vz3JscQBSQ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div>
        <form ref={form} onSubmit={sendEmail}>
      <label className='form-label'>Name : </label>
      <input type="text" name="user_name" className='form-control bs-info-border-subtle'/> <br/>
      <label  className='form-label'>Email : </label>
      <input type="email" name="user_email" className='form-control bs-dark-bg-subtle' /> <br/>
      <label  className='form-label'>Mobile : </label>
      <input type="number" name="user_number" className='form-control bs-dark-bg-subtle' /> <br/>
      <label  className='form-label'>Message : </label>
      <textarea name="message" className='form-control bs-info-border-subtle' />
      <input type="submit" value="Send" className='btn btn-outline-primary w-50 my-3'/>
    </form>
    </div>
  )
}
