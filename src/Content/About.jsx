import React from 'react'
import '../Content/Content.css'
export default function About() {
  return (
    <div className="container mt-sm-5" id="about">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <div className="text-md-center mt-4 d-none d-md-block">
            <img
              src="https://res.cloudinary.com/dau1qydx2/image/upload/v1702991857/me_xryjtd.jpg"
              alt="Your Image Alt Text"
              className="img-fluid rounded-circle "
              style={{ width: '380px', height: '380px' }}
            />
          </div>
          <div className="text-md-center m-auto mt-4 im d-md-none">
            <img
              src="https://res.cloudinary.com/dau1qydx2/image/upload/v1702991857/me_xryjtd.jpg"
              alt="Your Image Alt Text"
              className="img-fluid rounded-circle im"
              style={{ width: '380px', height: '380px' }}
            />
          </div>
        </div>
        <div className="col-md-5 text-center ms-0">
          <div className="text-container">
            <h2 className='mt-3 '> Hi, I am
                       <i style={{color:'violet'}}> Narendra Varma</i>  <br/>
                                 <h4 className="my-4" id="typing-text"> I am a <span className="text-info">
                                 Full Stack Developer
                                 </span>
                                        </h4></h2>
            <p className='m-2' >
            As a recent graduate, I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results. My positive attitude and growth mindset drive me to make a meaningful contribution and achieve great things.</p>
                 <span></span>
      <a href='https://drive.google.com/file/d/16dJJuIl-6HLhNpYstKl0FidWsNSvWHwr/view?usp=sharing' target='_blank' className='d-flex btn btn-outline-info p-2' id='resume'>Check Resume</a>

          </div>
        </div>
      </div>
    </div>
  );
}
