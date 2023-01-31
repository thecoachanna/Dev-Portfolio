import React from 'react'


const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#F2EDEB]'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <h4 className='text-[#C94277] font-semibold'>
                    Hi, my name is</h4>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#1CB3B5]'>
                    Anna Nettles</h1>
                <h3 className='text=4xl sm:text-7xl font-bold text-[#2B2B46]'>
                    I'm a Full Stack Developer.</h3>
                <p className='text-[#2B2B46] py-4 max-w-[700px]'>
                    After 6 years of working in the fitness industry I chose to pursue a new career path into Software Development because I was ready to diversify my skillset and face new challenges.
                </p>
                <p>
                    Please take a look around!</p>
                <div>
                    <button className='text-[#C94277] border-[#C94277] font-medium group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#C94277] hover:text-[#F2EDEB] hover:border-[#F2EDEB]'>
                        
                        <a href="/projects">View Projects</a>
                  </button>
                </div>
            </div>




        </div>

    )
}

export default Home