import React from 'react';
import SkillsColumn from './Skillset';
import './Skills.css'
const Skills = () => {
  const frontendSkills = [
    { name: 'React', icon: 'https://res.cloudinary.com/dau1qydx2/image/upload/v1702990928/react_fosutk.png' },
    {name :'Redux', icon :'https://res.cloudinary.com/dau1qydx2/image/upload/v1706974435/redux_v6o6ei.png'},
    { name: 'Bootstrap', icon: 'https://res.cloudinary.com/dau1qydx2/image/upload/v1702990924/bootstrap_qoyvc4.png' },
    { name: 'JavaScript', icon: 'https://res.cloudinary.com/dau1qydx2/image/upload/v1702990927/js_suc50i.png' },
    { name: 'HTML', icon: 'https://res.cloudinary.com/dau1qydx2/image/upload/v1702990927/html_rzuwhv.png' },
    { name: 'CSS', icon: 'https://res.cloudinary.com/dau1qydx2/image/upload/v1702990925/css3_qnuhba.jpg' }
  ];

  const backendSkills = [
    { name: 'Java', icon: 'https://res.cloudinary.com/dau1qydx2/image/upload/v1702990927/java_uxmpq0.jpg' },
    { name: 'J2EE', icon: 'https://res.cloudinary.com/dau1qydx2/image/upload/v1702992083/jdbc_cvpsy4.png' },
    { name: 'Springboot', icon: 'https://res.cloudinary.com/dau1qydx2/image/upload/v1702990845/springboot-_oslvew.png' },
    { name: 'MySql', icon: 'https://res.cloudinary.com/dau1qydx2/image/upload/v1702990927/mysql_qrvvpc.png' },
    { name: 'Oracle', icon: 'https://res.cloudinary.com/dau1qydx2/image/upload/v1702991859/oracle_gijikd.jpg' },
  ];

  const otherSkills = [
    { name: 'GitHub', icon: 'https://res.cloudinary.com/dau1qydx2/image/upload/v1702990926/github-2_bojg3b.png' },
    { name: 'PostMan', icon: 'https://res.cloudinary.com/dau1qydx2/image/upload/v1702990927/postman_jtolk4.png' },
    { name: 'VSCode', icon: 'https://res.cloudinary.com/dau1qydx2/image/upload/v1702990928/vscode_qmskm9.jpg' },
    { name: 'Eclipse', icon: 'https://res.cloudinary.com/dau1qydx2/image/upload/v1702990926/eclipse_uasgks.jpg' },
    { name: 'STS', icon: 'https://res.cloudinary.com/dau1qydx2/image/upload/v1702991732/sts_ysgmgt.jpg' },
    { name: 'Netlify', icon: 'https://res.cloudinary.com/dau1qydx2/image/upload/v1702990928/netlify_cz0peq.png' },
    {name : 'Vercel' , icon :'https://res.cloudinary.com/dau1qydx2/image/upload/v1706974988/vercel_mst6cv.png'}
  ];

  return (
    <div className="container pt-4" id='skills'>
      <h2 className='text-center m-4 mt-5 text-warning'>Skills</h2>
      <p className='text-center h5 mb-2'>Here are my skills that i have been working from past 10 months</p>
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