import '../index.css';
import React, { ReactNode } from 'react';
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';



interface LayoutProps {
    children: ReactNode;
};




const Layout : React.FC <LayoutProps> = ({ children }) => {
  return (
    <div className='min-h-screen bg-bgTwo flex flex-col'>
        
        <nav className='flex gap-3 md:gap-5 lg:gap-7 capitalize bg-black justify-end pt-5'>
            
            <div className='flex gap-3 md:gap-5 lg:gap-7 capitalize mb-5 pt-b pb-5'>
            {/* <p className='text-amber-50 mt-4'>Home</p> */}
            <Link to="/all-videos"><p className='text-amber-50 mt-4'>All Videos</p> </Link>
            <Link to="/sign-in"><p className='text-amber-50 mt-4'>Sign Up</p></Link>
            <Link to="/"><h1 className='text-2xl font-bold text-green-500 bg-black pl-5 px-5 pt-3'>Rack & Stack</h1></Link>
            </div>
        </nav>
     
       
        <main className='flex-1 flex flex-col justify-center w-full mt-16'>{children}</main>
        
     
      <footer className='bg-black py-6 border-t-[1px] border-t-black z-50'>
        <div className='flex gap-3 justify-center pt-5 pb-5 bg-black'>
            <a href="https://github.com/unitedwestand0" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"> 
                <FaGithub size={24} color="white" /> 
            </a>
            <a href="https://x.com/RSOXART/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="X">
                <FaXTwitter size={24} color="white" />
            </a>
            <a href="https://www.linkedin.com/in/rachel-ramsey-908a9076/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
                <FaLinkedin size={24} color="white" />
            </a>

        </div>
        <section className='text-sm text-gray-400 text-center pt-3 pb-3'>Rack & Stack. All rights reserved  |  Copyright © 2025 </section>
      </footer>
    </div>
  )
}

export default Layout

