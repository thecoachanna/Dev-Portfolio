import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#f2edeb] text-[#2b2b46]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#ba7ba1] '>Skills</p>
              <p className='py-4 font-medium'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#f2edeb] text-center py-8'>
              <div className='shadow-md shadow-[#2b2b46] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4 text-[#2b2b46]'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#2b2b46] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                  <p className='my-4 text-[#2b2b46]'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#2b2b46] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                  <p className='my-4 text-[#2b2b46]'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#2b2b46] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                  <p className='my-4 text-[#2b2b46]'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#2b2b46] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="Github icon" />
                  <p className='my-4 text-[#2b2b46]'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#2b2b46] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="NodeJS icon" />
                  <p className='my-4 text-[#2b2b46]'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#2b2b46] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="MongoDB icon" />
                  <p className='my-4 text-[#2b2b46]'>MONGO DB</p>
                  </div>
                <div className='shadow-md shadow-[#2b2b46] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                  <p className='my-4 text-[#2b2b46]'>Tailwind</p>
              </div>
              
          </div>
      </div>
    </div>
  );
};

export default Skills;