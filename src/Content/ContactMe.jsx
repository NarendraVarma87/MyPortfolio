import React from 'react'
import Contact from './Contact'
export default function ContactMe() {
  return (
    <div className='container' id="contact">
        <div className='row'>
            <div className="col-12 col-md-6 p-3 mt-3">
            <h1 className='text-center' style={{color : 'violet'}}>Contact</h1>
            <p className='my-3'>I believe in the power of collaboration! Whether it's a project, idea, or a new venture, I'm open to working together to create something amazing. Let's connect and explore the possibilities.</p>
            <p className='my-1'>I value diverse perspectives and am always eager to learn. If you have any suggestions, insights, or advice, feel free to share! I appreciate the wisdom of the community.</p>
            <p>Feel free to drop me an email at <a href="mailto:narendravarma97047@gmail.com">narendravarma97047@gmail.com</a>.</p>
            <p> I'm eager to discuss exciting opportunities, receive constructive feedback, or answer any questions you might have about my work.
If you prefer a more direct approach, you can reach me via phone at <a href="tel:+916302510915">Call me</a>. Let's have a conversation about how we can collaborate and create something remarkable together.</p>
<p>I appreciate your time and interest. Looking forward to hearing from you and exploring potential collaborations.</p>
            </div>
        <div className='col-12 col-md-6  text-center  h5' style={{border : '1px solid white',marginTop:'90px'}}>
          <h5 className='text-center text-decoration-underline my-2 text-warning '>Drop your details Here</h5>
          {<Contact/>}
        </div>
     </div>
    </div>
  )
}
