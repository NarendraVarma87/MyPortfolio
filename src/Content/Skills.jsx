import React from 'react';
import SkillsColumn from './Skillset';
import './Skills.css'
const Skills = () => {
  const frontendSkills = [
    { name: 'React', icon: '/src/assets/react.png' },
    { name: 'Bootstrap', icon: '/src/assets/bootstrap.png' },
    { name: 'JavaScript', icon: '/src/assets/js.png' },
    { name: 'HTML', icon: '/src/assets/html.png' },
    { name: 'CSS', icon: '/src/assets/css.webp' }
  ];

  const backendSkills = [
    { name: 'Java', icon: '/src/assets/java.webp' },
    { name: 'J2EE', icon: '/src/assets/jdbc.png' },
    { name: 'Springboot', icon: '/src/assets/springboot-.png' },
    { name: 'MySql', icon: '/src/assets/mysql.png' },
    { name: 'Oracle', icon: '/src/assets/oracle.jpeg' },
  ];

  const otherSkills = [
    { name: 'GitHub', icon: '/src/assets/github-2.png' },
    { name: 'PostMan', icon: '/src/assets/postman.png' },
    { name: 'VSCode', icon: '/src/assets/vscode.jpeg' },
    { name: 'Eclipse', icon: '/src/assets/eclipse.jpeg' },
    { name: 'STS', icon: '/src/assets/sts.jpeg' },
    { name: 'Netlify', icon: '/src/assets/netlify.png' }
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