import React from 'react';
import '../Content/Skills.css'
const SkillsColumn = ({ title, skills }) => {
  return (
    <div className="row" id='used'>
      <h2 className='text-center text-info mt-2'>{title}</h2>
      <ul className="list-unstyled d-lg-flex flex-row justify-content-center" id='try'>
        {skills.map((skill, index) => (
          <li key={index}>
            <div className="col-lg-5 d-lg-flex" id='stl'>
            <img className = 'babu mt-1' src={skill.icon} alt={`${skill.name} icon`} />
            <p className='mt-2 text-primary'>{skill.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  
  
  );
};

export default SkillsColumn;