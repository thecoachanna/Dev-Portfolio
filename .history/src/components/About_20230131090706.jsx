import React from 'react'

const About = () => {
    return (
      <div name='about' className='w-full h-screen bg-[#F2EDEB] text-[#2b2b46]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-[#ba7ba1]'>
                About
              </p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='sm:text-right text-4xl font-bold text-[#1CB3B5]'>
                <p>Self-motivated | Continually improving</p>
              </div>
              <div>
              <p className='text-[#2b2b46]'>I'm a Software Engineering Intern at a stealth mode start-up and recent bootcamp graduate from General Assembly where I built a strong foundation in web development, including skills in modern front-end and back-end technologies. </p>
              <br></br>
              <p>I am currently gaining hands-on experience in my internship working with serverless architecture and cloud computing within AWS. Specifically building functions in Lambda and implementing AWS Simple Email Service within our React app.</p>
              <br></br>
              <p>As a lifelong learner, I'm excited by the ever-evolving field of software engineering and facing new challenges.</p>
              <br></br>
              <p>In 2023, I'm continuing to work hard in order to land my first full-time role as a Software Engineer and mentor other bootcamp graduates who are hoping to do the same. </p>  
              </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default About;
