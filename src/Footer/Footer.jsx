import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div id='footer'>
      <footer className="p-5 text-center position-relative mt-5">
            <div className="container">
              <p className="lead text-light">Copyright &copy; Varma's PortFolio 2023 </p>
              <a href="#" class="position-absolute bottom-0 end-0 p-5">
                <i className="fas fa-arrow-up"></i>
              </a>
              <h5 className='my-2 text-center text-success'>Let's connect and make things happen! 🚀</h5>
            <div className='container  my-1'>
                <a href='https://www.linkedin.com/in/narendra-varma-uppalapati/' target='_blank' className='btn mx-3 h1'>
                    <span className='fab fa-linkedin'></span>
                </a>
                <a href='https://www.instagram.com/narendra_varma107/' target='_blank' className='btn mx-4 h1'>
                    <span className='fab fa-instagram'></span>
                </a>
                <a href='https://github.com/NarendraVarma87' target='_blank' className='btn mx-4 h1'>
                    <span className='fab fa-github'></span>
                </a>
            </div>
              <h6>Check out my recent blog on <a href='https://bootstrap5-bootcamp-varma.netlify.app/' target='_blank' >Frontend</a></h6>
            </div>
          </footer>
    </div>
  )
}
