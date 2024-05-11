import React, { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({
      from_name: '',
      user_mail: '',
      user_phone: '',
      message: '',
    });

    const sendEmail = (e) => {
      e.preventDefault();
      setShowMessage(true);

      setFormData({
        from_name: '',
        user_mail: '',
        user_phone: '',
        message: '',
      });
  
      emailjs.sendForm('service_zr1dfbr', 'template_fp18t5q', form.current, 'Wrl7ek6Vz3JscQBSQ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='px-5'>
        {showMessage && <div className='text-success m-1'>Your details submitted successfully...</div>}
        <form ref={form} onSubmit={sendEmail}>
      <label className='form-label' style={{display: 'block'}}>Name : </label>
      <input type="text" name="from_name" className='form-control bs-info-border-subtle'
           placeholder='Enter your Name' value={formData.from_name}
               onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                       style={{ fontSize: '1.2rem' }}/> 
      <br/>
      <label  className='form-label'>Email : </label>
      <input type="email" name="user_mail" className='form-control bs-dark-bg-subtle'
            placeholder='Enter your Email'
                  value={formData.user_mail}
                     onChange={(e) => setFormData({ ...formData, user_mail: e.target.value })}
                      style={{ fontSize: '1.2rem' }}/> 
      <br/>
      <label  className='form-label'>Mobile : </label>
      <input type="number" name="user_phone" className='form-control bs-dark-bg-subtle'
       placeholder='Enter your Mobile Number' value={formData.user_phone}
            onChange={(e) => setFormData({ ...formData, user_phone: e.target.value })} 
                 style={{ fontSize: '1.2rem' }}/> 
      <br/>
      <label  className='form-label'>Message : </label>
      <textarea name="message" className='form-control bs-info-border-subtle'
       placeholder='share your thoughts / feedback here...'
       value={formData.message}
       onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
       style={{ fontSize: '1.2rem' }}/>
      <input type="submit" value="Send" className='btn btn-outline-primary w-50 my-3'/>
    </form>
    </div>
  )
}
