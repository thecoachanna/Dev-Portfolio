import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#2b2b46]'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <h4 className='text-[#b34997]'>
                    Hi, my name is</h4>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#f4f4f4]'>
                    Anna Nettles</h1>
                <h3 className='text=4xl sm:text-7xl font-bold text-[#8892b0]'>
                    I'm a Full Stack Developer.</h3>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    I am pursuing a new career path into Software Development after 6 years of working in the fitness industry because I was eager to diversify my skillset and ready to face new challenges. The experience that I've gained through years of coaching individuals and groups has helped me see how much I love building relationships, finding solutions, and being a life-long learner. Much like the fitness industry, Software Development is an ever-evolving field that requires continued education, creative problem solving, and being able to work with a team, which is why it has been a great fit for me.</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#b34997] hover:border-[#b34997'>
                    View Projects
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 ' />
                        </span>                        
                    </button>
                </div>
            </div>




        </div>

    )
}

export default Home