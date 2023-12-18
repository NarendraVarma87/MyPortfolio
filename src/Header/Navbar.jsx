import React from "react"
import './Navbar.css'
export default function Navbar() {
  return (
    <div className='container mx-4'>
    <nav className="navbar navbar-expand-md text-primary navbar-dark bg-black fixed-top mx-5">
        <a href="#" className="navbar-brand h1"> PortFolio</a>
        <button type="button" data-bs-toggle ="collapse" data-bs-target='#collapsenavbar'
        className="navbar-toggler" aria-aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigator'>
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsenavbar">
            <ul className='navbar-nav ms-auto'>
                <li className="nav-item mx-5"><a href="#about" className="nav-link">About</a></li>
                <li className="nav-item mx-5"><a href="#skills" className="nav-link">Skills</a></li>
                <li className="nav-item mx-5"><a href="#projects" className="nav-link">Projects</a></li>
                <li className="nav-item mx-5"><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
            <a href="https://github.com/NarendraVarma87" target="_blank" id="git" className="d-flex ms-auto btn btn-outline-primary d-inline-sm ms-5">GitHub</a>
            </div>
            </nav>
    </div>
  )
}