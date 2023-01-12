import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from "../assets/logob.png";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#F2EDEB] font-semibold text-[#2b2b46]">
            <div>
                <img src={Logo} alt="Logo" style={{ width: "50px" }} />
            </div>

            {/* menu */}           
                <ul className='hidden md:flex'>
                <li>
                    <a href="/">Home</a>
                    </li>
                <li>
                    <a href="/about">About</a>
                    </li>
                <li>
                    <a href="/projects">Projects</a>
                    </li>
                <li>
                    <a href="/skills">Skills</a>
                    </li>
                
                <li>
                    <a href="/contact">Contact</a>
                    </li>
                </ul>
            
            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#2b2b46] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <a href="/">Home</a>
                </li>
                <li className='py-6 text-4xl'>
                    <a href="/about">About</a>
                </li>
                <li className='py-6 text-4xl'>
                    <a href="/skills">Skills</a>
                </li>
                <li className='py-6 text-4xl'>
                    <a href="/projects">Projects</a>
                </li>              
                <li className='py-6 text-4xl'>
                    <a href="/contact">Contact</a>
                </li>
            </ul>

            {/* social icons */}
            <div className='hidden lg:flex fixed flex-column top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#C94277]'>
                        <a className='flex justify-between items-center w-full text-[#F2EDEB]'
                            href='https://www.linkedin.com/in/annanettles/'>Linked In <FaLinkedin size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#BA7BA1]'>
                        <a className='flex justify-between items-center w-full text-[#F2EDEB]'
                            href='https://github.com/thecoachanna'>Github <FaGithub size={30} /></a>
                    </li>
                    
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1cb3b5]'>
                        <a className='flex justify-between items-center w-full text-[#F2EDEB]'
                            href='https://drive.google.com/file/d/1CK388kWYoKsQ9gLGmd12qQzDaLO4uznE/view?usp=share_link'>Resume <BsFillPersonLinesFill size={30} /></a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
