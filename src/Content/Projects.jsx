import React from 'react'
import './Projects.css'
export default function Projects() {
  return (
    <div className="container" id="projects">
      <div className="col-12 d-flex flex-row justify-content-center text-success">
          <h1>Projects</h1>
        </div>
      <div className="row">
           <div className="col-12 col-md-6 col-lg-4">
                <div className="project-card m-2" style={{border:'1px solid white'}}>
                  <img src="/src/assets/fullstack.webp" alt="Project 1 Image" width='30%' height='25%'/>
                  <h3>Employe Management System</h3>
                  <p>This Employee Management System uses ReactJS for a dynamic UI, Spring Boot for a robust back-end API, and MySQL for efficient data storage. It includes features like Adding , Updating , Deleting , Fetching employee , ensuring scalability for organizational growth.</p>
                  <p className='h6 text-info'>Skills: React, Bootstrap, Springboot, MySql</p>
                  <h2 className='text-center'><a className='btn btn-primary' href='https://github.com/NarendraVarma87/Full-Stack-Project' target='_blank'>Source code</a></h2>
                </div>
             </div>
             <div className="col-12 col-md-6 col-lg-4">
                <div className="project-card m-2" style={{border:'1px solid white'}}>
                <img src="/src/assets/form-validation.jpeg" alt="Project 2 Image"  width='30%' height='25%'/>
                  <h3>Registration Form Validation</h3>
                  <p>Ensure a seamless user experience with React's client-side validation for fields like email and password. Provide real-time feedback and prevent default form submission for better error handling. Use React state to manage dynamic updates, and consider server-side validation for enhanced security.</p>
                  <p className='h6 text-info'>Skills: React</p>
                  <h2 className='text-center'><a className='btn btn-primary' href='https://github.com/NarendraVarma87/Project/tree/main/application' target='_blank'>Source code</a></h2>
              </div>
             </div>
             <div className="col-12 col-md-6 col-lg-4">
                <div className="project-card m-2" style={{border:'1px solid white'}}>
                <img src="/src/assets/blog.png" alt="Project 1 Image" width='30%' height='25%'/>
                <h3>Responsive Blog</h3>
                <p>Explore the frontend realm through my blog, where I delve into the art of crafting a captivating website. With HTML laying the groundwork, CSS brings life to designs, while Bootstrap streamlines responsiveness. JavaScript adds dynamic interactivity, creating a harmonious fusion. Dive into the world of frontend development, where creativity meets functionality for a visually stunning online presence.</p>
                <p className='h6 text-info'>Skills : Javascript, Bootstrap, Html and Css</p>
                <h2 className='text-center'><a className='btn btn-primary' href='https://github.com/NarendraVarma87/Bootstrap-frontend-bootcamp' target='_blank'>Source code</a></h2>
            </div>
             </div>
             <div className="col-12 col-md-6 col-lg-4">
                <div className="project-card m-2" style={{border:'1px solid white'}}>
                <img src="/src/assets/spring.png" alt="Project 1 Image"  width='30%' height='25%'/>
                  <h3>Database Operations with Spring Boot</h3>
                  <p>Unlock the power of CRUD operations on MySQL using Spring Boot in this project. Seamlessly integrate Create, Read, Update, and Delete functionalities, harnessing the efficiency and simplicity of Spring Boot for robust and scalable database interactions. Dive into the world of backend development, where Spring Boot transforms MySQL operations into a cohesive and powerful system.</p>
                  <p className='h6 text-info'>Skills: Springboot, MySql, Postman</p>
                  <h2 className='text-center'><a className='btn btn-primary' href='https://github.com/NarendraVarma87/Spring-Boot-Applications' target='_blank'>Source code</a></h2>
                </div>
             </div>
             <div className="col-12 col-md-6 col-lg-4 ">
                <div className="project-card m-2" style={{border:'1px solid white'}}>
                <img src="/src/assets/reaction.png" alt="Project 1 Image"  width='30%' height='25%'/>
                <h3>Simple Reaction Tester</h3>
                <p>Experience the thrill of a Reaction Tester built with JavaScript. This project challenges users with timed tasks, measuring their response times. Leveraging JavaScript's event handling, it offers an interactive and engaging platform to test and enhance reflexes. Dive into this entertaining project that combines coding skills with user interaction for a dynamic web experience.</p>
                <p className='h6 text-info'>Skills: Javascipt, HTML and CSS</p>
                <h2 className='text-center'><a className='btn btn-primary' href='https://github.com/NarendraVarma87/ReactionTester' target='_blank'>Source code</a></h2>
      </div>
             </div>
             

      </div>
           
    </div>
  )
}
