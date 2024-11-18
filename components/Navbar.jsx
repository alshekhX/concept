"use client";

import Link from 'next/link'
import { useState } from 'react';
import {usePathname} from 'next/navigation'
import { FaBars} from 'react-icons/fa'

const Navbar = () => {

    const pathName= usePathname();
    const [isLoggedIn,setIsLoggedIn]= useState(true); 
    const [isMobileNav,setIsMobileNav]= useState(false); 



const [isMobileMenuOpen, setIsMobileMenuOpen]=useState();
const [isProfileMenuOpen, setIsProfileMenuOpen]=useState();


  return (
    <header className=' bg-darkBlue py-5 px-5 '>
      <nav className=' text-wall container  px-4 mx-auto  flex flex-row justify-between items-center'>
<Link href='/'>
<div className=' text-2xl  font-semibold  '>Concept</div>
</Link>

<ul className= {` mobile-nav  ${isMobileNav?'active':''} flex-col `}  >
<li className=' '>Home</li>
  <li className=' '>Services</li>
  <li className=' '>About</li>
  <li className=' '>Contact</li>
  <li className=' '>Projects</li>
            <li>العربية</li>

          </ul>

          <button  className= 'ham-button'  onClick={()=>setIsMobileNav(prev=>!prev)} ><FaBars/></button>


<ul className=' hidden text-xl md:flex  gap-7 '>

  <li className='  cursor-pointer'>Home</li>
  <li className='  cursor-pointer'>Services</li>
  <li className=' cursor-pointer '>About</li>
  <li className=' cursor-pointer '>Contact</li>
  <li className=' cursor-pointer '>Projects</li>


</ul>
<Link href='/'>
<div className='  md:flex hidden '>العربية</div>
</Link>
</nav>

    </header>
  );
};

export default Navbar;
