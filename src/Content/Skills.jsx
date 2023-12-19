import React from 'react';
import SkillsColumn from './Skillset';
import './Skills.css'
const Skills = () => {
  const frontendSkills = [
    { name: 'React', icon: '/public/assets/react.png' },
    { name: 'Bootstrap', icon: '/public/assets/bootstrap.png' },
    { name: 'JavaScript', icon: '/public/assets/js.png' },
    { name: 'HTML', icon: '/public/assets/html.png' },
    { name: 'CSS', icon: '/public/assets/css.webp' }
  ];

  const backendSkills = [
    { name: 'Java', icon: 'public/assets/java.jpg' },
    { name: 'J2EE', icon: 'public/assets/jdbc.png' },
    { name: 'Springboot', icon: '/public/assets/springboot-.png' },
    { name: 'MySql', icon: '/public/assets/mysql.png' },
    { name: 'Oracle', icon: '/public/assets/oracle.jpeg' },
  ];

  const otherSkills = [
    { name: 'GitHub', icon: '/public/assets/github-2.png' },
    { name: 'PostMan', icon: '/public/assets/postman.png' },
    { name: 'VSCode', icon: '/public/assets/vscode.jpeg' },
    { name: 'Eclipse', icon: '/public/assets/eclipse.jpeg' },
    { name: 'STS', icon: '/public/assets/sts.jpeg' },
    { name: 'Netlify', icon: '/public/assets/netlify.png' }
  ];

  return (
    <div className="container pt-4" id='skills'>
      <h2 className='text-center m-4 mt-5 text-warning'>Skills</h2>
      <p className='text-center h5 mb-2'>Here are my skills that i have been working from past 6 months</p>
    <div className="row justify-content-center  ">
      <div className="col-lg-6  h5">
        <SkillsColumn title="Frontend" skills={frontendSkills} />
      </div>
      <div className="col-lg-6  h5">
        <SkillsColumn title="Backend" skills={backendSkills} />
      </div>
      <div className="col-lg-8 col-sm-12  h5">
        <SkillsColumn title="Others" skills={otherSkills} />
      </div>
    </div>
    </div>
  );
};

export default Skills;