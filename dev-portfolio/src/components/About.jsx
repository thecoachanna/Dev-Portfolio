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
              <p className='text-[#2b2b46]'>My career in the fitness industry has taught me how to build relationships, extend empathy, value continued education, generate creative solutions and how to work within a multi-disciplinary team.
            
              </p>  
              </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default About;
