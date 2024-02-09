import React from 'react'
import './Projects.css'
export default function Projects() {
  return (
    <div className="container pt-5" id="projects">
      <div className="col-12 d-flex flex-row justify-content-center">
          <h1 style={{color:'darkorange'}} className='pt-3'>Projects</h1>
        </div>
      <div className="row">
           <div className="col-12 col-md-6 col-lg-4">
                <div className="project-card m-2" style={{border:'1px solid white'}}>
                  <img src="https://res.cloudinary.com/dau1qydx2/image/upload/v1702991897/fullstack_rh5tx4.webp" alt="Project 1 Image" width='30%' height='25%' className='my-1'/>
                  <h4 className='m-2'>Employe Management System</h4>
                  <p>This Employee Management System uses ReactJS for a dynamic UI, Spring Boot for a robust back-end API, and MySQL for efficient data storage. It includes features like Adding , Updating , Deleting , Fetching employee , ensuring scalability for organizational growth.</p>
                  <p className='h6 text-info'>Skills: React, Bootstrap, Springboot, MySql</p>
                  <h2 className='text-center'><a className='btn btn-primary mx-3 m-md-4' href='https://github.com/NarendraVarma87/Full-Stack-Project' target='_blank'>Source code</a>
                  <a href="https://employe-management-system-nu.vercel.app/" target='_blank' className='btn btn-primary mx-5'>Live App</a></h2>
                </div>
             </div>
             <div className="col-12 col-md-6 col-lg-4">
                <div className="project-card m-2" style={{border:'1px solid white'}}>
                <img src="https://res.cloudinary.com/dau1qydx2/image/upload/v1706972808/Screenshot_2024-02-03_203530_qmk5lg.png" alt="Project 2 Image"  width='30%' height='25%' className='my-1'/>
                  <h4 className='m-2'>ShopEasy</h4>
                  <p className='mt-2'>ShopEasy is an e-commerce platform designed to simplify your online shopping experience. Browse through a wide range of products, add them to your cart, and place orders hassle-free.
                  React for the frontend.
                  Redux for state management.
                  User-Friendly Interface.
                  </p>
                  <p className='h6 text-info'>Skills: React, Redux, Spring Boot, MySql</p>
                  <h2 className='text-center'><a className='btn btn-primary mx-3 m-md-4' href='https://github.com/NarendraVarma87/ShopEasy' target='_blank'>Source code</a>
                  <a href="https://shop-easy-react-redux.vercel.app/" target='_blank' className='btn btn-primary mx-5'>Live App</a></h2>
              </div>
             </div>
             <div className="col-12 col-md-6 col-lg-4">
                <div className="project-card m-2" style={{border:'1px solid white'}}>
                <img src="https://res.cloudinary.com/dau1qydx2/image/upload/v1702991956/form-validation_lovsdo.jpg" alt="Project 2 Image"  width='30%' height='25%' className='my-1'/>
                  <h4 className='m-2'>Registration Form Validation</h4>
                  <p>Ensure a seamless user experience with React's client-side validation for fields like email and password. Provide real-time feedback and prevent default form submission for better error handling. Use React state to manage dynamic updates, and consider server-side validation.</p>
                  <p className='h6 text-info'>Skills: React</p>
                  <h2 className='text-center'><a className='btn btn-primary mx-3 m-md-4' href='https://github.com/NarendraVarma87/Project/tree/main/application' target='_blank'>Source code</a>
                  <a href="https://form-validation-handling-react.vercel.app/" target='_blank' className='btn btn-primary mx-5'>Live App</a></h2>
              </div>
             </div>
             <div className="col-12 col-md-6 col-lg-4">
                <div className="project-card m-2" style={{border:'1px solid white'}}>
                <img src="https://res.cloudinary.com/dau1qydx2/image/upload/v1702991896/blog_hxusfm.png" alt="Project 1 Image" width='30%' height='25%' className='my-1'/>
                <h4>Responsive Blog</h4>
                <p>Explore the frontend realm through my blog, where I delve into the art of crafting a captivating website. With HTML laying the groundwork, CSS brings life to designs, while Bootstrap streamlines responsiveness. Dive into the world of frontend development, where creativity meets functionality for a visually stunning online presence.</p>
                <p className='h6 text-info'>Skills : Javascript, Bootstrap, Html and Css</p>
                <h2 className='text-center'><a className='btn btn-primary mx-3 m-md-4' href='https://github.com/NarendraVarma87/Bootstrap-frontend-bootcamp' target='_blank'>Source code</a>
                <a href="https://bootstrap5-bootcamp-varma.netlify.app/"  target='_blank' className='btn btn-primary mx-5'>Live App</a></h2>
            </div>
             </div>
             <div className="col-12 col-md-6 col-lg-4">
                <div className="project-card m-2" style={{border:'1px solid white'}}>
                <img src="https://res.cloudinary.com/dau1qydx2/image/upload/v1702991898/spring_ym5gei.png" alt="Project 1 Image"  width='30%' height='25%' className='my-1'/>
                  <h4>Spring Boot JPA</h4>
                  <p>Unlock the power of CRUD operations on MySQL using Spring Boot in this project. Performing Create, Read, Update, and Delete functionalities, with efficiency and simplicity of Spring Boot for robust and scalable database interactions. Dive into the world of backend development, where Spring Boot transforms MySQL operations into a cohesive and powerful system.</p>
                  <p className='h6 text-info'>Skills: Springboot, MySql, Postman</p>
                  <h2 className='text-center'><a className='btn btn-primary' href='https://github.com/NarendraVarma87/Spring-Boot-Applications' target='_blank'>Source code</a>
                  </h2>
                </div>
             </div>
             <div className="col-12 col-md-6 col-lg-4 ">
                <div className="project-card m-2" style={{border:'1px solid white'}}>
                <img src="https://res.cloudinary.com/dau1qydx2/image/upload/v1702991897/reaction_isyit0.png" alt="Project 1 Image"  width='30%' height='25%' className='my-1'/>
                <h4>Simple Reaction Tester</h4>
                <p>Experience the thrill of a Reaction Tester built with JavaScript. This project challenges users with timed tasks, measuring their response times. Leveraging JavaScript's event handling, it offers an interactive and engaging platform to test and enhance reflexes. Dive into this entertaining project that combines coding skills with user interaction for a dynamic web experience.</p>
                <p className='h6 text-info'>Skills: Javascipt, HTML and CSS</p>
                <h2 className='text-center'><a className='btn btn-primary' href='https://github.com/NarendraVarma87/ReactionTester' target='_blank'>Source code</a>
                </h2></div>
             </div>
            <div className="col-12 col-md-6 col-lg-4 ">
              <div className="project-card m-2" style={{border:'1px solid white'}}>
                <img src="https://res.cloudinary.com/dau1qydx2/image/upload/v1706974017/Screenshot_2024-02-03_205630_lxchh7.png" alt=""  width='30%' height='25%' className='my-1' />
                <h4>Basic mobile store </h4>
                <p>Basic mobile store application where used can explore different mobiles and can add to cart. Beginner level project to understand the basic state management in redux.Features User-Friendly Interface: Intuitive design for seamless navigation.
                    Product Showcase: Display of products with detailed descriptions.
                    Shopping Cart: Easily manage your selected items before checkout.
                    Responsive Design: Enjoy a seamless shopping experience across devices.
                </p>
                <p className='h6 text-info'>Skills: React , Redux , Bootstrap</p>
                <h2 className='text-center'><a className='btn btn-primary mx-3 m-md-4' href='https://github.com/NarendraVarma87/react_redux_mobileStore' target='_blank'>Source code</a>
                <a href="https://react-redux-mobile-store.vercel.app/"  target='_blank' className='btn btn-primary mx-5'>Live App</a></h2>
              </div>
            </div>
      </div>
           
    </div>
  )
}
